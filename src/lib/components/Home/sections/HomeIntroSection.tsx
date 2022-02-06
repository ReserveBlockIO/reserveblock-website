import { useEffect, useRef, useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeading4,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import styled from "styled-components";
import { ThemeColors } from "../../../theme";
import { VisibilityTransition } from "../../common/VisibilityTransition";

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
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 52px;
  }
`;

// const BottomFade = styled.div`
//   position: absolute;
//   width: 100%;
//   left: 0;
//   bottom: 0;
//   height: 100px;
//   background: rgb(3, 23, 69);
//   background: linear-gradient(
//     180deg,
//     rgba(3, 23, 69, 0) 0%,
//     rgba(3, 23, 69, 1) 59%
//   );
// `;

// const ContentContainer = styled.div`
//   opacity: 0;
//   transition: all 1.3s;
//   transform: translateY(100px);
//   &.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

export const HomeIntroSection = () => {
  const introVideo =
    "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/rbx-animation-scaled-v5x.mp4?alt=media";

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
            transitionDelay={1250}
            assumeVisible={true}
            transitionType="blur"
          >
            <h2 className="democratize">Democratizing NFTs for Everyone</h2>
          </VisibilityTransition>
          <div className="py-4"></div>

          <h3>
            <VisibilityTransition
              transitionDelay={1500}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>
                Your Block.<span className="px-2"></span>
              </span>
            </VisibilityTransition>
            <VisibilityTransition
              transitionDelay={2000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>Your Data.</span>
            </VisibilityTransition>
            <br />
            <VisibilityTransition
              transitionDelay={2500}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>Your NFT Reserved.</span>
            </VisibilityTransition>
          </h3>
          <div className="py-4"></div>

          <div className="d-flex justify-content-center">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="up"
              transitionDelay={3000}
              assumeVisible
            >
              <SectionContent extraGlow outline>
                <div className="px-3">
                  <div className="">
                    <SectionHeading4>
                      <strong style={{ fontSize: 38, letterSpacing: 3 }}>
                        Node Presale
                      </strong>
                    </SectionHeading4>
                    <div className="pt-1" />
                    <SectionHeading4
                      className="text-center pb-1 mb-0 text-lowercase"
                      style={{ color: ThemeColors.bright }}
                    >
                      12d 3h 5m 12s
                    </SectionHeading4>
                  </div>

                  <div className="mt-3">
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="btn btn-light btn-lg w-100 text-uppercase">
                        Notify&nbsp;me
                      </button>
                    </div>
                  </div>
                </div>
              </SectionContent>
            </VisibilityTransition>
          </div>
        </IntroTextContainer>
      </div>

      {/* <BottomFade /> */}
      <NextSectionButton sectionId="learn" />
    </Section>
  );
};
