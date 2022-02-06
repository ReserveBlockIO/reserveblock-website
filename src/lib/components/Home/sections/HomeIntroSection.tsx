import { useEffect, useRef, useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeading4,
} from "../../../styles/styled";
import { NextSectionButton } from "../../common/NextSectionButton";
import styled from "styled-components";
import { ThemeColors } from "../../../theme";

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

const BottomFade = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 100px;
  background: rgb(3, 23, 69);
  background: linear-gradient(
    180deg,
    rgba(3, 23, 69, 0) 0%,
    rgba(3, 23, 69, 1) 59%
  );
`;

const ContentContainer = styled.div`
  opacity: 0;
  transition: all 1.3s;
  transform: translateY(100px);
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeIntroSection = () => {
  const introVideo =
    "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/rbx-animation-scaled-v5x.mp4?alt=media";
  const [contentVisible, setContentVisible] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current!;

    v.addEventListener("canplay", () => {
      v.play();
    });

    v.addEventListener("timeupdate", (event) => {
      if (!contentVisible) {
        if (event.timeStamp >= 4500) {
          setContentVisible(true);
        }
      }
    });

    v.addEventListener(
      "ended",
      (_) => {
        console.log("ended");
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
    <Section fill={true} center={true}>
      <IntroVideo
        ref={videoRef}
        src={introVideo}
        muted={true}
        playsInline={true}
      ></IntroVideo>

      <ContentContainer className={contentVisible ? "visible" : ""}>
        <IntroTextContainer>
          <h2 className="democratize">Democratizing NFTs for Everyone</h2>
          <h3>
            Your Block.<span className="px-3"></span>
            Your Data.
            <br />
            Your NFT Reserved.
          </h3>
          <div className="d-flex justify-content-center">
            <SectionContent extraGlow={true} outline>
              <div className="px-4">
                <div className="">
                  <SectionHeading4>
                    <strong>Node Presale</strong>
                  </SectionHeading4>
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
          </div>
        </IntroTextContainer>
      </ContentContainer>
      <ContentContainer
        className={contentVisible ? "visible" : ""}
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      ></ContentContainer>
      <BottomFade />
      <NextSectionButton sectionId="learn" />
    </Section>
  );
};
