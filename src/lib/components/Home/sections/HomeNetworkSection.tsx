import styled from "styled-components";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/OffsetHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { Download } from "../Download";

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
  opacity: 0.4;
`;

export const HomeNetworkSection = () => {
  return (
    <>
      <div className="py-5" id="network"></div>

      <Section light center>
        <Decor />
        <div className="container">
          <SectionHeaderComponent
            title="Network"
            subtitle="The Ecosystem"
            transitionDuration={500}
            isInvertedOffset
          />

          <div className="py-3"></div>

          <div className="row">
            <div className="col-3">
              <VisibilityTransition transitionDelay={0}>
                <SectionContent mutedBg>
                  <Download
                    title="Testnet"
                    buttonText="Activating Feb 27"
                    noIcon
                    disabled
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={250}>
                <SectionContent mutedBg>
                  <Download
                    title="Status"
                    buttonText="Activating Soon"
                    disabled
                    noIcon
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={500}>
                <SectionContent mutedBg>
                  <Download
                    title="Explorer"
                    buttonText="Activating Soon"
                    disabled
                    noIcon
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={750}>
                <SectionContent mutedBg>
                  <Download
                    title="CLI"
                    buttonText="Activating Soon"
                    disabled
                    noIcon
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <div className="py-5"></div>

        <NextSectionButton sectionId="build" />
      </Section>
    </>
  );
};
