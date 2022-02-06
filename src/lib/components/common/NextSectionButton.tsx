import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface Props {
  sectionId: string;
}

const Container = styled.a`
  position: absolute;
  bottom: 16px;
  left: 50%;
  margin-left: -25px;

  padding-bottom: 3px;

  img {
    width: 50px;
    height: 30px;
    transition: opacity 0.2s linear;
    opacity: 0.75;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

export const NextSectionButton = (props: Props) => {
  return (
    <Container href={`#${props.sectionId}`}>
      <img src="/img/arrow-down.png" alt="Next Section" />
    </Container>
  );
};
