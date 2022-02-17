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
import { Web3ButtonsComponent } from "./Web3ButtonsComponent";
import { SectionContent, SectionHeading4 } from "../styles/styled";
import { ThemeColors } from "../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface Props {
  priceDetail?: PriceDetail;
  priceDetailFromUsd?: PriceDetailFromUsd;
  onCheckout: Function;
}

export function CheckoutComponent(props: Props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [manualSelected, setManualSelected] = useState(false);

  const [emailValue, setEmailValue] = useState("");
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
      props.onCheckout();
    } else {
      alert("A problem occurred");
    }

    dispatch(hideLoader());
  };

  const redirectToStatusScreen = () => {
    const id = "testid1234"; //TODO: replace with below
    // const id = transactionId;
    navigate(`/nodes/status/${id}`);
  };

  return (
    <SectionContent>
      <SectionHeading4>Checkout</SectionHeading4>

      {!props.priceDetail && props.priceDetailFromUsd && !checkoutDetails ? (
        <>
          <div className="form-group py-2">
            <div className="btn-group" role="group" aria-label="Currency">
              {currencyTypes.map((c) => {
                return (
                  <button
                    key={c}
                    type="button"
                    className={`btn ${
                      currencyType === c ? "btn-light" : "btn-outline-light"
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
            <div className="py-1"></div>
            <input
              type="number"
              className="form-control bg-dark text-light"
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
              <label>Email Address</label>
              <input
                type="email"
                className="form-control bg-dark text-light"
                placeholder="email@domain.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              {invalidEmail ? (
                <small className="text-danger">Invalid Email</small>
              ) : null}
            </div>

            <div className="form-group py-1">
              <label>RBX Wallet Address</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder="Rxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                value={addressValue}
                onChange={(e) => setAddressValue(e.target.value)}
              />
              {invalidAddress ? (
                <small className="text-danger">Invalid Address</small>
              ) : null}
              {/* <div>
                <small
                  className="badge mt-2"
                  style={{
                    backgroundColor: ThemeColors.mutedBright,
                    cursor: "pointer",
                  }}
                >
                  What's this?
                </small>
              </div> */}
            </div>
            <div className="text-end pt-2">
              <button
                className="btn btn-light  text-uppercase button-3d-white"
                onClick={handleFormSubmit}
              >
                Continue
              </button>
            </div>
          </div>
        ) : null}
        {checkoutDetails && !manualSelected ? (
          <div>
            <div className="card">
              <div
                style={{ backgroundColor: ThemeColors.darker }}
                className="card-header d-flex justify-content-between align-items-center"
              >
                <h5 className="mb-0">Ready for transfer</h5>
                <button
                  className="btn btn-link text-light"
                  onClick={() => setCheckoutDetails(null)}
                >
                  Edit Details
                </button>
              </div>
              <div className="card-body bg-dark">
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
                      className="form-control bg-dark text-light"
                      readOnly
                      value={transactionId}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light  text-uppercase button-3d-white"
                        onClick={() => {
                          copyToClipboard(transactionId);
                          addToast(`${transactionId} copied to clipboard`, {
                            appearance: "success",
                            autoDismiss: true,
                          });
                        }}
                      >
                        Copy&nbsp;
                        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
                <h6 className="mt-2 text-center" style={{ fontWeight: "bold" }}>
                  Transfer Options
                </h6>
                <Web3ButtonsComponent
                  asset={checkoutDetails.asset}
                  amount={checkoutDetails.amountOwed}
                  address={checkoutDetails.address}
                />
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
              <h5
                className="card-header"
                style={{ backgroundColor: ThemeColors.darker }}
              >
                Manual Transfer
              </h5>
              <div className="card-body bg-dark">
                <p>
                  Please send exactly{" "}
                  <strong>
                    {checkoutDetails.amountOwed} {checkoutDetails.asset}
                  </strong>{" "}
                  to:
                </p>
                <div className="input-group">
                  <input
                    className="form-control bg-dark text-light"
                    readOnly
                    value={checkoutDetails.address}
                  ></input>

                  <div className="input-group-append">
                    <button
                      className="btn btn-light  text-uppercase button-3d-white"
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
                      Copy&nbsp;
                      <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="card-footer"
                style={{ backgroundColor: ThemeColors.darker }}
              >
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-link text-light"
                    onClick={() => setManualSelected(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-light text-uppercase button-3d-white"
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
    </SectionContent>
  );
}
