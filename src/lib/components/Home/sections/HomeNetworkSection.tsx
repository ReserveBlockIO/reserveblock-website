import {
  Section,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { PositionedAsset } from "../../common/PositionedAsset";
import { Download } from "../Download";

export const HomeNetworkSection = () => {
  return (
    <>
      <Section fill={true} center={true} id="network">
        <div className="container">
          <SectionHeading1>Network</SectionHeading1>
          <SectionHeading2>The Ecosystem.</SectionHeading2>
          <div className="py-3"></div>
          <div className="row">
            <div className="col-3">
              <Download
                title="Testnet"
                description="Activating Feb 27"
                disabled
              />
            </div>
            <div className="col-3">
              <Download title="Status" description="Activating Soon" disabled />
            </div>
            <div className="col-3">
              <Download
                title="Explorer"
                description="Activating Soon"
                disabled
              />
            </div>
            <div className="col-3">
              <Download title="CLI" description="Activating Soon" disabled />
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="build" />
      </Section>
    </>
  );
};
