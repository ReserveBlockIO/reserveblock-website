import { useEffect, useState } from "react";
import styled from "styled-components";
import useVisibility from "../../hooks/visibility";

interface Props {
  transitionType?: "slide" | "fade" | "blur";
  transitionDirection?: "left" | "right" | "up" | "down";
  transitionDelay?: number;
  offset?: number;
  duration?: number;
  children: JSX.Element | JSX.Element[];
  assumeVisible?: boolean;
  inline?: boolean;
}

interface IContainer {
  ref: any;
  duration: number;
  delay: number;
  inline: boolean;
}

const Container = styled.div<IContainer>`
  transition: all ${(props) => props.duration}ms ease-out;
  transition-delay: ${(props) => props.delay}ms;

  ${(props) => (props.inline ? `display: inline-block;` : "")};

  opacity: 0;
  &.transition-fade {
  }

  &.transition-slide {
    transform: translate(-100%, 0);
    &.direction-right {
      transform: translate(-100%, 0);
    }
    &.direction-left {
      transform: translate(100%, 0);
    }
    &.direction-up {
      transform: translate(0, 100%);
    }
    &.direction-down {
      transform: translate(0, -100%);
    }
  }

  &.transition-blur {
    filter: blur(50px);
  }

  &.visible {
    opacity: 1;
    &.transition-fade {
    }
    &.transition-slide {
      transform: translate(0);
    }

    &.transition-blur {
      filter: blur(0);
    }
  }
`;

export const VisibilityTransition = (props: Props) => {
  const offset = props.offset !== undefined ? props.offset : 100;
  const duration = props.duration !== undefined ? props.duration : 500;
  const transitionType = props.transitionType || "fade";
  const transitionDirection = props.transitionDirection;
  const transitionDelay = props.transitionDelay || 0;
  const assumeVisible = props.assumeVisible || false;
  const inline = props.inline || false;

  let transitionClass = `transition-${transitionType} ${
    transitionDirection ? `direction-${transitionDirection}` : ""
  }`;

  const [isVisible, el] = useVisibility(offset);

  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    if (assumeVisible) {
      setTimeout(() => {
        setForceVisible(true);
      }, 0);
    }
  }, []);

  return (
    <Container
      ref={el}
      duration={duration}
      delay={transitionDelay}
      inline={inline}
      className={`${transitionClass} ${
        forceVisible || isVisible ? "visible" : ""
      }`}
    >
      {props.children}
    </Container>
  );
};
