import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
  SectionHeading3,
  SectionHeading4,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import { PositionedAsset } from "../../common/PositionedAsset";
import { Download } from "../Download";
import { NodeType } from "../NodeType";

export const HomeMasterNodesSection = () => {
  return (
    <Section fill={true} center={true} id="masternodes">
      <PositionedAsset
        url="/img/decor/bg_03.png"
        alt="bg"
        bottom={0}
        right={0}
        cover={true}
        opacity={0.5}
      ></PositionedAsset>
      <div className="container">
        <SectionHeading1>Masternodes</SectionHeading1>
        <SectionHeading2>Join the Block.</SectionHeading2>

        <div className="row">
          <div className="col col-12">
            <SectionContent>
              <p className="">
                Validate and earn robust block rewards like a miner without the
                high burden or expense of rigs & excess energy while providing
                governance over the network! Any user can become a validator,
                with the minimum RBX requirements simply through the core
                wallet, and decide to be a Masternode, Datanode, or both.
              </p>

              <p className="">
                Masternodes simply liquid stake the minimum requirements using
                their local device such as a laptop, while Datanodes simply
                contribute hard drive space to the network all through the core
                wallet. While passively earning rewards and maintaining
                governance, each user is free to participate without holding
                periods, fees or penalties. In other words, supporting and
                growing the network at your own free will all while maintaining
                carbon neutrality, truly democratizing!
              </p>
            </SectionContent>

            {/* <SectionHeading3>Become a master node</SectionHeading3>
            <SectionContent inverted={true}>
              <div className="text-center">
                <SectionHeading4>Node Sale Launching Soon</SectionHeading4>
                <div className="py-2"></div>
                <SectionHeading1>02/18/2022</SectionHeading1>
                <div className="py-2"></div>
                <button className="btn btn-dark btn-lg text-uppercase">
                  Remind Me
                </button>
              </div>
            </SectionContent> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Download
              title="Become a Masternode"
              url="/pdfs/ReserveBlockMasternodes.pdf"
              openExternal
            />
          </div>
          <div className="col-6">
            <Download
              title="Blocking Rewards &amp; Halving"
              url="/halving-schedule"
              icon={faExternalLinkAlt}
              openExternal
            />
          </div>
          <div className="py-3"></div>
          <div className="col-6">
            <Download
              title="Install &amp; Operating Instructions"
              url="#"
              openExternal
            />
          </div>
          <div className="col-6">
            <Download
              title="Masternode FAQs"
              url="/faq#masternodes"
              icon={faExternalLinkAlt}
              openExternal
            />
          </div>
        </div>
      </div>
      <NextSectionButton sectionId="wallet" />
    </Section>
  );
};
