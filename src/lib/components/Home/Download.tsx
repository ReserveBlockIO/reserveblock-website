import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { SectionHeading4 } from "../../styles/styled";

interface Props {
  title: string;
  description: string;
  url: string;
}

export const Download = (props: Props) => {
  return (
    <div className="text-center">
      <SectionHeading4>{props.title}</SectionHeading4>
      <p>{props.description}</p>
      <a href={props.url} className="btn btn-light btn-lg d-block">
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
};
