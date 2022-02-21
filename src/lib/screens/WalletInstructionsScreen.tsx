import { DisclaimerComponent } from "../components/common/DisclaimerComponent";
import { WalletInstructions } from "../components/WalletInstructions";
import { Section, SectionHeading1 } from "../styles/styled";

export const WalletInstructionsScreen = () => {
  return (
    <Section>
      <div className="container">
        <WalletInstructions />
      </div>
    </Section>
  );
};
