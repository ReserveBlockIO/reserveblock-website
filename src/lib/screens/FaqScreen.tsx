import { FaqComponent } from "../components/common/FaqComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const FaqScreen = () => {
  return (
    <Section>
      <div className="container">
        <SectionHeading1>Frequency Asked Questions</SectionHeading1>
        <div className="py-2"></div>
        <FaqComponent />
      </div>
    </Section>
  );
};
