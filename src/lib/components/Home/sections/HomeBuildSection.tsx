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
import styled from "styled-components";
import { WIKI_BASE_URL } from "../../../constants";

const Decor = styled.div`
  @keyframes buildBg {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.2;
    }
  }

  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  background-image: url(/img/decor/bg_03.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  top: 0;
  left: 0;
  opacity: 0.1;
  animation: buildBg 3s infinite;
`;

export const HomeBuildSection = () => {
  return (
    <Section id="build">
      {/* <PositionedAsset
        url="/img/decor/bg_01.png"
        alt="thingy"
        bottom={0}
        left={0}
      /> */}
      <Decor />

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
              transitionDirection="left"
              transitionDelay={0}
            >
              <Download
                title="CLI & API Repository"
                buttonText="Launch"
                noIcon
                url={`${WIKI_BASE_URL}/docs/integration/swagger/`}

                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>



          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="right"
              transitionDelay={0}
            >
              <Download
                title="Config Docs"
                buttonText="Launch"
                noIcon
                url={`${WIKI_BASE_URL}/docs/CLI/cli-config`}


                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>

          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="right"
              transitionDelay={0}
            >
              <Download
                title="Integration Docs"
                buttonText="Launch"
                noIcon
                url={`${WIKI_BASE_URL}/docs/integration/`}

                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>

          <div className="col-12 col-md-6 pb-4">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="right"
              transitionDelay={250}
            >
              <Download
                title="GitHub"
                url={SocialUrls.github}
                // description="@ReserveBlockIO"
                icon={faGithub}
                openExternal
                horizontalPadding={64}
              />
            </VisibilityTransition>
          </div>

        </div>

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
      <NextSectionButton sectionId="community" />
    </Section>
  );
};
