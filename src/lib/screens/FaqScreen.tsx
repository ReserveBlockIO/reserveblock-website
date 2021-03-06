import { FaqComponent } from "../components/common/FaqComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const FaqScreen = () => {
  return (
    <Section>
      <div className="container">
        <div className="mb-4 " id="general">
          <a className="btn btn-light" href="#general">
            General
          </a>
          <span className="px-1"></span>
          <a className="btn btn-light" href="#masternodes">
            Masternodes
          </a>
          <span className="px-1"></span>

          <a className="btn btn-light" href="#datanodes">
            Datanodes
          </a>
          <span className="px-1"></span>

          <a className="btn btn-light" href="#devs">
            Developers
          </a>
          <span className="px-1"></span>

          <a className="btn btn-light" href="#wallet">
            Wallet
          </a>
        </div>
        <SectionHeading1 noCaps>GENERAL FAQs</SectionHeading1>
        <div className="py-2"></div>
        <FaqComponent general={true} />

        <div className="pb-5 mb-4" id="masternodes"></div>
        <SectionHeading1 id="" noCaps>
          MASTERNODE FAQs
        </SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent masternode={true} />
        </div>
        <div className="pb-5 mb-4" id="datanodes"></div>
        <SectionHeading1 id="" noCaps>
          DATANODE FAQs
        </SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent datanode={true} />
        </div>

        <div className="pb-5 mb-4" id="devs"></div>
        <SectionHeading1 id="" noCaps>
          DEVELOPER FAQs
        </SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent developer={true} />
        </div>

        <div className="pb-5 mb-4" id="wallet"></div>
        <SectionHeading1 id="" noCaps>
          WALLET FAQs
        </SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent wallet />
        </div>
      </div>
    </Section>
  );
};
