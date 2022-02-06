import { DisclaimerComponent } from "../components/common/DisclaimerComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const DisclaimerScreen = () => {
  return (
    <Section>
      <div className="container">
        <SectionHeading1>Disclaimer</SectionHeading1>
        <DisclaimerComponent />
      </div>
    </Section>
  );
};
