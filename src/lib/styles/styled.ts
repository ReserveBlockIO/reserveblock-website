import styled from "styled-components";
import { ThemeFonts } from "../theme";

interface ISection {
  fill?: boolean;
  center?: boolean;
}

export const Section = styled.section<ISection>`
  width: 100%;
  position: relative;
  padding: 72px 0;
  ${(props) => (props.fill ? `min-height: calc(100vh - 50px);` : null)};
  ${(props) =>
    props.center
      ? `display: flex; justify-content: center; align-items:center;`
      : null};

  /* background-image: url(/img/grid.jpg); */
  /* background-size: cover; */

  /* border-bottom: 5px solid rgba(126, 239, 255, 0.2); */
  overflow: hidden;
`;

interface ISectionHeading {
  mt?: number;
  inverted?: boolean;
}
export const SectionHeading1 = styled.h2<ISectionHeading>`
  position: relative;
  font-size: 42px;
  line-height: 42px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: bold;
  color: #84e9fd;
  font-family: ${ThemeFonts.heading};
  font-weight: bold;

  ${(props) => (props.mt ? `margin-top:${props.mt}px` : null)};
  ${(props) =>
    props.inverted
      ? `
        color: #031745;`
      : null};
`;

export const SectionHeading2 = styled(SectionHeading1)`
  font-size: 36px;
  line-height: 36px;
  font-weight: lighter;
  letter-spacing: 2px;
`;

export const SectionHeading3 = styled(SectionHeading1)`
  font-size: 28px;
  line-height: 32px;
  font-weight: normal;
  letter-spacing: 1px;
`;

export const SectionHeading4 = styled(SectionHeading1)`
  font-size: 24px;
  line-height: 28px;
  font-weight: normal;
  color: #fff;
  letter-spacing: 1px;
`;

// export const SectionSubheader

interface ISectionContent {
  inverted?: boolean;
  extraGlow?: boolean;
  outline?: boolean;
}

export const SectionContent = styled.div<ISectionContent>`
  background-color: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  padding: 24px;
  margin: 24px 0;

  box-shadow: 0 0 15px rgba(126, 239, 255, 0.1);

  ${(props) =>
    props.extraGlow ? `box-shadow: 0 0 25px rgba(126, 239, 255, 0.5);` : null};
  ${(props) =>
    props.outline ? `border: 1px solid rgba(126, 239, 255, 0.35);` : null};
  p {
    font-size: 18px;
  }

  ul {
    padding: 0 16px;

    li {
      font-size: 14px;
      line-height: 18px;
      padding: 4px 0;
    }
  }

  ${(props) =>
    props.inverted
      ? `
        background-color: rgba(255,255,255,.20);
        color: #000;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    `
      : null};
`;
