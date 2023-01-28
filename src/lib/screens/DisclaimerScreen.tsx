import { DisclaimerComponent } from "../components/common/DisclaimerComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const DisclaimerScreen = () => {
  return (
    <Section>
      <div className="container">
        <DisclaimerComponent />
      </div>
    </Section>
  );
};
