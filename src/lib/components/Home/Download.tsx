import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { SectionHeading4 } from "../../styles/styled";
import styled from "styled-components";

interface Props {
  title: string;
  description?: string;
  url?: string;
  onClick?: Function;
  openExternal?: boolean;
  icon?: IconDefinition;
  disabled?: boolean;
  dark?: boolean;
}

const Button = styled.a`
  &.disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const Download = (props: Props) => {
  const handleClick = (e: { preventDefault: () => void }) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };
  return (
    <div className="text-center position-relative">
      <SectionHeading4 dark={props.dark}>{props.title}</SectionHeading4>
      {props.description ? (
        <p className={props.dark ? "text-dark" : ""}>{props.description}</p>
      ) : (
        <p></p>
      )}
      <Button
        target={props.openExternal ? "_blank" : "_self"}
        rel="noreferrer"
        onClick={handleClick}
        className={`btn btn-lg d-block ${props.disabled ? "disabled" : ""} ${
          props.dark ? "btn-dark" : "btn-light"
        }`}
        href={props.url ? props.url : "#"}
      >
        <FontAwesomeIcon icon={props.icon ? props.icon : faDownload} />
      </Button>
    </div>
  );
};
