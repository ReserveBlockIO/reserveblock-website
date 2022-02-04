import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { useState } from "react";

const Container = styled.div`
  width: 100%;

  div {
    position: absolute;
    width: 600px;
    transform: translate(-50%, -50%);

    &.text-1 {
      font-size: 48px;
      line-height: 54px;
      letter-spacing: 1px;
    }

    &.text-2 {
      font-size: 64px;
      line-height: 72px;
      letter-spacing: 2px;
    }
  }
`;

export const AboutTextComponent = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 3000,

    // config: config.molasses,
    onRest: () => set(!toggle),
  });

  return (
    <Container className="text-center">
      {transitions(({ opacity }, item) =>
        item ? (
          <animated.div
            className="text-1"
            style={{
              // position: "absolute",
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            An open-source decentralized NFT centric blockchain for everyone
          </animated.div>
        ) : (
          <animated.div
            className="text-2"
            style={{
              // position: "absolute",
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            }}
          >
            Your Block
            <br />
            Your Data
            <br />
            Your NFT Reserved
          </animated.div>
        )
      )}
    </Container>
  );
};
