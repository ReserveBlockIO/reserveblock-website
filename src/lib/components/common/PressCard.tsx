import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

import { SectionHeading4 } from "../../styles/styled";
import styled from "styled-components";
import { ThemeColors } from "../../theme";

export interface IPressCardProps {
  title: string;
  url: string;
  imageUrl: string;
  date: string;
}

const PressCardContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(126, 239, 255, 0.22);
  .img-container {
    background-color: ${ThemeColors.darker};
    img {
      width: 100%;
      height: 100px;
      object-fit: contain;
    }
  }

  .content {
    height: 200px;
  }
`;

export const PressCard = (props: IPressCardProps) => {
  return (
    <PressCardContainer>
      <div className="img-container">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="content p-3">
        <div className="date mb-1">{props.date}</div>
        <SectionHeading4>{props.title}</SectionHeading4>
      </div>
      <a
        href={props.url}
        target="_blank"
        className="btn btn-dark btn-lg d-block"
        rel="noreferrer"
      >
        Read More <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </PressCardContainer>
  );
};
