import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeColors } from "../theme";
import { isMobile } from "../utils";

interface Props {
  children: JSX.Element | JSX.Element[];
  subtle?: boolean;
}

export const TipComponent = (props: Props) => {
  return (
    <div
      style={{
        fontSize: isMobile()
          ? props.subtle
            ? 12
            : 14
          : props.subtle
          ? 16
          : 18,
        color: props.subtle ? "#ddd" : "#fff",
      }}
      className="py-1"
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        color={props.subtle ? ThemeColors.muted : ThemeColors.bright}
        size={props.subtle ? "xs" : "sm"}
      ></FontAwesomeIcon>
      &nbsp;
      {props.children}
    </div>
  );
};
