import {
  Section,
  SectionHeading1,
  SectionHeading2,
} from "../../../styles/styled";
import { PositionedAsset } from "../../common/PositionedAsset";
import { PressList } from "../PressList";

export const HomePressSection = () => {
  return (
    <Section fill={true} center={true} id="press">
      <PositionedAsset
        url="/img/decor/bg_02.png"
        alt="thingy"
        bottom={0}
        right={0}
        opacity={0.4}
      />
      <div className="container">
        <SectionHeading1>Press</SectionHeading1>
        <SectionHeading2>As seen in.</SectionHeading2>
        <div className="py-2"></div>

        <PressList />
      </div>
    </Section>
  );
};
