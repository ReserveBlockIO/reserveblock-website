import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialUrls } from "../../../data/menus";
import { Section } from "../../../styles/styled";
import { ConnectOptionComponent } from "../../common/ConnectOptionComponent";
import { NextSectionButton } from "../../common/NextSectionButton";
import { SectionHeaderComponent } from "../../common/OffsetHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { VisibilityTransition } from "../../common/VisibilityTransition";

export const HomeCommunitySection = () => {
  return (
    <>
      <div className="py-5" id="community"></div>

      <Section dark>
        {/* <PositionedAsset
          url="/img/decor/bg_04.png"
          alt="thingy"
          bottom={0}
          right={0}
          opacity={0.4}
        /> */}
        <div className="container">
          <SectionHeaderComponent
            title="Community"
            subtitle="Play along with our friends."
            isOffset={true}
            transitionDuration={500}
          />

          <div className="row mt-4 d-flex align-items-center">
            <div className="col-4">
              <VisibilityTransition transitionType="fade" transitionDelay={0}>
                <img
                  src="/img/decor/nodelines.png"
                  className="w-100"
                  alt="decor"
                />
              </VisibilityTransition>
            </div>
            <div className="col-8">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="left"
                transitionDelay={250}
              >
                <ConnectOptionComponent
                  title="Twitter"
                  icon={faTwitter}
                  href={SocialUrls.twitter}
                  ctaText="Follow us"
                  description="@ReserveBlockIO"
                />
              </VisibilityTransition>
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="left"
                transitionDelay={500}
              >
                <ConnectOptionComponent
                  title="Email"
                  icon={faEnvelope}
                  href="mailto:hello@reserveblock.io"
                  ctaText="Contact"
                  description="hello@reserveblock.io"
                />
              </VisibilityTransition>
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="left"
                transitionDelay={750}
              >
                <ConnectOptionComponent
                  title="Discord"
                  icon={faDiscord}
                  href={SocialUrls.discord}
                  ctaText="Join"
                  description="ReserveBlockIO"
                />
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="press" />
      </Section>
    </>
  );
};
