import { useState } from "react";
import { CheckoutDetails, PriceDetail, PriceDetailFromUsd } from "../models";
import { allocateAddress, getIp } from "../service";
import { copyToClipboard, generateId } from "../utils";
import { validateAddress, validateEmail } from "../validation";
import { useToasts } from "react-toast-notifications";
import { hideLoader, showLoader } from "../store/loader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Currency, currencyToString } from "../enums";
import { DetailCardComponent } from "./DetailCardComponent";

interface Props {
  priceDetail?: PriceDetail;
  priceDetailFromUsd?: PriceDetailFromUsd;
}

export function CheckoutComponent(props: Props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [manualSelected, setManualSelected] = useState(false);

  const [emailValue, setEmailValue] = useState("tyler@tylersavery.com");
  const [addressValue, setAddressValue] = useState(
    "RKKtgMG3iYJ17CvRcuzeLvr1Ty4BoCdc11"
  );

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);

  const [transactionId, setTransactionId] = useState<string>("");
  const [checkoutDetails, setCheckoutDetails] =
    useState<CheckoutDetails | null>(null);

  const currencyTypes = [Currency.Btc, Currency.Eth, Currency.Ltc];
  const [currencyType, setCurrencyType] = useState(currencyTypes[0]);

  const initialTotalNodes = props.priceDetailFromUsd
    ? props.priceDetailFromUsd.totalNodesPossible
    : props.priceDetail!.nodeAmount;

  const [totalNodes, setTotalNodes] = useState<number>(initialTotalNodes);

  const { addToast } = useToasts();

  const validateForm = (): boolean => {
    setInvalidEmail(false);
    setInvalidAddress(false);
    let isValid = true;
    if (!emailValue || !validateEmail(emailValue)) {
      setInvalidEmail(true);
      isValid = false;
    }

    if (!addressValue || !validateAddress(addressValue)) {
      setInvalidAddress(true);
      isValid = false;
    }

    return isValid;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    dispatch(showLoader());

    const ip = await getIp();
    const id = generateId();
    setTransactionId(id);

    let details: CheckoutDetails;

    if (props.priceDetail) {
      const p = props.priceDetail;

      details = await allocateAddress(
        emailValue,
        p.assetName,
        ip,
        id,
        addressValue,
        p.nodeAmount
      );
    } else if (props.priceDetailFromUsd) {
      const p = props.priceDetailFromUsd;
      details = await allocateAddress(
        emailValue,
        currencyToString(currencyType),
        ip,
        id,
        addressValue,
        totalNodes
      );
    } else {
      return;
    }

    if (details.success) {
      setCheckoutDetails(details);
    } else {
      alert("A problem occurred");
    }

    dispatch(hideLoader());
  };

  const redirectToStatusScreen = () => {
    const id = "testid1234"; //TODO: replace with below
    // const id = transactionId;
    navigate(`/status/${id}`);
  };

  return (
    <div>
      <h4 className="text-center text-md-start">Checkout</h4>

      {!props.priceDetail && props.priceDetailFromUsd && !checkoutDetails ? (
        <>
          <div className="form-group py-1">
            <div className="btn-group" role="group" aria-label="Currency">
              {currencyTypes.map((c) => {
                return (
                  <button
                    key={c}
                    type="button"
                    className={`btn ${
                      currencyType === c ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => setCurrencyType(c)}
                  >
                    {currencyToString(c)}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-group">
            <label>Total Nodes</label>
            <input
              type="number"
              className="form-control"
              value={totalNodes}
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                if (!e.target.value) {
                  return;
                }
                let v = parseInt(e.target.value);
                if (v > props.priceDetailFromUsd!.totalNodesPossible) {
                  v = props.priceDetailFromUsd!.totalNodesPossible;
                } else if (v < 1) {
                  v = 1;
                }
                setTotalNodes(v);
              }}
              min={1}
              max={props.priceDetailFromUsd.totalNodesPossible}
            />
          </div>
        </>
      ) : null}

      <div className="row">
        {!checkoutDetails ? (
          <div>
            <div className="form-group py-1">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              {invalidEmail ? (
                <small className="text-danger">Invalid Email</small>
              ) : null}
            </div>

            <div className="form-group py-1">
              <input
                type="email"
                className="form-control"
                placeholder="RBX Address"
                value={addressValue}
                onChange={(e) => setAddressValue(e.target.value)}
              />
              {invalidAddress ? (
                <small className="text-danger">Invalid Address</small>
              ) : null}
              <div>
                <small
                  className="badge bg-primary"
                  style={{ cursor: "pointer" }}
                >
                  What's this?
                </small>
              </div>
            </div>
            <div className="text-end">
              <button className="btn btn-primary" onClick={handleFormSubmit}>
                Continue
              </button>
            </div>
          </div>
        ) : null}
        {checkoutDetails && !manualSelected ? (
          <div>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Ready for transfer</h5>
                <button
                  className="btn btn-link"
                  onClick={() => setCheckoutDetails(null)}
                >
                  Edit Details
                </button>
              </div>
              <div className="card-body">
                <div className="form-group pb-2">
                  <div className="row">
                    <div className="col">
                      <DetailCardComponent
                        label="Total Due"
                        value={`${checkoutDetails.amountOwed} ${checkoutDetails.asset}`}
                      ></DetailCardComponent>
                    </div>
                    <div className="col">
                      <DetailCardComponent
                        label="Total Nodes"
                        value={`${totalNodes}`}
                      ></DetailCardComponent>
                    </div>
                  </div>
                  <div className="py-2"></div>
                  <label>Transaction ID:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={transactionId}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          copyToClipboard(transactionId);
                          addToast(`${transactionId} copied to clipboard`, {
                            appearance: "success",
                            autoDismiss: true,
                          });
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <h6 className="mt-2 text-center">Transfer Options</h6>
                <div className="py-1">
                  <button className="btn btn-secondary w-100">Metamask</button>
                </div>
                <div className="py-1">
                  <button className="btn btn-secondary w-100">Coinbase</button>
                </div>
                <div className="py-1">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() => setManualSelected(true)}
                  >
                    Manual
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {manualSelected && checkoutDetails ? (
          <div>
            <div className="card text-center">
              <h5 className="card-header">Manual Transfer</h5>
              <div className="card-body">
                <p>
                  Please send exactly{" "}
                  <strong>
                    {checkoutDetails.amountOwed} {checkoutDetails.asset}
                  </strong>{" "}
                  to:
                </p>
                <div className="input-group">
                  <input
                    className="form-control"
                    readOnly
                    value={checkoutDetails.address}
                  ></input>

                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        copyToClipboard(checkoutDetails.address);
                        addToast(
                          `${checkoutDetails.address} copied to clipboard`,
                          {
                            appearance: "success",
                            autoDismiss: true,
                          }
                        );
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-link"
                    onClick={() => setManualSelected(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={redirectToStatusScreen}
                  >
                    Okay, done!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
