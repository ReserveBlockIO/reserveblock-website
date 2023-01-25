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
import SpyGlass from "../../SpyGlass";

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
    line-height: 36px;
    ${isMobile() ? `font-size: 20px; letter-spacing: 1px; line-height: 28px;` : ``}
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

const LogoContainer = styled.div`


  display: flex;

  .rbx-cube {
    position: relative;
    top: -15px;
    width:170px;
    height: 170px;
    /* background-image:url(/img/rbx_cube_small.png); */
    background-image:url(/img/cube.gif);
    mix-blend-mode: screen;
    background-size: contain;
    background-repeat: no-repeat;

    ${isMobile() ? `width: 75px; height: 75px;` : ``}
  }
  
  .rbx-wordmark {
    display: block;
    margin-left: 12px;
    width: 300px;
    height: 128px;
    background-image:url(/img/rbx-metallic.png);
    background-size: contain;
    background-repeat: no-repeat;
    text-indent: -9999px;
    ${isMobile() ? `width: 150px; height: 64px;` : ``}

  }

  
`;


const WITH_DELAYS = false;

export const HomeIntroSection = () => {


  return (
    <Section fill>



      <div>
        <div style={{ height: 60 }} />

        <div className="d-flex justify-content-center align-items-center">

          <LogoContainer>
            <div className="rbx-cube"></div>
            <h1 className="rbx-wordmark">RBX</h1>
          </LogoContainer>
        </div>


        <div style={{ height: 60 }} />
        <IntroTextContainer>

          <VisibilityTransition
            transitionDelay={WITH_DELAYS ? 1000 : 0}
            assumeVisible={true}
            transitionType="fade"
            duration={1000}
          >
            <h2 className="democratize">
              Democratizing Tokenization<span className="d-none d-md-inline"> </span>
              <br className="d-block d-md-none" />
              For Everyone
            </h2>
          </VisibilityTransition>
          <div className="py-4 d-none d-md-block"></div>

          <h3>
            <VisibilityTransition
              transitionDelay={WITH_DELAYS ? 2000 : 0}
              duration={1000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>
                YOUR Block
                <span className="bullet px-4 d-none d-md-inline"></span>
              </span>
            </VisibilityTransition>
            <div className="d-block d-md-none py-1" />
            <VisibilityTransition
              transitionDelay={WITH_DELAYS ? 3000 : 0}
              duration={1000}
              assumeVisible={true}
              transitionType="blur"
              inline
            >
              <span>YOUR Data</span>
            </VisibilityTransition>
            <div className="d-block d-md-none py-1" />


          </h3>

          <div style={{ height: 60 }}></div>
          <div className="d-flex justify-content-center">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="up"
              transitionDelay={WITH_DELAYS ? 3000 : 0}
              duration={500}
              assumeVisible
            >

              <div><SpyGlass /></div>



            </VisibilityTransition>
          </div>
        </IntroTextContainer>
      </div>


      {/* <BottomFade /> */}
      <NextSectionButton sectionId="learn" />
    </Section>
  );
};
