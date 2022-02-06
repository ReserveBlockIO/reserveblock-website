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
import { WalletDetailsComponent } from "../../common/WalletDetailsComponent";
import { Download } from "../Download";

export const HomeWalletSection = () => {
  return (
    <>
      <Section fill={true} center={true} id="wallet">
        <div className="container">
          <SectionHeaderComponent
            title="RBX Wallet"
            subtitle="Unlocking Autonomy."
            transitionDuration={500}
            transitionDirection="left"
          />
          <VisibilityTransition>
            <SectionContent>
              <p className="mb-0">
                Below are the inherent RBX wallet functions. These functions are
                what are needed to achieve most common transactions. Additional
                features can be added or unlocked as the network grows over
                time.
              </p>
            </SectionContent>
          </VisibilityTransition>
          <WalletDetailsComponent />
          <div className="py-3" />
          <div className="row">
            <div className="col-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download title="Get Started" />
              </VisibilityTransition>
            </div>
            <div className="col-6">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={500}
              >
                <Download title="Core Wallet" />
              </VisibilityTransition>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="network" />
      </Section>
    </>
  );
};
