import { formatNumber, formatPrice } from "../formatting";
import { PriceDetail } from "../models";
import { SectionContent, SectionHeading4 } from "../styles/styled";
import { ThemeColors } from "../theme";

interface Props {
  priceDetail: PriceDetail;
}

export function PriceDetailComponent(props: Props) {
  const p = props.priceDetail;
  return (
    <>
      <SectionContent>
        <SectionHeading4>Details</SectionHeading4>
        <table className="table text-light">
          <tbody>
            <tr>
              <td># of Nodes</td>
              <td>{p.nodeAmount}</td>
            </tr>

            <tr>
              <td>Current Price of 1 {p.assetNameLabel}</td>
              <td>{formatPrice(p.assetPrice)} USD</td>
            </tr>

            <tr>
              <td>Amount Owed ({p.assetNameLabel})</td>
              <td>{p.amountOwed}</td>
            </tr>

            <tr>
              <td>Amount Owed (USD)</td>
              <td>{formatPrice(p.usdAmount)}</td>
            </tr>
            <tr>
              <td>RBX Price</td>
              <td>{p.rbxPrice}</td>
            </tr>
            <tr>
              <td>RBX Amount</td>
              <td>{formatNumber(p.rbxAmount)}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ color: ThemeColors.bright }}>
          ** Please include any transfer fees from wallet provider additionally
          or your transaction will not be completed. **
        </div>
      </SectionContent>
    </>
  );
}
