import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { SocialUrls } from "../../../data/menus";
import {
  SectionHeading4,
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/SectionHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { Download } from "../Download";

export const HomeBuildSection = () => {
  return (
    <Section id="build">
      {/* <PositionedAsset
        url="/img/decor/bg_01.png"
        alt="thingy"
        bottom={0}
        left={0}
      /> */}
      <div className="container">
        <SectionHeaderComponent
          title="Build"
          subtitle="A Finite Purpose with Global Capabilities"
          transitionDuration={500}
          transitionDirection="left"
        />
        <div className="py-5"></div>
        <div className="row">
          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="right"
              transitionDelay={0}
            >
              <Download
                title="Developer Rewards Program"
                buttonText="Releasing Soon"
                disabled
                noIcon
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>
          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="left"
              transitionDelay={0}
            >
              <Download
                title="Docs & Resources"
                buttonText="Releasing Soon"
                noIcon
                disabled
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>
          <div className="py-4 d-none d-md-block"></div>
          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="right"
              transitionDelay={250}
            >
              <Download
                title="GitHub"
                url={SocialUrls.github}
                description="@ReserveBlockIO"
                icon={faGithub}
                openExternal
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>
          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="left"
              transitionDelay={250}
            >
              <Download
                title="RBX Discord Support"
                description="Join our Discord"
                url={SocialUrls.discord}
                icon={faDiscord}
                openExternal
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>
        </div>
        <div className="py-4 d-none d-md-block"></div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="up"
              transitionDelay={500}
            >
              <Download
                title="Request"
                description="dev@reserveblock.io"
                url={"mailto:dev@reserveblock.io"}
                icon={faEnvelope}
                openExternal
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>
        </div>
      </div>
      <NextSectionButton sectionId="network" />
    </Section>
  );
};
