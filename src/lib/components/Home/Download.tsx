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
}

const Button = styled.a`
  &.disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const Download = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className="text-center position-relative">
      <SectionHeading4>{props.title}</SectionHeading4>
      {props.description ? <p>{props.description}</p> : <p></p>}
      <Button
        target={props.openExternal ? "_blank" : "_self"}
        rel="noreferrer"
        onClick={handleClick}
        className={`btn btn-light btn-lg d-block ${
          props.disabled ? "disabled" : ""
        }`}
        href={props.url ? props.url : "#"}
      >
        <FontAwesomeIcon icon={props.icon ? props.icon : faDownload} />
      </Button>
    </div>
  );
};
