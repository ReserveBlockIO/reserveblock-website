import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialUrls } from "../../../data/menus";
import {
  Section,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { ConnectOptionComponent } from "../../common/ConnectOptionComponent";
import { NextSectionButton } from "../../common/NextSectionButton";
import { PositionedAsset } from "../../common/PositionedAsset";

export const HomeCommunitySection = () => {
  return (
    <Section fill={true} center={true} id="community">
      <PositionedAsset
        url="/img/decor/bg_04.png"
        alt="thingy"
        bottom={0}
        right={0}
        opacity={0.4}
      />
      <div className="container">
        <SectionHeading1>Community</SectionHeading1>
        <SectionHeading2>Play along with our friends.</SectionHeading2>

        <div className="row mt-4 d-flex align-items-center">
          <div className="col-4">
            <img src="/img/decor/nodelines.png" className="w-100" alt="decor" />
          </div>
          <div className="col-8">
            <ConnectOptionComponent
              title="Twitter"
              icon={faTwitter}
              href={SocialUrls.twitter}
              ctaText="Follow us"
              description="@ReserveBlockIO"
            />
            <ConnectOptionComponent
              title="Email"
              icon={faEnvelope}
              href="mailto:hello@reserveblock.io"
              ctaText="Contact"
              description="hello@reserveblock.io"
            />
            <ConnectOptionComponent
              title="Discord"
              icon={faDiscord}
              href={SocialUrls.discord}
              ctaText="Join"
              description="ReserveBlockIO"
            />
          </div>
        </div>
      </div>
      <NextSectionButton sectionId="press" />
    </Section>
  );
};
