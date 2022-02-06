import {
  Section,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { SectionHeaderComponent } from "../../common/OffsetHeaderComponent";
import { PositionedAsset } from "../../common/PositionedAsset";
import { PressList } from "../PressList";

export const HomePressSection = () => {
  return (
    <Section
      fill={true}
      center={true}
      id="press"
      style={{ overflow: "hidden" }}
    >
      <PositionedAsset
        url="/img/decor/bg_02.png"
        alt="thingy"
        bottom={0}
        right={0}
        opacity={0.25}
      />
      <div className="container">
        <SectionHeaderComponent
          title="Press"
          subtitle="As seen in."
          transitionDuration={500}
          transitionDirection="left"
        />
        <div className="py-2"></div>

        <PressList />
      </div>
    </Section>
  );
};
