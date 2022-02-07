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
    label: "Consensus Mechanism",
    value:
      "Proof of Assurance (Hybrid Liquid Proof of Stake & Proof of Capacity)",
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
    label: "Transaction Throughput",
    value: "2,500 and up (base estimate)",
  },
  {
    label: "Transaction Latency",
    value: "20 s (processing block times every 20 sec)",
  },
  {
    label: "Transaction Fee (AVG)",
    value:
      ".00001 (one-time data fee of .0000047 RXBX per KB if storing physical media is needed)",
  },
  {
    label: "Transaction Finality",
    value: "25 s",
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
    value: "N/A",
  },
  {
    label: "(APY) Per Year",
    value: "N/A",
  },
  {
    label: "Circulation",
    value: "67,500,000",
  },
  {
    label: "Max Supply",
    value: "372,000,000",
  },
  {
    label: "Blockchain Size",
    value: "N/A",
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
          <div className="col-6 col-md-4 col-lg-3">
            <SectionContent className="my-2">
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
