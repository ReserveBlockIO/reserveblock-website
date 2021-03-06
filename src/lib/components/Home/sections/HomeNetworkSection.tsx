import styled from "styled-components";
import { Section, SectionContent } from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/SectionHeaderComponent";
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

          <div className="py-0 py-md-5"></div>

          <div className="row">
            <div className="col-12 col-md-6">
              <VisibilityTransition transitionDelay={0}>
                <SectionContent mutedBg>
                  <Download
                    title="Mainnet Beta"
                    buttonText="Explorer API"
                    noIcon
                    url="https://data.rbx.network/docs"
                    openExternal
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>

            <div className="col-12 col-md-6">
              <VisibilityTransition transitionDelay={500}>
                <SectionContent mutedBg>
                  <Download
                    title="Block Explorer"
                    buttonText="Launch Explorer"
                    url="https://rbx.network/"
                    noIcon
                    openExternal={true}
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>

            <div className="col-12 col-md-6">
              <VisibilityTransition transitionDelay={250}>
                <SectionContent mutedBg>
                  <Download
                    title="Trillium IDE"
                    url="https://trillium.rbx.network/"
                    openExternal
                    buttonText="Launch IDE"
                    noIcon
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>

            <div className="col-12 col-md-6">
              <VisibilityTransition transitionDelay={750}>
                <SectionContent mutedBg>
                  <Download
                    title="CLI"
                    buttonText="Download CLI"
                    openExternal={true}
                    url="https://github.com/ReserveBlockIO/ReserveBlock-Core"
                    noIcon
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
          </div>
          <div className="py-0 py-md-5"></div>
        </div>

        <NextSectionButton sectionId="build" />
      </Section>
    </>
  );
};
