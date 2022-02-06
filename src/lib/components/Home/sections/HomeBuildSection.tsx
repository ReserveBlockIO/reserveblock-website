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
import { PositionedAsset } from "../../common/PositionedAsset";
import { Download } from "../Download";

export const HomeBuildSection = () => {
  return (
    <Section fill={true} center={true} id="build">
      <PositionedAsset
        url="/img/decor/bg_01.png"
        alt="thingy"
        bottom={0}
        left={0}
      />
      <div className="container">
        <SectionHeading1>Build</SectionHeading1>
        <SectionHeading2>
          A Finite Purpose with Global Capabilities.
        </SectionHeading2>
        <div className="py-3"></div>
        <div className="row">
          <div className="col-6">
            <Download
              title="Developer Rewards Program"
              description="Releasing Soon"
              disabled
            />
          </div>
          <div className="col-6">
            <Download
              title="Docs & Resources"
              description="Releasing Soon"
              disabled
            />
          </div>
          <div className="py-3"></div>
          <div className="col-6">
            <Download
              title="GitHub"
              url={SocialUrls.github}
              description="@ReserveBlockIO"
              icon={faGithub}
              openExternal
            />
          </div>
          <div className="col-6">
            <Download
              title="RBX Discord Support"
              description="Join our Discord"
              url={SocialUrls.discord}
              icon={faDiscord}
              openExternal
            />
          </div>
        </div>
        <div className="py-3"></div>

        <div className="row justify-content-center">
          <div className="col-6">
            <Download
              title="Request"
              description="dev@reserveblock.io"
              url={"mailto:dev@reserveblock.io"}
              icon={faEnvelope}
              openExternal
            />
          </div>
        </div>
      </div>
      <NextSectionButton sectionId="network" />
    </Section>
  );
};
