import styled from "styled-components";
import { ThemeColors, ThemeFonts } from "../theme";
import { isMobile } from "../utils";

interface ISection {
  fill?: boolean;
  center?: boolean;
  dark?: boolean;
  light?: boolean;
  mobileGrid?: boolean;
}

const pulseKeyframes = (name: string, startColor: string, endColor: string) => {
  return `@keyframes ${name} {
    0% {
      box-shadow: 0 0 5px 0px ${startColor};
    }

    70% {
      box-shadow: 0 0 10px 10px ${endColor};
    }

    100% {
      box-shadow: 0 0 5px 0px ${startColor};
    }
  }`;
};

export const Section = styled.section<ISection>`
  width: 100%;
  position: relative;
  padding: 72px 0;
  ${(props) => (props.fill ? `min-height: calc(100vh - 50px);` : null)};
  ${(props) =>
    props.center
      ? `display: flex; justify-content: center; align-items:center;`
      : null};

  ${(props) =>
    props.dark
      ? `background-color: rgba(0,0,0,.8); `
      : null};

  ${(props) =>
    props.light
      ? `
        background-color: rgba(255,255,255,.8); `
      : null};
  
  ${(props) => props.mobileGrid && isMobile() ? `background-image: url(/img/grid-curved-mobile.jpg); background-size: cover; background-position: center center;` : ``}

  /* background-image: url(/img/grid.jpg); */
  /* background-size: cover; */

  /* border-bottom: 5px solid rgba(126, 239, 255, 0.2); */
  /* overflow: hidden; */
`;

interface ISectionHeading {
  mt?: number;
  inverted?: boolean;
  dark?: boolean;
  light?: boolean;
  noCaps?: boolean;
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

  ${(props) => (props.noCaps ? `text-transform:none;` : null)};

  ${(props) => (props.mt ? `margin-top:${props.mt}px` : null)};
  ${(props) =>
    props.inverted
      ? `
        color: #031745 !important;`
      : null};
  ${(props) =>
    props.dark
      ? `
        color: #000 !important;`
      : null};
  ${(props) =>
    props.light
      ? `
        color: #fff !important;`
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
  mutedBg?: boolean;
}

export const SectionContent = styled.div<ISectionContent>`
  ${pulseKeyframes(
  "pulse",
  "rgba(126, 239, 255, 0.4)",
  "rgba(126, 239, 255, 0.8)"
)};

  background-color: rgba(0, 0, 0, 0.45);
  /* backdrop-filter: blur(3px); */
  padding: 24px;
  margin: 24px 0;

  box-shadow: 0 0 15px rgba(126, 239, 255, 0.1);

  ${(props) => (props.extraGlow ? `animation: pulse 1.75s infinite` : ``)};

  ${(props) =>
    props.outline ? `border: 1px solid rgba(126, 239, 255, 0.22);` : null};

  p {
    font-size: 20px;
    line-height: 26px;
  }

  ul {
    padding: 0 16px;

    li {
      font-size: 16px;
      line-height: 20px;
      padding: 4px 0;
    }
  }

  ${(props) =>
    props.inverted
      ? `
        background-color: rgba(255,255,255,.75);
        color: #000;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    `
      : null};

  ${(props) =>
    props.mutedBg
      ? `
      color: #fff;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
      background-color: ${ThemeColors.muted};
        background: linear-gradient(45deg, ${ThemeColors.mutedDark} 0%, ${ThemeColors.mutedBright} 100%);
        border-radius: 4px;
    `
      : null};
`;

interface IButtonLink {
  altGlow?: boolean;
}

export const ButtonLink = styled.a<IButtonLink>`
  ${pulseKeyframes(
  "whitePulse",
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.3)"
)};
  ${pulseKeyframes(
  "pulse",
  "rgba(126, 239, 255, 0.2)",
  "rgba(126, 239, 255, 0.3)"
)};

  ${(props) =>
    props.altGlow
      ? ` animation: whitePulse 1s infinite;`
      : ` animation: pulse 1s infinite;`};

  &.disabled {
    /* opacity: 0.7; */
    pointer-events: none;
    animation: none;
  }
`;
