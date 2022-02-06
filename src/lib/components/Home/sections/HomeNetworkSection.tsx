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

export const HomeNetworkSection = () => {
  return (
    <>
      <div className="py-5" id="network"></div>

      <Section light center>
        <div className="container">
          <SectionHeaderComponent
            title="Network"
            subtitle="The Ecosystem."
            transitionDuration={500}
            isInvertedOffset
          />

          <div className="py-3"></div>

          <div className="row">
            <div className="col-3">
              <VisibilityTransition transitionDelay={0}>
                <SectionContent inverted>
                  <Download
                    dark
                    title="Testnet"
                    description="Activating Feb 27"
                    disabled
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={250}>
                <SectionContent inverted>
                  <Download
                    title="Status"
                    description="Activating Soon"
                    disabled
                    dark
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={500}>
                <SectionContent inverted>
                  <Download
                    title="Explorer"
                    description="Activating Soon"
                    disabled
                    dark
                  />
                </SectionContent>
              </VisibilityTransition>
            </div>
            <div className="col-3">
              <VisibilityTransition transitionDelay={750}>
                <SectionContent inverted>
                  <Download
                    title="CLI"
                    description="Activating Soon"
                    disabled
                    dark
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
