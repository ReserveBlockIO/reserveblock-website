import styled from "styled-components";
import { SectionHeading1, SectionHeading2 } from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { VisibilityTransition } from "./VisibilityTransition";

interface Props {
  title: string;
  subtitle: string;
  transitionDirection?: "left" | "right";
  isOffset?: boolean;
  transitionDuration?: number;
  isInvertedOffset?: boolean;
}

interface IContainer {
  isOffset?: boolean;
  isInvertedOffset?: boolean;
}

export const Container = styled.div<IContainer>`
  ${(props) =>
    props.isOffset || props.isInvertedOffset
      ? `
      background-color: ${ThemeColors.light};
      display: inline-block;
      padding: 12px;
      position: relative;
      margin-top: -120px;
      top: -20px;
      z-index: 1000;
  `
      : null};

  ${(props) =>
    props.isOffset ? `background-color: ${ThemeColors.light};` : null};
  ${(props) =>
    props.isInvertedOffset ? `background-color: ${ThemeColors.dark};` : null};
`;

export const SectionHeaderComponent = (props: Props) => {
  return (
    <VisibilityTransition
      duration={props.transitionDuration || 0}
      transitionType="slide"
      transitionDirection={props.transitionDirection || "right"}
    >
      <Container
        isOffset={props.isOffset}
        isInvertedOffset={props.isInvertedOffset}
      >
        <SectionHeading1
          inverted={props.isOffset}
          light={props.isInvertedOffset}
        >
          {props.title}
        </SectionHeading1>
        <SectionHeading2 dark={props.isOffset} light={props.isInvertedOffset}>
          {props.subtitle}
        </SectionHeading2>
      </Container>
    </VisibilityTransition>
  );
};
