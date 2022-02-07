import styled from "styled-components";
import reportWebVitals from "../../../reportWebVitals";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { isMobile } from "../../utils";

interface Line {
  label: string;
  value: string;
}

interface Item {
  lines: Line[];
}

const Row = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  &:last-child {
    border-bottom: none;
  }
`;
const Label = styled.div`
  font-size: 20px;

  ${isMobile() ? `font-size: 16px` : null};
`;
const Value = styled(Label)`
  font-weight: bold;
  text-align: right;
`;

export const HalvingScheduleComponent = () => {
  const items: Item[] = [
    {
      lines: [
        { label: "Year 0 - No Halving Block Reward", value: "32.00" },
        {
          label: "Coins mined at beginning of chain start",
          value: "67,500,000",
        },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 1) New Block Reward",
          value: "16.00 at year 3",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "218,872,800",
        },
        { label: "Total percent of coins mined", value: "58.84%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 2) New Block Reward",
          value: "8.00 at year 6",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "294,559,200",
        },
        { label: "Total percent of coins mined", value: "79.18%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 3) New Block Reward",
          value: "4.00 at year 9",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "332,402,400",
        },
        { label: "Total percent of coins mined", value: "89.36%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 4) New Block Reward",
          value: "2.00 at year 12",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "351,324,000",
        },
        { label: "Total percent of coins mined", value: "94.44%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 5) New Block Reward",
          value: "1.00 at year 15",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "360,784,800",
        },
        { label: "Total percent of coins mined", value: "96.99%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 6) New Block Reward",
          value: "0.50 at year 18",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "365,515,200",
        },
        { label: "Total percent of coins mined", value: "98.26%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 7) New Block Reward",
          value: "0.25 at year 21",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "367,880,400",
        },
        { label: "Total percent of coins mined", value: "98.89%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 8) New Block Reward",
          value: "0.125 at year 24",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "369,063,000",
        },
        { label: "Total percent of coins mined", value: "99.21%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 9) New Block Reward",
          value: "0.0625 at year 27",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "369,654,300",
        },
        { label: "Total percent of coins mined", value: "99.37%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 10) New Block Reward",
          value: "0.03125 at year 30",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "369,949,950",
        },
        { label: "Total percent of coins mined", value: "99.45%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 11) New Block Reward",
          value: "0.015625 at year 33",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,097,775",
        },
        { label: "Total percent of coins mined", value: "99.49%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 12) New Block Reward",
          value: "0.0078125 at year 36",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,171,688",
        },
        { label: "Total percent of coins mined", value: "99.51%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 13) New Block Reward",
          value: "0.00390625 at year 39",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,208,644",
        },
        { label: "Total percent of coins mined", value: "99.52%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 14) New Block Reward",
          value: "0.001953125 at year 42",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,227,122",
        },
        { label: "Total percent of coins mined", value: "99.52%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 15) New Block Reward",
          value: "0.0009765625 at year 45",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,236,361",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 16) New Block Reward",
          value: "0.00048828125 at year 48",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,240,980",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 17) New Block Reward",
          value: "0.000244140625 at year 51",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,243,290",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 18) New Block Reward",
          value: "0.0001220703125 at year 54",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,244,445",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 19) New Block Reward",
          value: "0.00006103515625 at year 57",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,023",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 20) New Block Reward",
          value: "0.000030517578125 at year 60",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,311",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 21) New Block Reward",
          value: "0.0000152587890625 at year 63",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,456",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 22) New Block Reward",
          value: "0.00000762939453125 at year 66",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,528",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 23) New Block Reward",
          value: "0.000003814697265625 at year 69",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,564",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 24) New Block Reward",
          value: "0.0000019073486328125 at year 72",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,582",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 25) New Block Reward",
          value: "0.00000095367431640625 at year 75",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,591",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 26) New Block Reward",
          value: "0.000000476837158203125 at year 78",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,595",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 27) New Block Reward",
          value: "0.0000002384185791015625 at year 81",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,598",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 28) New Block Reward",
          value: "0.00000011920928955078125 at year 84",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,599",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 29) New Block Reward",
          value: "0.000000059604644775390625 at year 87",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,599",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 30) New Block Reward",
          value: "0.0000000298023223876953125 at year 90",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,600",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 31) New Block Reward",
          value: "0.00000001490116119384765625 at year 93",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,600",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 32) New Block Reward",
          value: "0.000000007450580596923828125 at year 96",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,600",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
    {
      lines: [
        {
          label: "Halving Number 33) New Block Reward",
          value: "0.0000000037252902984619140625 at year 99",
        },
        {
          label: "Coins mined at beginning of halving",
          value: "370,245,600",
        },
        { label: "Total percent of coins mined", value: "99.53%" },
      ],
    },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <div>
          <SectionContent>
            {item.lines.map((line) => (
              <Row className="d-flex justify-content-between pb-2 pt-2">
                <Label>{line.label}:</Label>
                <Value>{line.value}</Value>
              </Row>
            ))}
          </SectionContent>
        </div>
      ))}
    </div>
  );
};
