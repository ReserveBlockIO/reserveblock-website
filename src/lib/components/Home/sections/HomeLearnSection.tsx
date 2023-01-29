import {
  faBoxOpen,
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { FoundationComponent } from "../../common/FoundationComponent";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/SectionHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { RbxFactsComponent } from "../../common/RbxFactsComponent";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { Download } from "../Download";
import { WIKI_BASE_URL } from "../../../constants";
import OverlayModal from "../../OverlayModal";

export const HomeLearnSection = () => {
  const [factsRevealed, setFactsRevealed] = useState(false);
  const [foundationRevealed, setFoundationRevealed] = useState(false);


  const toggleFacts = () => {
    setFoundationRevealed(false);
    if (factsRevealed) {
      setFactsRevealed(false);
    } else {
      setFactsRevealed(true);
    }
  };

  const toggleFoundation = () => {
    setFactsRevealed(false);
    if (foundationRevealed) {
      setFoundationRevealed(false);
    } else {
      setFoundationRevealed(true);
    }
  };

  return (
    <Section fill={true} center={true} id="learn">
      <div>
        <VisibilityTransition transitionType="fade" transitionDelay={500}>
          <PositionedAsset
            url="/img/decor/globe.png"
            alt="Globe"
            top={0}
            right={0}
            opacity={0.7}
            width={600}
          />
        </VisibilityTransition>
        <div className="container">
          <SectionHeaderComponent
            title="Learn"
            subtitle="Evolving the Future Today"
            transitionDuration={500}
            transitionDirection="left"
          />
          <div className="py-2"></div>
          <VisibilityTransition>
            <SectionContent>
              <div className="row align-items-center">
                <div className="col-2 d-none d-md-block">
                  <img
                    src="/img/rbx_cube_small.png"
                    alt="cube"
                    className="w-100"
                  />
                </div>
                <div className="col-12 col-md-10">
                  <p>
                    The RBX platform was built with a simple philosophy and finite purpose in mind; to empower everyone with true self-sovereignty and self-custody through a native core-wallet with simple on-chain tools and features to enable validating like a miner, and to be able to tokenize digital and physical assets through Self-Executing NFTs (SENs) without any technical expertise or without any third-party needed, completely peer-to-peer.
                  </p>

                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <p className="">
                    By adhering to Bitcoin principles and ethos, RBX removes current barriers and frictions, enabling simple individual adoption of blockchain technology while maintaining autonomy, true decentralization, and governance, with independence and freedom to participate and utilize tools and features completely at-will.
                  </p>
                  <p>
                    So, what does this all really mean?  It means that YOU control what you do with the network and its tools, it means that YOU decide when or how, it means YOU can transact with anyone with or without third parties, it means that YOU own YOUR media / data, it means YOU have a vote, it is simply YOUR voice… the way it should be and the way it’s meant to be.
                  </p>
                </div>
              </div>
            </SectionContent>
          </VisibilityTransition>
          <div className="py-2"></div>

          <div className="row my-4">
            <div className="col-12 col-md-4 pb-3">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={250}
              >
                <Download
                  title="FAQs"
                  description="A Quick RBX Introduction and Guide"
                  url={`${WIKI_BASE_URL}/docs/FAQs/general-faq`}
                  icon={faLink}
                // horizontalPadding={32}
                />
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download
                  title="Facts"
                  description="Get the Details"
                  onClick={toggleFacts}
                  icon={factsRevealed ? faChevronUp : faChevronDown}
                // horizontalPadding={32}
                />
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={750}
              >
                <Download
                  title="Brought to YOU By"
                  description="From Enthusiasts to Everyone"
                  onClick={toggleFoundation}
                  icon={foundationRevealed ? faChevronUp : faChevronDown}
                // horizontalPadding={32}
                />
              </VisibilityTransition>
            </div>
          </div>

        </div>
      </div>

      <NextSectionButton sectionId="masternodes" />
      <OverlayModal visible={factsRevealed} onClose={() => {
        setFactsRevealed(false)
      }}>
        <RbxFactsComponent />
      </OverlayModal>
      <OverlayModal visible={foundationRevealed} onClose={() => {
        setFoundationRevealed(false)
      }}>
        <FoundationComponent />
      </OverlayModal>
    </Section>
  );
};
