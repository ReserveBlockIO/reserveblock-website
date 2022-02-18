import styled from "styled-components";
import { Currency } from "../../enums";
import { PriceDetail, PriceDetailFromUsd } from "../../models";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { ThemeColors } from "../../theme";
import { CopyTextInput } from "./CopyTextInput";

interface Props {
  asset: string;
  address: string;
  amount: number;
  id: string;
}

const Content = styled.div`
  p {
    font-size: 24px;
    margin-bottom: 0;
  }
  code {
    color: ${ThemeColors.bright};
    font-weight: bold;
  }
  a {
    color: #fff;
    text-decoration: underline;
    transition: color 0.4s;
    &:hover {
      color: ${ThemeColors.bright};
    }
  }
`;

export const TransferInstructions = (props: Props) => {
  console.log(props);
  let assetName = "Bitcoin";

  if (props.asset === "ETH") {
    assetName = "Etherium";
  } else if (props.asset === "LTC") {
    assetName = "Litecoin";
  }

  return (
    <SectionContent>
      <SectionHeading4>Transfer Instructions</SectionHeading4>
      <div className="py-2"></div>
      <Content>
        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src="/img/transfer/login.jpg"
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              1. Login to the{" "}
              <a
                href="https://www.coinbase.com/dashboard"
                target={"_blank"}
                rel="noreferrer"
              >
                Coinbase dashboard
              </a>
              .
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center align-items-center">
          <div className="col-6 col-md-3">
            <img
              src="/img/transfer/send.jpg"
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                2. In the top-right corner of the dashboard, click{" "}
                <strong>Send/Recieve</strong>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src={`/img/transfer/pay_${props.asset.toLocaleLowerCase()}.jpg`}
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                3. For <strong>Pay with</strong>, choose{" "}
                <code>{assetName}</code>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src={`/img/transfer/currency_${props.asset.toLocaleLowerCase()}.jpg`}
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                4. Ensure that the currency text input is set to{" "}
                <code>{props.asset.toUpperCase()}</code> (not USD)
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src={`/img/transfer/amount_${props.asset.toLocaleLowerCase()}.jpg`}
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                <CopyTextInput
                  value={props.amount.toString()}
                  prepend={"5. Enter"}
                  append="into the text input."
                ></CopyTextInput>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src="/img/transfer/address.jpg"
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                <CopyTextInput
                  value={props.address}
                  prepend={"6. Paste in "}
                  append='to the "To" text input.'
                ></CopyTextInput>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src="/img/transfer/continue.jpg"
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                7. Click <strong>Continue</strong>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col-6 col-md-3">
            <img
              src="/img/transfer/sendnow.jpg"
              alt="instructions"
              className="w-100"
            />
          </div>
          <div className="col-6 col-md-9">
            <p>
              <p>
                8. Review details and click <strong>Send now</strong>
              </p>
            </p>
          </div>
        </div>

        <div className="row pb-5 align-items-center">
          <div className="col">
            <p className="text-center mb-0">
              Once complete,{" "}
              <a
                href={`/nodes/status/${props.id}`}
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>{" "}
              to get updates on the transaction's status.
            </p>
          </div>
        </div>
      </Content>
    </SectionContent>
  );
};
