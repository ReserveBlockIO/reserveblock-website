import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title: string;
  description: string;
  icon: IconDefinition;
  href: string;
  ctaText: string;
}

export const ConnectOptionComponent = (props: Props) => {
  return (
    <SectionContent>
      <div className="row d-flex align-items-center">
        <div className="col-2 text-center">
          <FontAwesomeIcon icon={props.icon} size="4x"></FontAwesomeIcon>
        </div>
        <div className="col-10">
          <SectionHeading4>{props.title}</SectionHeading4>
          <p>
            {props.description}{" "}
            <strong>
              <a
                href={props.href}
                target="_blank"
                className="text-light"
                rel="noreferrer"
              >
                {props.ctaText}
              </a>
            </strong>
          </p>
        </div>
      </div>
    </SectionContent>
  );
};
