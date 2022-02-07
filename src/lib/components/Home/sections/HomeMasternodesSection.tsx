import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
  SectionHeading3,
  SectionHeading4,
} from "../../../styles/styled";
import { isMobile } from "../../../utils";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/SectionHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { Download } from "../Download";
import { NodeType } from "../NodeType";

const Waves = styled.div`
  width: 100%;
  height: 1000px;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  left: 0;
  background-image: url(/img/decor/bg_01.png);
  background-size: cover;
  background-position: center top;
  opacity: 0.4;
`;

export const HomeMasterNodesSection = () => {
  const contentPadding = isMobile() ? 12 : 96;

  return (
    <>
      <div className="py-5" id="masternodes"></div>
      <Section dark>
        {/* <PositionedAsset
          url="/img/decor/bg_03.png"
          alt="bg"
          bottom={0}
          right={0}
          width={500}
          height={500}
          opacity={0.5}
        ></PositionedAsset> */}
        <Waves />
        <div className="container">
          <SectionHeaderComponent
            title="Masternodes"
            subtitle="Join the Block"
            isOffset={true}
            transitionDuration={500}
          />

          <div className="row">
            <div className="col col-12">
              <VisibilityTransition>
                <SectionContent>
                  <p className="">
                    Validate and earn robust block rewards like a miner without
                    the high burden or expense of rigs & excess energy while
                    providing governance over the network! Any user can become a
                    validator, with the minimum RBX requirements simply through
                    the core wallet, and decide to be a Masternode, Datanode, or
                    both.
                  </p>

                  <p className="mb-0">
                    Masternodes simply liquid stake the minimum requirements
                    using their local device such as a laptop, while Datanodes
                    simply contribute hard drive space to the network all
                    through the core wallet. While passively earning rewards and
                    maintaining governance, each user is free to participate
                    without holding periods, fees or penalties. In other words,
                    supporting and growing the network at your own free will all
                    while maintaining carbon neutrality, truly democratizing!
                  </p>
                </SectionContent>
              </VisibilityTransition>

              {/* <SectionHeading3>Become a master node</SectionHeading3>
            <SectionContent inverted={true}>
              <div className="text-center">
                <SectionHeading4>Node Sale Launching Soon</SectionHeading4>
                <div className="py-2"></div>
                <SectionHeading1>02/18/2022</SectionHeading1>
                <div className="py-2"></div>
                <button className="btn btn-dark btn-lg text-uppercase">
                  Remind Me
                </button>
              </div>
            </SectionContent> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={250}
              >
                <SectionContent mutedBg outline>
                  <Download
                    title="Become a Masternode"
                    url={require("../../../../pdfs/ReserveBlockMasternodes.pdf")}
                    openExternal
                    horizontalPadding={contentPadding}
                    altGlow
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <SectionContent mutedBg>
                  <Download
                    title="Block Rewards &amp; Halving"
                    url="/halving-schedule"
                    icon={faLink}
                    horizontalPadding={contentPadding}
                    altGlow
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={750}
              >
                <SectionContent mutedBg>
                  <Download
                    title="Install &amp; Operating Instructions"
                    url="#"
                    openExternal
                    disabled
                    noIcon
                    buttonText="Activating Soon"
                    horizontalPadding={contentPadding}
                    altGlow
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-12 col-md-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={1000}
              >
                <SectionContent mutedBg>
                  <Download
                    title="Masternode FAQs"
                    url="/faq#masternodes"
                    icon={faLink}
                    horizontalPadding={contentPadding}
                    altGlow
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="wallet" />
      </Section>
    </>
  );
};
