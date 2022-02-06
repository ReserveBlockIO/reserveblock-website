import { FaqComponent } from "../components/common/FaqComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const FaqScreen = () => {
  return (
    <Section>
      <div className="container">
        <SectionHeading1>General FAQs</SectionHeading1>
        <div className="py-2"></div>
        <FaqComponent general={true} />
        <SectionHeading1>Masternode FAQs</SectionHeading1>
        <div className="py-2"></div>
        <div id="masternodes">
          <FaqComponent general={false} />
        </div>
      </div>
    </Section>
  );
};
