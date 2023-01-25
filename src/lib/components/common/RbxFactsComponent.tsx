import styled from "styled-components";
import {
  SectionContent,
  SectionHeading3,
  SectionHeading4,
} from "../../styles/styled";
import { ThemeColors } from "../../theme";

interface IItem {
  label: string;
  value: string;
}

const items: IItem[] = [
  {
    label: "Proof of Assurance (PoA)",
    value:
      "Hybrid Liquid Proof of Stake & Proof of Capacity",
  },
  {
    label: "Programing Language",
    value: "C#, Trillium (SEN Self-Executing NFT Architecture Program)",
  },
  {
    label: "Interoperability",
    value: "Yes",
  },
  {
    label: "Scalability",
    value: "High",
  },
  {
    label: "Transactions Per Second",
    value: "500 plus (base estimate)",
  },

  {
    label: "Transaction Latency",
    value: "1-20 seconds",
  },
  {
    label: "Transaction Fee (AVG)",
    value:
      ".00001 per KB",
  },
  {
    label: "Transaction Finality",
    value: "25 seconds average",
  },
  {
    label: "Transaction Governance",
    value: "Masternode Assurance",
  },
  {
    label: "Governance Supervision",
    value: "Validators",
  },
  {
    label: "Number of Validators",
    value: "5516",
  },

  {
    label: "Circulating Supply",
    value: "97,411,744.99372743 RBX",
  },
  {
    label: "Lifetime Supply",
    value: "371,999,952.89372855 RBX",
  },
  {
    label: "RBX Fees Burned",
    value: "47.10627143554687  RBX",
  },
  {
    label: "Blockchain Size",
    value: "1.01GB as of 1/24/23",
  },
];

const Item = styled.div`
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${ThemeColors.bright};
    text-align: center;
  }
  h3 {
    padding-top: 4px;
    font-size: 16px;
    margin-bottom: 0;
    text-align: center;

    &.large {
      font-size: 26px;
      font-weight: bold;
    }
  }
`;

export const RbxFactsComponent = () => {
  return (
    <div>
      <SectionHeading4>RBX Facts</SectionHeading4>
      <div className="row">
        {items.map((item) => (
          <div className={`col-12 col-md-4 col-xl-3`}>
            <SectionContent className="my-2" outline>
              <Item>
                <div>
                  <h2>{item.label}</h2>
                  <h3 className={item.value.length < 10 ? "large" : ""}>
                    {item.value}
                  </h3>
                </div>
              </Item>
            </SectionContent>
          </div>
        ))}
      </div>
    </div>
  );
};
