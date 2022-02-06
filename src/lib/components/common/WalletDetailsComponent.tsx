import styled from "styled-components";
import {
  SectionContent,
  SectionHeading3,
  SectionHeading4,
} from "../../styles/styled";
import { ThemeColors } from "../../theme";

const items: string[][] = [
  [
    "Ability to generate addresses. Addresses are the identifiers in which a user will send a transaction to.",
  ],
  [
    "Ability to create transactions (TX):",
    "a. RXBX transaction – is the type of TX that is sending the RXBX internal cryptocurrency from one address to another.",
    "b. Ability to mint, trade and sell NFT through a TX",
  ],
  ["Ability to check users balance of RXBX."],
  ["Ability to view and download NFTs."],
  ["Ability to view a history of all transactions."],
  [
    "Ability to view template smart contracts and then use them or edit them to meet a creators needs.",
  ],
  ["Ability to code smart contracts."],
  ["Capabilities to create human readable addresses."],
  ["Blockchain querying capability. "],
  ["Automated design generator."],
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
    color: ${ThemeColors.bright};

    text-align: left;
    &:first-child {
      /* text-align: center; */
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #fff;
    }

    &.large {
      font-size: 26px;
      font-weight: bold;
    }
  }
`;

export const WalletDetailsComponent = () => {
  return (
    <div>
      <SectionHeading4>Wallet Details</SectionHeading4>
      <div className="row" data-masonry='{"percentPosition": true }'>
        {items.map((item) => (
          <div className="col-6 col-md-4 col-lg-3">
            <SectionContent className="my-2">
              <Item>
                {item.map((line) => (
                  <h4>{line}</h4>
                ))}
              </Item>
            </SectionContent>
          </div>
        ))}
      </div>
    </div>
  );
};
