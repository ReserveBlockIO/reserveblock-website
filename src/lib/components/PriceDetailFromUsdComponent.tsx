import { formatNumber, formatPrice } from "../formatting";
import { PriceDetailFromUsd } from "../models";
import { SectionContent, SectionHeading4 } from "../styles/styled";

interface Props {
  priceDetail: PriceDetailFromUsd;
}

export function PriceDetailFromUsdComponent(props: Props) {
  const p = props.priceDetail;
  return (
    <SectionContent>
      <SectionHeading4>Details</SectionHeading4>
      <table className="table text-light">
        <tbody>
          <tr>
            <td>Total Nodes Possible</td>
            <td>{p.totalNodesPossible}</td>
          </tr>

          <tr>
            <td>USD Amount</td>
            <td>{formatPrice(p.usdAmount)} USD</td>
          </tr>

          <tr>
            <td>Cost in BTC</td>
            <td>{p.btcAmount}</td>
          </tr>
          <tr>
            <td>Cost in ETH</td>
            <td>{p.ethAmount}</td>
          </tr>

          <tr>
            <td>Cost in LTC</td>
            <td>{p.ltcAmount}</td>
          </tr>
        </tbody>
      </table>
    </SectionContent>
  );
}
