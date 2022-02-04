import { HalvingScheduleComponent } from "../components/common/HalvingScheduleComponent";
import { Section, SectionHeading1 } from "../styles/styled";

export const HalvingScheduleScreen = () => {
  return (
    <Section>
      <div className="container">
        <SectionHeading1>RBX Halving Schedule </SectionHeading1>
        <div className="py-2"></div>
        <HalvingScheduleComponent />
      </div>
    </Section>
  );
};
