import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { PositionedAsset } from "../../common/PositionedAsset";
import { WalletDetailsComponent } from "../../common/WalletDetailsComponent";
import { Download } from "../Download";

export const HomeWalletSection = () => {
  return (
    <>
      <Section fill={true} center={true} id="wallet">
        <div className="container">
          <SectionHeading1>RBX Wallet</SectionHeading1>
          <SectionHeading2>Unlocking Autonomy.</SectionHeading2>

          <SectionContent>
            <p className="mb-0">
              Below are the inherent RBX wallet functions. These functions are
              what are needed to achieve most common transactions. Additional
              features can be added or unlocked as the network grows over time.
            </p>
          </SectionContent>
          <WalletDetailsComponent />
          <div className="py-3" />
          <div className="row">
            <div className="col-6">
              <Download title="Get Started" />
            </div>
            <div className="col-6">
              <Download title="Core Wallet" />
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="build" />
      </Section>
    </>
  );
};
