import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  SectionContent,
  SectionHeading3,
  SectionHeading4,
} from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { isMobile } from "../../utils";
import { VisibilityTransition } from "./VisibilityTransition";

const items: string[][] = [
  [
    "Ability to generate addresses. Addresses are the identifiers in which a user will send a transaction to.",
  ],
  [
    "Ability to create transactions (TX):",
    "a. RBX transaction – is the type of TX that is sending the RBX internal cryptocurrency from one address to another.",
    "b. Ability to mint, trade and sell NFT through a TX",
  ],
  ["Ability to check users balance of RBX."],
  ["Ability to view and download NFTs."],
  ["Ability to view a history of all transactions."],
  [
    "Ability to view template smart contracts and then use them or edit them to meet a creators needs.",
  ],
  ["Ability to code smart contracts."],
  ["Capabilities to create human readable addresses."],
  ["Blockchain querying capability. "],
  ["Ability to send media / data P2P"],
];

const Item = styled.div`
  /* min-height: 90px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    opacity: 0.75;

    text-align: left;
    &:first-child {
      /* text-align: center; */
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #fff;
      opacity: 1;
    }

    &.large {
      font-size: 26px;
      font-weight: bold;
    }
  }
`;

export const WalletDetailsComponent = () => {


  const [visible, setVisible] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setVisible(true)
    }, 100);
  }, []);

  const col1 = [
    items[0],
    items[4],
    items[8],
  ]

  const col2 = [
    items[1],
    items[5],
  ]

  const col3 = [
    items[9],

    items[2],
    items[6],
  ]

  const col4 = [
    items[3],
    items[7],
  ]

  const columns = [col1, col2, col3, col4];


  return (
    <div>
      <SectionHeading4>Wallet Details</SectionHeading4>
      {/* <div className="row" data-masonry='{"percentPosition": true }'> */}
      <div className="row">


        {[...isMobile() ? [items] : columns].map((col, j: number) => (

          <div key={j} className="col-12 col-md-3">

            {col.map((item, i: number) => (
              <div
                key={i}
                // className="col-6 col-md-4 col-lg-3"
                style={{ padding: "0px 4px" }}
              >
                <VisibilityTransition
                  transitionType="slide"
                  transitionDirection="up"
                  transitionDelay={i * 100}
                >
                  <SectionContent className="my-1" style={{ margin: 0 }} outline>
                    <Item>
                      {item.map((line, k: number) => (
                        <h4 key={k}>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            color={ThemeColors.bright}
                            size="xs"
                          ></FontAwesomeIcon>
                          &nbsp;{line}
                        </h4>
                      ))}
                    </Item>
                  </SectionContent>
                </VisibilityTransition>
              </div>
            ))}
          </div>

        )
        )}


        {/* {items.map((item, i: number) => (
          <div
            className="col-6 col-md-4 col-lg-3"
            style={{ padding: "0px 4px" }}
          >
            <VisibilityTransition
              transitionType="slide"
              transitionDirection="up"
              transitionDelay={i * 100}
            >
              <SectionContent className="my-1" style={{ margin: 0 }} outline>
                <Item>
                  {item.map((line) => (
                    <h4>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        color={ThemeColors.bright}
                        size="xs"
                      ></FontAwesomeIcon>
                      &nbsp;{line}
                    </h4>
                  ))}
                </Item>
              </SectionContent>
            </VisibilityTransition>
          </div>
        ))} */}
      </div>
    </div>
  );
};
