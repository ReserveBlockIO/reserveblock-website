import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { isMobile } from "../../utils";

import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import { nextSaleWindowStarts, presaleIsLive } from "../../presale-windows";

export const NodePresaleLiveCtaComponent = () => {
  const [isLive, setIsLive] = useState(presaleIsLive());
  const [nextWindow, setNextWindow] = useState<Date | null>(null);

  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    const _isLive = presaleIsLive();
    setIsLive(_isLive);

    if (!_isLive) {
      const _nextWindow = nextSaleWindowStarts();
      setNextWindow(_nextWindow);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      checkStatus();
    }, 5000);
  };

  return (
    <div
      style={{
        position: "relative",
        transform: `scale(${isMobile() ? "0.75" : `1`}) translateY(${
          isMobile() ? "-40px" : "0"
        })`,
      }}
    >
      <SectionContent
        extraGlow
        outline
        style={{
          borderRadius: 6,
        }}
      >
        <div className="px-3">
          <div className="">
            <SectionHeading4>
              <strong style={{ fontSize: 38, letterSpacing: 3 }}>
                Node Presale
              </strong>
            </SectionHeading4>
            <SectionHeading4>
              <strong
                style={{
                  fontSize: 36,
                  letterSpacing: 3,
                  // opacity: 0.8,
                  ...(isLive
                    ? { color: ThemeColors.bright }
                    : { opacity: 0.8 }),
                }}
              >
                {isLive ? "LIVE NOW" : "BACK SOON"}
              </strong>
            </SectionHeading4>
            <div className="py-1" />

            {!isLive ? (
              <SectionHeading4
                className="text-center pb-1 mb-0"
                style={{
                  color: ThemeColors.bright,
                  letterSpacing: 5,
                  fontSize: 29,
                }}
              >
                {nextWindow ? (
                  <Countdown
                    date={nextWindow}
                    renderer={(props) => {
                      return `${props.days}d ${props.hours}h ${props.minutes}m ${props.seconds}s`;
                    }}
                  />
                ) : (
                  "PRESALE IS OVER"
                )}
              </SectionHeading4>
            ) : null}
            <div className="pt-1" />
          </div>
          {isLive ? (
            <div className="mt-3">
              {/* <AddToCalendarButton buttonClass="btn btn-light btn-lg w-100 text-uppercase button-3d-white" /> */}
              <a
                href="/nodes"
                className="btn btn-light btn-lg w-100 text-uppercase button-3d-white"
              >
                Activate
              </a>
            </div>
          ) : null}
          <div className="mt-2">
            <a
              href={require("../../../pdfs/NodePresaleInstructions.pdf")}
              target="_blank"
              className="btn btn-light btn-lg w-100 text-uppercase button-3d-white"
              style={{ opacity: 0.7 }}
              rel="noreferrer"
            >
              Instructions
            </a>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
