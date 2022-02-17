import { faCalculator, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CheckoutComponent } from "../components/CheckoutComponent";
import { NetworkStatusComponent } from "../components/NetworkStatusComponent";
import { NodeInfoComponent } from "../components/NodeInfoComponent";
import { PriceDetailComponent } from "../components/PriceDetailComponent";
import { PriceDetailFromUsdComponent } from "../components/PriceDetailFromUsdComponent";
import { TipComponent } from "../components/TipComponent";
import { Currency, currencyToString } from "../enums";
import { formatPrice } from "../formatting";
import { PriceDetail, PriceDetailFromUsd } from "../models";
import { getDetails, getDetailsFromUsd } from "../service";
import { hideLoader, showLoader } from "../store/loader";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
  SectionHeading4,
} from "../styles/styled";
import { ThemeColors } from "../theme";

const TipContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 40px;
  left: 0;
  z-index: 1000;
`;

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

  const [tipContainerHeight, setTipContainerHeight] = useState(100);
  const tipContainerRef = useRef<HTMLDivElement>(null);

  const [tipStep, setTipStep] = useState(0);
  const [ready, setReady] = useState(false);

  const updateTipContainerHeight = () => {
    const h = tipContainerRef.current?.clientHeight || 100;

    setTipContainerHeight(h + 12);
  };

  const authenticate = () => {
    if (localStorage.getItem("pwd") !== "doughnuts") {
      const p = window.prompt("Launching Soon");
      if (p !== "doughnuts") {
        window.location.href = "/";

        return;
      }
    }

    localStorage.setItem("pwd", "doughnuts");
    setReady(true);
    updateTips(0);
  };

  useEffect(() => {
    authenticate();

    window.addEventListener("resize", updateTipContainerHeight, false);
    updateTipContainerHeight();
  }, []);

  const updateTips = (step: number) => {
    setTipStep(step);
    setTimeout(() => {
      updateTipContainerHeight();
    }, 1);
  };

  const calculate = async () => {
    setPriceDetail(null);
    dispatch(showLoader());
    const details: PriceDetail = await getDetails(nodeAmount, currencyType);
    dispatch(hideLoader());
    setPriceDetail(details);

    updateTips(1);
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

  if (!ready) {
    return <></>;
  }

  return (
    <div className="screen screen-node-sale">
      <TipContainer ref={tipContainerRef}>
        <SectionContent>
          {tipStep === 0 ? (
            <div>
              <TipComponent>
                <span>
                  First select how many nodes you would like to purchase.
                </span>
              </TipComponent>
              <TipComponent>
                <span>Then select the currency you'd like to use.</span>
              </TipComponent>
              <TipComponent subtle>
                <span>
                  Not sure how many you want? Use the "Price to Nodes" option to
                  find out.
                </span>
              </TipComponent>
            </div>
          ) : null}

          {tipStep === 1 ? (
            <div>
              <TipComponent>
                <span>
                  Review the pricing details in the box labeled "Details".
                </span>
              </TipComponent>

              <TipComponent>
                <span>
                  Begin the checkout process by entering your email address and
                  your RBX Address.
                </span>
              </TipComponent>

              <TipComponent subtle>
                <span>
                  Not sure what your RBX Address is?{" "}
                  <a href="mailto:hello@reserveblock.io" className="text-light">
                    Contact Support
                  </a>
                </span>
              </TipComponent>
            </div>
          ) : null}
          {tipStep === 2 ? (
            <div>
              <TipComponent>
                <span>
                  Time to checkout! You can pay via the following options.
                </span>
              </TipComponent>

              <TipComponent>
                <span>
                  For a manual transaction, be sure to send the exact amount to
                  the address listed.
                </span>
              </TipComponent>

              <TipComponent>
                <span>
                  Should you need to correct your transaction prior to checkout,
                  please click the "Edit Details" link in the checkout window.
                </span>
              </TipComponent>

              <TipComponent subtle>
                <span>
                  Need help?{" "}
                  <a href="mailto:hello@reserveblock.io" className="text-light">
                    Contact Support
                  </a>
                </span>
              </TipComponent>
            </div>
          ) : null}
        </SectionContent>
      </TipContainer>

      <div style={{ height: tipContainerHeight }}></div>

      <Section fill style={{ paddingTop: 0 }}>
        <div className="container">
          <NetworkStatusComponent />
          <SectionHeading1>Node Presale</SectionHeading1>

          {/* <div className="py-5"></div> */}
          <div className="row">
            <div className="col-12 col-md-6 order-0 order-md-1">
              <SectionContent>
                <NodeInfoComponent />
              </SectionContent>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-0">
              <SectionContent>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <SectionHeading4>Price Calculator</SectionHeading4>
                  {calcType !== "price" ? null : (
                    <div>
                      {nodeAmount} Node{nodeAmount === 1 ? "" : "s"} ={" "}
                      {formatPrice(nodeAmount * 1570)} USD
                    </div>
                  )}
                </div>
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
                          className={`nav-link ${
                            calcType === c ? "active" : "text-light"
                          }`}
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
                              <div
                                className="input-group-text text-light"
                                style={{
                                  backgroundColor: ThemeColors.mutedDark,
                                }}
                              >
                                # of Nodes
                              </div>
                            </div>
                            <input
                              type="number"
                              className="form-control bg-dark text-light"
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
                                className={`btn btn-lg ${
                                  currencyType === c
                                    ? "btn-light"
                                    : "btn-outline-light"
                                }`}
                                onClick={() => setCurrencyType(c)}
                              >
                                {currencyToString(c)}
                              </button>
                            );
                          })}
                        </div>
                        <span className="px-2"></span>
                        <button
                          className="btn btn-light  text-uppercase button-3d-white"
                          onClick={calculate}
                        >
                          Calculate&nbsp;
                          <FontAwesomeIcon
                            icon={faCalculator}
                          ></FontAwesomeIcon>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <div
                                className="input-group-text text-light"
                                style={{
                                  backgroundColor: ThemeColors.mutedDark,
                                }}
                              >
                                $USD
                              </div>
                            </div>
                            <input
                              type="number"
                              className="form-control bg-dark text-light"
                              min={0}
                              value={usdAmount}
                              onFocus={(e) => e.target.select()}
                              onChange={(e) => {
                                if (e.target.value) {
                                  setUsdAmount(parseInt(e.target.value));
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            className="btn btn-light text-uppercase button-3d-white"
                            onClick={calculateFromUsd}
                          >
                            Calculate&nbsp;
                            <FontAwesomeIcon
                              icon={faCalculator}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SectionContent>
            </div>
          </div>

          {/* <div className="py-3"></div> */}

          {calcType === "price" && priceDetail ? (
            <div className="row">
              <div className="col-12 col-md-6">
                <PriceDetailComponent priceDetail={priceDetail} />
              </div>
              <div className="col-12 col-md-6">
                <CheckoutComponent
                  priceDetail={priceDetail}
                  onCheckout={() => updateTips(2)}
                />
              </div>
            </div>
          ) : null}

          {calcType === "amount" && priceDetailFromUsd ? (
            <div className="row">
              <div className="col-12 col-md-6">
                <PriceDetailFromUsdComponent priceDetail={priceDetailFromUsd} />
              </div>
              <div className="col-12 col-md-6">
                <CheckoutComponent
                  priceDetailFromUsd={priceDetailFromUsd}
                  onCheckout={() => updateTips(2)}
                />
              </div>
            </div>
          ) : null}
        </div>
      </Section>
    </div>
  );
}
