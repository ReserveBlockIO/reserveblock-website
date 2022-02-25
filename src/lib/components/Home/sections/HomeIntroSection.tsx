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
import { NodePresaleCtaComponent } from "../../NodePresaleCtaComponent";
import { isMobile } from "../../../utils";
import { NodePresaleLiveCtaComponent } from "../../common/NodePresaleLiveCtaComponent";

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

  ${isMobile() ? `object-fit: scale-down` : ``}
`;

const IntroTextContainer = styled.div`
  position: relative;
  text-align: center;

  .democratize {
    font-size: 28px;
    color: ${ThemeColors.bright};
    font-weight: bold;
    letter-spacing: 2px;
    ${isMobile() ? `font-size: 20px; letter-spacing: 1px;` : ``}
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 52px;
    font-weight: bold;
    letter-spacing: 4px;

    ${isMobile() ? `font-size: 32px; letter-spacing: 2px;` : ``}
  }
`;

export const HomeIntroSection = () => {
  const HAS_LAUNCHED = false;
  // const introVideo =
  //   "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/rbx-animation-scaled-v5x.mp4?alt=media";
  const introVideo = isMobile()
    ? "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/FEB2022_mobilex.mp4?alt=media"
    : "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/FEB2022x.mp4?alt=media";

  const introPoster = "/img/poster.jpg";
  const videoRef = useRef<HTMLVideoElement>(null);

  const [spacerHeight, setSpacerHeight] = useState<number>(120);
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleResize = () => {
    const sourceW = 1920;
    const sourceH = 1080;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const stretchW = w / sourceW;
    const stretchH = h / sourceH;

    let sH = 0;
    if (stretchW >= stretchH) {
      sH = Math.ceil(0.12 * window.innerWidth);
    } else {
      sH = Math.ceil(0.23 * window.innerHeight);
    }
    if (isMobile()) {
      sH -= 20;
    }
    setSpacerHeight(sH);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    handleResize();
    const v = videoRef.current!;

    v.addEventListener("canplay", () => {
      v.play();
      setShowContent(true);
    });

    v.addEventListener("loadedmetadata", () => {
      v.play();
      setShowContent(true);
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
    <Section fill>
      <IntroVideo
        ref={videoRef}
        src={introVideo}
        muted
        playsInline
        poster={introPoster}
        // autoPlay
      ></IntroVideo>

      {showContent ? (
        <div>
          <div style={{ height: spacerHeight }} />
          <IntroTextContainer>
            <VisibilityTransition
              transitionDelay={5000}
              assumeVisible={true}
              transitionType="fade"
              duration={1000}
            >
              <h2 className="democratize">
                DEMOCRATIZING NFTs<span className="d-none d-md-inline"> </span>
                <br className="d-block d-md-none" />
                FOR EVERYONE
              </h2>
            </VisibilityTransition>
            <div className="py-4 d-none d-md-block"></div>

            <h3>
              <VisibilityTransition
                transitionDelay={1500}
                duration={1000}
                assumeVisible={true}
                transitionType="blur"
                inline
              >
                <span>
                  Your Block
                  <span className="bullet px-4 d-none d-md-inline"></span>
                </span>
              </VisibilityTransition>
              <div className="d-block d-md-none py-1" />
              <VisibilityTransition
                transitionDelay={2500}
                duration={1000}
                assumeVisible={true}
                transitionType="blur"
                inline
              >
                <span>Your Data</span>
                <span className="bullet px-4 d-none d-md-inline"></span>
              </VisibilityTransition>
              <div className="d-block d-md-none py-1" />

              <VisibilityTransition
                transitionDelay={3500}
                duration={1000}
                assumeVisible={true}
                transitionType="blur"
                inline
              >
                <span>YOUR NFT</span>
              </VisibilityTransition>
            </h3>
            <div className="py-4 d-none d-md-bloc"></div>

            <div className="d-flex justify-content-center">
              <VisibilityTransition
                transitionType="slide"
                transitionDirection="up"
                transitionDelay={6000}
                duration={500}
                assumeVisible
              >
                {HAS_LAUNCHED ? (
                  <NodePresaleLiveCtaComponent />
                ) : (
                  <NodePresaleCtaComponent />
                )}
              </VisibilityTransition>
            </div>
          </IntroTextContainer>
        </div>
      ) : null}

      {/* <BottomFade /> */}
      <NextSectionButton sectionId="learn" />
    </Section>
  );
};
