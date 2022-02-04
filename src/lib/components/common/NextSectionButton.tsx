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
  margin-left: -16px;

  padding-bottom: 3px;
`;

export const NextSectionButton = (props: Props) => {
  return (
    <Container className="btn btn-dark" href={`#${props.sectionId}`}>
      <FontAwesomeIcon icon={faChevronDown} size={"lg"} />
    </Container>
  );
};
