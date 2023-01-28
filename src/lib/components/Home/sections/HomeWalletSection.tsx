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
import { useState } from "react";
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

export const HomeWalletSection = () => {
  const [gettingStartedVisible, setGettingStartedVisible] = useState(false);
  const [showingWalletDownload, setShowingWalletDownload] = useState(false);

  return (
    <>
      <Section fill={true} center={true} id="wallet">
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
                  url={`${WIKI_BASE_URL}/docs/FAQs/smart-contract-faq`}
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
                  buttonText="Activating Soon"
                  noIcon
                  noCaps
                  url={"#"}
                  onClick={(_: any) => { }}
                />
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="network" />
      </Section>
    </>
  );
};
