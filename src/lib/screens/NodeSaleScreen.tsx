import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutComponent } from "../components/CheckoutComponent";
import { NetworkStatusComponent } from "../components/NetworkStatusComponent";
import { NodeInfoComponent } from "../components/NodeInfoComponent";
import { PriceDetailComponent } from "../components/PriceDetailComponent";
import { PriceDetailFromUsdComponent } from "../components/PriceDetailFromUsdComponent";
import { Currency, currencyToString } from "../enums";
import { PriceDetail, PriceDetailFromUsd } from "../models";
import { getDetails, getDetailsFromUsd } from "../service";
import { hideLoader, showLoader } from "../store/loader";

export function NodeSaleScreen() {
  const dispatch = useDispatch();
  const networkIsOnline = useSelector((state: any) => state.network.value);

  const calcTypes = ["price", "amount"];
  const currencyTypes = [Currency.Btc, Currency.Eth, Currency.Ltc];

  const [calcType, setCalcType] = useState(calcTypes[0]);
  const [currencyType, setCurrencyType] = useState(currencyTypes[0]);
  const [nodeAmount, setNodeAmount] = useState(1);
  const [usdAmount, setUsdAmount] = useState(3000);

  const [priceDetail, setPriceDetail] = useState<PriceDetail | null>(null);
  const [priceDetailFromUsd, setPriceDetailFromUsd] =
    useState<PriceDetailFromUsd | null>(null);

  const calculate = async () => {
    setPriceDetail(null);
    dispatch(showLoader());
    const details: PriceDetail = await getDetails(nodeAmount, currencyType);
    dispatch(hideLoader());
    setPriceDetail(details);
  };

  const calculateFromUsd = async () => {
    setPriceDetail(null);

    if (!usdAmount) {
      return;
    }

    dispatch(showLoader());
    const details: PriceDetailFromUsd = await getDetailsFromUsd(usdAmount);
    dispatch(hideLoader());
    setPriceDetailFromUsd(details);
  };
  if (!networkIsOnline) {
    return <p className="text-center">Network connection issue detected.</p>;
  }
  return (
    <div className="screen screen-node-sale">
      <div className="container py-2">
        <NetworkStatusComponent />

        <div className="row">
          <div className="col-12 col-md-6 order-0 order-md-1">
            <NodeInfoComponent />
          </div>
          <div className="col-12 col-md-6 order-1 order-md-0">
            <h3 className="text-center">Price Calculator</h3>
            <div className="text-center">
              <div
                className="nav nav-tabs"
                role="group"
                aria-label="Calculator Type"
              >
                {calcTypes.map((c) => {
                  return (
                    <button
                      key={c}
                      className={`nav-link ${calcType === c ? "active" : ""}`}
                      onClick={() => {
                        setCalcType(c);
                        setPriceDetail(null);
                        setPriceDetailFromUsd(null);
                      }}
                    >
                      {c === "price" ? "Node to Price" : "Price to Nodes"}
                    </button>
                  );
                })}
              </div>
            </div>

            {calcType === "price" ? (
              <div className="mt-3">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"># of Nodes</div>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          max={4000}
                          min={1}
                          value={nodeAmount}
                          onFocus={(e) => e.target.select()}
                          onChange={(e) => {
                            if (e.target.value) {
                              setNodeAmount(parseInt(e.target.value));
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2"></div>
                <div className="row">
                  <div className="col">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Currency"
                    >
                      {currencyTypes.map((c) => {
                        return (
                          <button
                            key={c}
                            type="button"
                            className={`btn ${
                              currencyType === c
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                            onClick={() => setCurrencyType(c)}
                          >
                            {currencyToString(c)}
                          </button>
                        );
                      })}
                    </div>
                    <span className="px-2"></span>
                    <button className="btn btn-primary" onClick={calculate}>
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">$USD</div>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          min={0}
                          value={usdAmount}
                          onFocus={(e) => e.target.select()}
                          onChange={(e) => {
                            if (e.target.value) {
                              setUsdAmount(parseInt(e.target.value));
                            }
                          }}
                        />
                        <button
                          className="btn btn-primary"
                          onClick={calculateFromUsd}
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="py-3"></div>

        {calcType === "price" && priceDetail ? (
          <div className="row">
            <div className="col-12 col-md-6">
              <PriceDetailComponent priceDetail={priceDetail} />
            </div>
            <div className="col-12 col-md-6">
              <CheckoutComponent priceDetail={priceDetail} />
            </div>
          </div>
        ) : null}

        {calcType === "amount" && priceDetailFromUsd ? (
          <div className="row">
            <div className="col-12 col-md-6">
              <PriceDetailFromUsdComponent priceDetail={priceDetailFromUsd} />
            </div>
            <div className="col-12 col-md-6">
              <CheckoutComponent priceDetailFromUsd={priceDetailFromUsd} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
