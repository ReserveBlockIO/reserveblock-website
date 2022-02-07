import { FaqComponent } from "../components/common/FaqComponent";
import { Section, SectionContent, SectionHeading1 } from "../styles/styled";

export const FaqScreen = () => {
  return (
    <Section>
      <div className="container">
        <div className="mb-4">
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
        </div>

        <SectionHeading1 id="general">General FAQs</SectionHeading1>
        <div className="py-2"></div>
        <FaqComponent general={true} />
        <SectionHeading1 id="masternodes">Masternode FAQs</SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent masternode={true} />
        </div>
        <SectionHeading1 id="datanodes">Datanode FAQs</SectionHeading1>
        <div className="py-2"></div>
        <div>
          <FaqComponent datanode={true} />
        </div>
      </div>
    </Section>
  );
};
