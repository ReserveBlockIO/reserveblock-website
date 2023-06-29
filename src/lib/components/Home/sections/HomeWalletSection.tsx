import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/SectionHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { WalletDetailsComponent } from "../../common/WalletDetailsComponent";
import { Download } from "../Download";
import styled from "styled-components";
import { WalletInstructions } from "../../WalletInstructions";
import { useEffect, useState } from "react";
import {
  faChevronDown,
  faChevronUp,
  faDownload,
  faLink,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { cliDownload, isMobile, isMobileOS } from "../../../utils";
import { githubFiles } from "../../../../github-files";
import { WIKI_BASE_URL } from "../../../constants";
import { formatNumber } from "../../../formatting";
import OverlayModal from "../../OverlayModal";
import PaymentTermsCopy from "../../PaymentTermsCopy";

const Decor = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  left: 0;
  background-image: url(/img/decor/bg_04.png);
  background-size: cover;
  background-position: center bottom;
  opacity: 0.6;
`;

export const HomeWalletSection = () => {
  const [gettingStartedVisible, setGettingStartedVisible] = useState(false);
  const [showingWalletDownload, setShowingWalletDownload] = useState(false);

  const MAX_IFRAME_WIDTH = 1000;
  const MAX_IFRAME_HEIGHT = 700

  const [iframeWidth, setIframeWidth] = useState(MAX_IFRAME_WIDTH);
  const [iframeHeight, setIframeHeight] = useState(MAX_IFRAME_HEIGHT);

  const [paymentTermsVisible, setPaymentTermsVisible] = useState(false);
  const [paymentRevealed, setPaymentRevealed] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  const coinType = "RBX";
  const fiatType = "USD";
  const amount = 1000;

  const paymentUrl = `https://rbx.banxa-sandbox.com/?coinType=${coinType}&fiatType=${fiatType}&coinAmount=${amount}&blockchain=${coinType}`


  useEffect(() => {
    function handleResize() {

      const w = window.innerWidth;
      const h = window.innerHeight;

      const targetW = w * 0.75;
      const targetH = h * 0.75;

      setIframeWidth(targetW > MAX_IFRAME_WIDTH ? MAX_IFRAME_WIDTH : targetW);
      setIframeHeight(targetH > MAX_IFRAME_HEIGHT ? MAX_IFRAME_HEIGHT : targetH);

    }
    window.addEventListener('resize', handleResize)

    handleResize();
  }, [])

  return (
    <>
      <Section fill={true} center={true} id="wallet">
        <Decor />
        <div className="container">
          <SectionHeaderComponent
            title="RBX Wallet"
            subtitle="Unlocking Autonomy"
            transitionDuration={500}
            transitionDirection="left"
          />
          <VisibilityTransition>
            <SectionContent>
              <p className="mb-0">
                Below are the inherent RBX wallet functions. These functions are
                what are needed to achieve most common transactions. Additional
                features can be added or unlocked as the network grows over
                time.
              </p>
            </SectionContent>
          </VisibilityTransition>
          <WalletDetailsComponent />
          <div className="py-3" />
          <div className="row">
            <div className="col-12 col-md-4  pb-5">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="Get Started"
                  buttonText="Install and Operating Instructions"
                  url={`${WIKI_BASE_URL}/docs/GUI/`}
                  icon={faLink}
                />
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-4 pb-5">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="Core Wallet"
                  buttonText="Download Wallet"
                  onClick={() => {
                    setShowingWalletDownload(!showingWalletDownload);
                  }}
                  icon={faDownload}
                />
              </VisibilityTransition>
              <div
                className="py-1"
                style={
                  showingWalletDownload
                    ? {}
                    : { display: 'none', pointerEvents: "none" }
                }
              >
                {isMobileOS() ? (
                  <p
                    className="text-center mb-1"
                    style={{ fontWeight: "bold", fontSize: 16 }}
                  >
                    Wallet downloads are for desktop only.
                  </p>
                ) : null}
                <>
                  <a
                    className="btn btn-light w-100"
                    href={githubFiles.gui.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Windows/Mac GUI
                    <br />
                    <small>
                      <strong>
                        v.{githubFiles.gui.tag} - {githubFiles.gui.date}
                      </strong>
                    </small>
                  </a>
                  <a
                    className="btn btn-light w-100 mt-1"
                    href={githubFiles.cli.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    CLI
                    <br />
                    <small>
                      <strong>
                        v.{githubFiles.cli.tag} - {githubFiles.cli.date}
                      </strong>
                    </small>
                  </a>

                  <a
                    className="btn btn-light w-100 mt-1"
                    href={githubFiles.snapshot.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Snapshot
                    <br />
                    <small>
                      <strong>
                        Height: {formatNumber(githubFiles.snapshot.height)} - {githubFiles.snapshot.date}
                      </strong>
                    </small>
                  </a>
                </>
              </div>
            </div>
            <div className="col-12 col-md-4  pb-5">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="WEB WALLET"
                  buttonText="Create Web Wallet"
                  url="https://wallet.rbx.network/"
                  openExternal
                  icon={faGlobe}
                />
              </VisibilityTransition>
            </div>
          </div>
          {/* <div className="py-3 d-none d-md-block"></div> */}

          {gettingStartedVisible ? (
            <div className="py-3">
              <WalletInstructions />
            </div>
          ) : null}

          <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-4 pb-4">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="SMART CONTRACTS / NFTs"
                  buttonText="Activated"
                  noIcon
                  noCaps
                  url={`${WIKI_BASE_URL}/docs/FAQs/smart-contract-faq/`}
                />
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-4 pb-4">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="P2P Auctions"
                  buttonText="Activated"
                  noIcon
                  noCaps
                  url={"https://wiki.reserveblock.io/docs/GUI/p2p-auctions"}
                />
              </VisibilityTransition>
            </div>

            <div className="col-12 col-md-4 pb-4">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="Get $RBX Now"
                  buttonText="Launch On-Ramp"
                  noIcon
                  noCaps
                  onClick={() => {
                    // setPaymentRevealed(true);
                    setPaymentTermsVisible(true);
                  }}
                />
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="network" />


        <OverlayModal noScroll visible={paymentRevealed} onClose={() => {
          setPaymentRevealed(false)
        }}>
          <div>

            <iframe width={`${iframeWidth}`} height={`${iframeHeight}`} src={paymentUrl} title="banxa" frameBorder={"0"}></iframe>
            <div style={{ width: iframeWidth }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,.7)', padding: "4px 8px", }}>
                <PaymentTermsCopy />
              </div>
            </div>
          </div>

        </OverlayModal>

        <OverlayModal noScroll visible={paymentTermsVisible} onClose={() => {
          // setPaymentTermsVisible(false);
        }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>

            <div style={{ backgroundColor: "black", padding: "12px 24px", maxWidth: 800 }}>
              <h3>Disclaimer</h3>
              <PaymentTermsCopy />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={hasAgreed} onChange={() => {
                  setHasAgreed(!hasAgreed);
                }} />
                <label className="form-check-label" htmlFor="flexCheckChecked" >
                  I have read and agree to the disclaimer.
                </label>
              </div>

              <div className="text-end">
                <button className="btn btn-dark me-3" onClick={() => {
                  setPaymentTermsVisible(false);
                }}>Cancel</button>
                <button className="btn btn-light"
                  onClick={() => {
                    if (!hasAgreed) {
                      alert("You must agree to the disclaimer before proceeding.");
                      return;
                    }
                    setPaymentTermsVisible(false);
                    setPaymentRevealed(true);
                  }}
                >Confirm</button>
              </div>

            </div>
          </div>

        </OverlayModal>


      </Section>
    </>
  );
};
