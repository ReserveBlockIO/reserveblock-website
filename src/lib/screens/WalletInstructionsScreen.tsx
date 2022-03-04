import { DisclaimerComponent } from "../components/common/DisclaimerComponent";
import { NewWalletInstructions } from "../components/NewWalletInstructions";
import { WalletInstructions } from "../components/WalletInstructions";
import { Section, SectionHeading1 } from "../styles/styled";

export const WalletInstructionsScreen = () => {
  return (
    <Section>
      <div className="container">
        <NewWalletInstructions />
      </div>
    </Section>
  );
};
