import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { ButtonLink, SectionHeading4 } from "../../styles/styled";

interface Props {
  title: string;
  description?: string;
  url?: string;
  onClick?: Function;
  openExternal?: boolean;
  icon?: IconDefinition;
  disabled?: boolean;
  dark?: boolean;
  buttonText?: string;
  noIcon?: boolean;
  smallButton?: boolean;
  horizontalPadding?: number;
}

export const Download = (props: Props) => {
  const handleClick = (e: { preventDefault: () => void }) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };
  return (
    <div
      className="text-center position-relative"
      style={{ padding: `0 ${props.horizontalPadding || 0}px` }}
    >
      <SectionHeading4 dark={props.dark}>{props.title}</SectionHeading4>
      {props.description ? (
        <p className={props.dark ? "text-dark" : ""}>{props.description}</p>
      ) : (
        <p></p>
      )}
      <ButtonLink
        target={props.openExternal ? "_blank" : "_self"}
        rel="noreferrer"
        onClick={handleClick}
        className={`btn btn-lg  ${props.disabled ? "disabled" : ""} ${
          props.dark ? "btn-dark" : "btn-light button-3d-white"
        } ${props.smallButton ? `px-4` : `w-100`}`}
        href={props.url ? props.url : "#"}
      >
        {!props.noIcon ? (
          <FontAwesomeIcon icon={props.icon ? props.icon : faDownload} />
        ) : null}
        {props.buttonText ? <>&nbsp;{props.buttonText}</> : null}
      </ButtonLink>
    </div>
  );
};
