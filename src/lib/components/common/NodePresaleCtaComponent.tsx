import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { isMobile } from "../../utils";

import AddToCalendar from "react-add-to-calendar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
  faApple,
  faFontAwesome,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { addToCalendar, CalendarType } from "../../calendar";

export const NodePresaleCtaComponent = () => {
  const event = {
    title: "Sample Event",
    description: "This is the sample event provided as an example only",
    location: "Portland, OR",
    startTime: "2016-09-16T20:15:00-04:00",
    endTime: "2016-09-16T21:45:00-04:00",
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
              12d 3h 5m 12s
            </SectionHeading4>
            <div className="pt-1" />
          </div>

          <div className="mt-3">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown"
                title="activate"
                className="btn btn-light btn-lg w-100 text-uppercase button-3d-white"
              >
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                <span className="px-2"></span>
                Activate
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => addToCalendar(CalendarType.Apple)}
                >
                  <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                  &nbsp;&nbsp;Apple
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => addToCalendar(CalendarType.Google)}
                >
                  <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  &nbsp;&nbsp;Google
                </Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon>
                  &nbsp;&nbsp;Microsoft
                </Dropdown.Item> */}
                <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                  &nbsp;&nbsp;Outlook
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};
