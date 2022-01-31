import { formatNumber, formatPrice } from "../formatting";
import { PriceDetail } from "../models";

interface Props {
  priceDetail: PriceDetail;
}

export function PriceDetailComponent(props: Props) {
  const p = props.priceDetail;
  return (
    <>
      <h4 className="text-center text-md-start">Details</h4>

      <table className="table table-striped">
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
    </>
  );
}
