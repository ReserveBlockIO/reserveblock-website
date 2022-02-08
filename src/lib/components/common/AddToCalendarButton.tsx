import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import { addToCalendar, CalendarType } from "../../calendar";

interface Props {
  buttonClass: string;
  noIcon?: boolean;
}

export const AddToCalendarButton = (props: Props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown"
        title="activate"
        // className="btn btn-light btn-lg w-100 text-uppercase button-3d-white"
        className={props.buttonClass}
      >
        {!props.noIcon ? (
          <>
            <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            <span className="px-2"></span>
          </>
        ) : null}
        Activate
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => addToCalendar(CalendarType.Apple)}>
          <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
          &nbsp;&nbsp;Apple
        </Dropdown.Item>
        <Dropdown.Item onClick={() => addToCalendar(CalendarType.Google)}>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          &nbsp;&nbsp;Google
        </Dropdown.Item>

        <Dropdown.Item onClick={() => addToCalendar(CalendarType.Outlook)}>
          <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
          &nbsp;&nbsp;Outlook
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
