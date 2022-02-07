import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import { ThemeColors } from "../../theme";

interface Props {
  title: string;
  description: string;
  icon: IconDefinition;
  href: string;
  ctaText: string;
}

const Hitarea = styled.a`
  color: #fff;
  text-decoration: none;
  .left {
    transition: all 0.4s;
  }
  .right {
    transition: all 0.4s ease;
  }
  &:hover {
    text-decoration: none;
    color: #fff;
    .left {
      color: ${ThemeColors.bright};
    }
    .right {
      padding-left: 10%;
    }
  }
`;

export const ConnectOptionComponent = (props: Props) => {
  return (
    <Hitarea href={props.href} rel="noreferrer" target="_blank">
      <SectionContent outline>
        <div className="row d-flex align-items-center">
          <div className="left col-4 col-md-2 text-center">
            <FontAwesomeIcon icon={props.icon} size="4x"></FontAwesomeIcon>
          </div>
          <div className="right col-8 col-md-10">
            <SectionHeading4>{props.title}</SectionHeading4>
            <p>{props.description}</p>
          </div>
        </div>
      </SectionContent>
    </Hitarea>
  );
};
