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
                    The RBX platform is a next generation blockchain built to
                    operate completely decentralized and autonomous for anyone &
                    everyone, with a finite purpose, to help evolve utility,
                    use-cases, and ownership for any type of NFT.
                  </p>
                  <p className="mb-0">
                    A first of its kind Self Executing NFT Architecture Program
                    (SEN), now unlocks an extensive scalable suite of on-chain
                    features that allow users to customize and control how each
                    NFT evolves across any digital or physical asset class.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <p className="">
                    In other words, programmable smart contracts within each NFT
                    now empowers each creator the ability to truly transact or
                    transfer peer to peer, with highly dynamic features without
                    friction and highly efficient, all through a core wallet
                    that has yet to be experienced before! Bottom line, true
                    utility & scalability for NFTs that YOU control, store, and
                    own period.
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
                  description="A Quick Guide to your NFT Journey"
                  url={"/faq"}
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
                  title="The Foundation"
                  description="From Enthusiasts to Everyone"
                  onClick={toggleFoundation}
                  icon={foundationRevealed ? faChevronUp : faChevronDown}
                  // horizontalPadding={32}
                />
              </VisibilityTransition>
            </div>
          </div>
          {factsRevealed ? (
            <div className="py-2">
              <RbxFactsComponent />
            </div>
          ) : null}
          {foundationRevealed ? (
            <div className="py-2">
              <FoundationComponent />
            </div>
          ) : null}
        </div>
      </div>

      <NextSectionButton sectionId="masternodes" />
    </Section>
  );
};
