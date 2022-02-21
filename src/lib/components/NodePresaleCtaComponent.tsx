import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContent, SectionHeading4 } from "../styles/styled";
import { ThemeColors } from "../theme";
import { isMobile } from "../utils";

import { Dropdown } from "react-bootstrap";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { addToCalendar, CalendarType } from "../calendar";
import Countdown from "react-countdown";
import { AddToCalendarButton } from "./common/AddToCalendarButton";

export const NodePresaleCtaComponent = () => {
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
              <strong style={{ fontSize: 34, letterSpacing: 3, opacity: 0.8 }}>
                Feb 22 6pm EST
              </strong>
            </SectionHeading4>
            <div className="py-1" />
            <SectionHeading4
              className="text-center pb-1 mb-0 text-lowercase"
              style={{
                color: ThemeColors.bright,
                letterSpacing: 5,
                fontSize: 29,
              }}
            >
              <Countdown
                date={new Date(1645570800000)}
                renderer={(props) => {
                  return `${props.days}d ${props.hours}h ${props.minutes}m ${props.seconds}s`;
                }}
              />
            </SectionHeading4>
            <div className="pt-1" />
          </div>

          <div className="mt-3">
            <AddToCalendarButton buttonClass="btn btn-light btn-lg w-100 text-uppercase button-3d-white" />
          </div>
          <div className="mt-2">
            <a
              href={require("../../pdfs/NodePresaleInstructions.pdf")}
              target="_blank"
              className="btn btn-light btn-lg w-100 text-uppercase button-3d-white"
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
