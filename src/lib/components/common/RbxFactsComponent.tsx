import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCirculation } from "../../service";
import {
  SectionContent,
  SectionHeading4,
} from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { formatNumber } from '../../formatting';

interface IItem {
  label: string;
  value: string;
}


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

  const [circulatingSupply, setCirculatingSupply] = useState<string>('...');
  const [lifetimeSupply, setLifetimeSupply] = useState<string>('...');
  const [feesBurned, setFeesBurned] = useState<string>('...');

  useEffect(() => {

    const poll = () => {
      getCirculation().then((data) => {
        if (data) {
          console.log(data);
          if (data['balance']) {
            const b = formatNumber(data['balance']);
            setCirculatingSupply(b);
          }

          if (data['lifetime_supply']) {
            const b = formatNumber(data['lifetime_supply']);
            setLifetimeSupply(b);
          }

          if (data['fees_burned_sum']) {
            const b = formatNumber(data['fees_burned_sum']);
            setFeesBurned(b);
          }
        }
      });
    }

    poll();


    const interval = setInterval(() => {
      poll();
    }, 5000);

    return () => clearInterval(interval);

  }, []);


  const items: IItem[] = [
    {
      label: "Consensus",
      value:
        "Proof of Assurance (PoA)",
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
      value: "25,000-30,000 per second minimum",
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
      value: `${circulatingSupply} RBX`,
    },
    {
      label: "Lifetime Supply",
      value: `${lifetimeSupply} RBX`,
    },
    {
      label: "RBX Fees Burned",
      value: `${feesBurned} RBX`,
    },
    {
      label: "Blockchain Size",
      value: "1.01GB as of 1/24/23",
    },
  ];

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
