import { useEffect, useRef, useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeading4,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import styled from "styled-components";
import { ThemeColors, ThemeFonts } from "../../../theme";
import { VisibilityTransition } from "../../common/VisibilityTransition";
import { NodePresaleCtaComponent } from "../../common/NodePresaleCtaComponent";

interface IIntroVideo {
  ref: React.Ref<HTMLVideoElement>;
}

const IntroVideo = styled.video<IIntroVideo>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center top;
`;

const IntroTextContainer = styled.div`
  position: relative;
  text-align: center;

  .democratize {
    font-size: 28px;
    color: ${ThemeColors.bright};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 52px;
    font-weight: bold;
    letter-spacing: 4px;
  }
`;

export const HomeIntroSection = () => {
  // const introVideo =
  //   "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/rbx-animation-scaled-v5x.mp4?alt=media";
  const introVideo =
    "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/FEB2022x.mp4?alt=media";
  const videoRef = useRef<HTMLVideoElement>(null);

  const [spacerHeight, setSpacerHeight] = useState(120);

  const handleResize = () => {
    const sourceW = 1920;
    const sourceH = 1080;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const stretchW = w / sourceW;
    const stretchH = h / sourceH;

    if (stretchW >= stretchH) {
      setSpacerHeight(Math.ceil(0.12 * window.innerWidth));
    } else {
      setSpacerHeight(Math.ceil(0.23 * window.innerHeight));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    handleResize();
    const v = videoRef.current!;

    v.addEventListener("canplay", () => {
      v.play();
    });

    v.addEventListener(
      "ended",
      (_) => {
        const videoLoopFrameStart = 5 * 24 + 26;
        const frameRate = 24;
        const videoLoopStart = videoLoopFrameStart / frameRate;

        v.currentTime = videoLoopStart;
        v.play();
      },
      false
    );
  }, []);

  return (
    <Section fill={true}>
      <IntroVideo
        ref={videoRef}
        src={introVideo}
        muted={true}
        playsInline={true}
      ></IntroVideo>

      <div>
        <div style={{ height: spacerHeight }} />
        <IntroTextContainer>
          <VisibilityTransition
            transitionDelay={5000}
            assumeVisible={true}
            transitionType="fade"
          >
            <h2 className="democratize">Democratizing NFTs for Everyone</h2>
          </VisibilityTransition>
          <div className="py-4"></div>

          <h3>
            <VisibilityTransition
              transitionDelay={1500}
              duration={1000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>
                Your Block<span className="bullet px-4"></span>
              </span>
            </VisibilityTransition>
            <VisibilityTransition
              transitionDelay={2500}
              duration={1000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>Your Data</span>
              <span className="bullet px-4"></span>
            </VisibilityTransition>
            <VisibilityTransition
              transitionDelay={3500}
              duration={1000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>Your NFT Reserved</span>
            </VisibilityTransition>
          </h3>
          <div className="py-4"></div>

          <div className="d-flex justify-content-center">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="up"
              transitionDelay={6000}
              duration={500}
              assumeVisible
            >
              <NodePresaleCtaComponent />
            </VisibilityTransition>
          </div>
        </IntroTextContainer>
      </div>

      {/* <BottomFade /> */}
      <NextSectionButton sectionId="learn" />
    </Section>
  );
};
