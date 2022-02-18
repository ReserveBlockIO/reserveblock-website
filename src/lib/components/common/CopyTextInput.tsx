import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToasts } from "react-toast-notifications";
import { copyToClipboard } from "../../utils";

interface Props {
  value: string;
  append?: string;
  prepend?: string;
}

export const CopyTextInput = (props: Props) => {
  const { addToast } = useToasts();

  const handleCopy = () => {
    const value = props.value;
    copyToClipboard(value);
    addToast(`${value} copied to clipboard`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <span className="d-flex align-items-center">
      {props.prepend ? <span className="pe-2">{props.prepend}</span> : null}
      <input
        className="form-control bg-dark text-light"
        readOnly
        value={props.value}
        onFocus={(e) => e.target.select()}
        style={{ width: 300 }}
      ></input>

      <button
        className="btn btn-light  text-uppercase button-3d-white"
        onClick={() => {
          handleCopy();
        }}
      >
        <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
      </button>
      {props.append ? <span className="ps-2">{props.append}</span> : null}
    </span>
  );
};
