import { useState } from "react";
import { Currency } from "../enums";

interface Props {
  asset: string;
  amount: number;
  address: string;
}

export const Web3ButtonsComponent = (props: Props) => {
  const [metaMaskOpen, setMetaMaskOpen] = useState(false);

  const handleMetaMask = () => {
    setMetaMaskOpen(true);
  };

  return (
    <>
      {props.asset.toUpperCase() === "ETH" ? (
        <>
          <div className="py-1">
            <button
              className="btn btn-secondary w-100"
              onClick={() => handleMetaMask()}
            >
              Metamask
            </button>
          </div>

          <div className="py-1">
            <button
              className="btn btn-secondary w-100"
              onClick={() => handleMetaMask()}
            >
              Coinbase
            </button>
          </div>
        </>
      ) : null}

      {metaMaskOpen ? (
        <div>
          <iframe
            className="w-100"
            src={`/transactions/?address=${props.address}&amount=${props.amount}`}
            title="metamask"
          ></iframe>
        </div>
      ) : null}
    </>
  );
};
