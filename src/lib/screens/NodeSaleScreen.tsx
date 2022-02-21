import {
  faCalculator,
  faCheck,
  faChevronDown,
  faChevronUp,
  faDownload,
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CheckoutComponent } from "../components/CheckoutComponent";
import { TransferInstructions } from "../components/common/TransferInstruction";
import { NetworkStatusComponent } from "../components/NetworkStatusComponent";
import { NodeInfoComponent } from "../components/NodeInfoComponent";
import { PriceDetailComponent } from "../components/PriceDetailComponent";
import { PriceDetailFromUsdComponent } from "../components/PriceDetailFromUsdComponent";
import { TipComponent } from "../components/TipComponent";
import { WalletInstructions } from "../components/WalletInstructions";
import { SocialUrls } from "../data/menus";
import { Currency, currencyToString } from "../enums";
import { formatPrice } from "../formatting";
import { PriceDetail, PriceDetailFromUsd } from "../models";
import { scrollToElement } from "../scroller";
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
  top: 38px;
  left: 0;
  z-index: 1000;
`;

const TermsModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5000;

  display: flex;
  justify-content: center;
  align-items: center;

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(3px);
  }

  .content {
    width: 100%;
    max-width: 1600px;
    max-height: 80vh;
    overflow-y: auto;
  }

  li {
    margin-top: 20px;
    font-size: 12px;
  }
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

  const [walletReady, setWalletReady] = useState(false);

  const [tipStep, setTipStep] = useState(-1);
  const [ready, setReady] = useState(false);

  const [showingTransferInstructions, setShowingTransferInstructions] =
    useState(false);

  const [transferInstructionsAsset, setTransferInstructionsAsset] = useState<
    string | null
  >(null);
  const [transferInstructionsAmount, setTransferInstructionsAmount] = useState<
    number | null
  >(null);
  const [transferInstructionAddress, setTransferInstructionsAddress] = useState<
    string | null
  >(null);

  const [transferInstructionId, setTransferInstructionsId] = useState<
    string | null
  >(null);

  const [termsVisible, setTermsVisible] = useState(false);

  const [instructionsVisible, setInstructionsVisible] = useState(false);

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
    updateTips(-1);
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

    scrollToElement("details");
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
      <TipContainer ref={tipContainerRef} id="tipContainer">
        <SectionContent style={{ backgroundColor: "rgba(0,0,0,.9)" }}>
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
                  </a>{" "}
                  or connect with us on{" "}
                  <a
                    href={SocialUrls.discord}
                    target="_blank"
                    className="text-light"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                  .
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
                  the address listed along with any transaction fees from your
                  provider if applicable.
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
                  </a>{" "}
                  or connect with us on{" "}
                  <a
                    href={SocialUrls.discord}
                    target="_blank"
                    className="text-light"
                    rel="noreferrer"
                  >
                    Discord
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

          <SectionContent>
            <SectionHeading4>Wallet</SectionHeading4>
            <p>
              Before continuing, make sure you have your RBX wallet setup on
              your computer. Please click on the download wallet software button
              now.
            </p>
            <button className="btn btn-light text-uppercase button-3d-white ps-3">
              Download Wallet Software
              <span className="px-2">
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
              </span>
            </button>
            <span className="px-1"></span>
            <button
              className="btn btn-light text-uppercase button-3d-white ps-3"
              onClick={() => {
                setInstructionsVisible(!instructionsVisible);
              }}
            >
              Installation Instructions
              <span className="px-2">
                {instructionsVisible ? (
                  <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                )}
              </span>
            </button>
            <span className="px-1"></span>
            <button
              className="btn btn-light text-uppercase button-3d-white ps-3"
              onClick={() => {
                setWalletReady(true);
                setInstructionsVisible(false);
                updateTips(0);
                // window.scrollTo(0, 0);
                scrollToElement("priceCalculator");
              }}
            >
              I'm Ready
              <span className="px-2">
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </span>
            </button>
          </SectionContent>

          {instructionsVisible ? (
            <div>
              <WalletInstructions></WalletInstructions>
              <div className="py-3 text-center">
                <button
                  className="btn btn-light text-uppercase button-3d-white ps-3"
                  onClick={() => {
                    setWalletReady(true);
                    setInstructionsVisible(false);

                    updateTips(0);
                    window.scrollTo(0, 0);
                  }}
                >
                  I'm Ready
                  <span className="px-2">
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </span>
                </button>
              </div>
            </div>
          ) : null}

          {walletReady ? (
            <div className="row">
              <div className="col-12 col-md-4 order-0 order-md-1">
                <SectionContent>
                  <NodeInfoComponent />
                </SectionContent>
              </div>
              <div className="col-12 col-md-8 order-1 order-md-0">
                <SectionContent id="priceCalculator">
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
          ) : null}

          {/* <div className="py-3"></div> */}
          <div id="details"></div>
          {calcType === "price" && priceDetail ? (
            <div className="row">
              <div className="col-12 col-md-6">
                <PriceDetailComponent priceDetail={priceDetail} />
              </div>
              <div className="col-12 col-md-6">
                <CheckoutComponent
                  priceDetail={priceDetail}
                  onCheckout={() => {
                    setTermsVisible(true);

                    updateTips(2);
                  }}
                  onShowTransferInstructions={(
                    asset: string,
                    amountOwed: number,
                    address: string,
                    id: string
                  ) => {
                    if (asset == null) {
                      setShowingTransferInstructions(false);
                      return;
                    }
                    setTransferInstructionsAsset(asset);
                    setTransferInstructionsAmount(amountOwed);
                    setTransferInstructionsAddress(address);
                    setTransferInstructionsId(id);

                    setShowingTransferInstructions(true);
                    scrollToElement("transferInstructions");
                  }}
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
                  onCheckout={() => {
                    setTermsVisible(true);

                    updateTips(2);
                  }}
                  onShowTransferInstructions={(
                    asset: string,
                    amountOwed: number,
                    address: string,
                    id: string
                  ) => {
                    if (asset == null) {
                      setShowingTransferInstructions(false);
                      return;
                    }
                    setTransferInstructionsAsset(asset);
                    setTransferInstructionsAmount(amountOwed);
                    setTransferInstructionsAddress(address);
                    setTransferInstructionsId(id);

                    setShowingTransferInstructions(true);
                    scrollToElement("transferInstructions");
                  }}
                />
              </div>
            </div>
          ) : null}
          <div id="transferInstructions"></div>
          {showingTransferInstructions ? (
            <TransferInstructions
              asset={transferInstructionsAsset!}
              amount={transferInstructionsAmount!}
              address={transferInstructionAddress!}
              id={transferInstructionId!}
            />
          ) : null}
        </div>
      </Section>
      {termsVisible ? (
        <TermsModal>
          <div className="cover"></div>
          <div className="content">
            <SectionContent>
              <SectionHeading4>
                Node Sale Purchase Disclosure and Acknowledgement
              </SectionHeading4>
              <p>
                By completing your transaction for RBX Masternode(s) and
                participating in the Testnet you acknowledge and agree to the
                following:
              </p>

              <ol>
                <li>
                  The RBX wallet you are downloading today for your node(s)
                  purchase is a Testnet version of the wallet provided and will
                  be needed to be updated by you when the network broadcasts
                  available said updates in a timely manner in order to utilize
                  all the intended wallet functions and features. The initial
                  Testnet wallet you are downloading now is strictly for you to
                  hold your RBX coin (per the minimum requirements) and operate
                  your node(s) purchased per the instructions provided.
                </li>
                <li>
                  Your node(s) and RBX coin that come with your purchase will
                  always be guaranteed by the network to be held by your wallet
                  that you generate on this presale through the duration of the
                  Testnet unless transferred by you. Should you transfer any
                  coin to another RBX wallet address that is created by you, you
                  would then be responsible for maintaining said additional
                  wallets as well as the initial one generated on your purchase.
                  Should you transfer any of your initial purchase in part or
                  whole to a third party, the network cannot be responsible for
                  any portion of your original purchase that may be misplaced or
                  stolen by a third party upon a said transfer.
                </li>
                <li>
                  You acknowledge and agree by completing this transaction and
                  should you choose to operate your Masternode(s), that you will
                  be participating in the Testnet phase of the RBX network. By
                  doing so, you will be required to operate your node(s) per the
                  minimum standards as defined in the “Become a Masternode”
                  section of the network site upon the activation of your
                  node(s).{" "}
                </li>
                <li>
                  All node(s) that participate in the Testnet by simply running
                  the wallet validator program in the background on a device,
                  per the minimum specifications, will be eligible to receive
                  block rewards per the block rewards schedule if selected by
                  the random stochastic ordering system on the network for
                  validator selection. Any block rewards earned will
                  automatically appear in your wallet balance that is staked in
                  conjunction with you operating your node(s).
                </li>
                <li>
                  You acknowledge and agree that being a validator in the
                  Testnet does not guarantee that block rewards earned and
                  awarded will be retained in the event a block is required to
                  roll back due to error or otherwise. This would also include
                  the possibility of a need to reset the chain as a result of a
                  major event or unresolvable bug during the Tesnet phase for
                  the network. It is the developer team's intention to avoid
                  such events, however, you should expect such events as more
                  than likely and common amongst most blockchain protocols when
                  in a Testnet phase. The network cannot make any guarantees as
                  to how many block rewards will be retained by each validator
                  at the conclusion of the Testnet, however, the developer team
                  will make all reasonable efforts to ensure block reward loss
                  is kept to a minimum as much as possible.
                </li>
                <li>
                  At the conclusion of the Testnet, the developer team will
                  assess any block reward loss should they occur and make a
                  reasonable effort to airdrop rewards to those affected. You
                  acknowledge and agree that any said rewards are given, should
                  they be provided, will more than likely not equal the amount
                  of block rewards earned had a transaction(s) be successfully
                  validated under normal circumstances. Your participation in
                  the Testnet on that basis is completely optional but
                  encouraged in order to launch a safe and secure Mainnet that
                  scales appropriately.
                </li>
              </ol>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Are you sure you want to cancel this transaction?"
                    );

                    if (confirmed) {
                      window.location.href = "/nodes";
                    }
                  }}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-light"
                  onClick={() => {
                    setTermsVisible(false);
                  }}
                >
                  I AGREE
                </button>
              </div>
            </SectionContent>
          </div>
        </TermsModal>
      ) : null}
    </div>
  );
}
