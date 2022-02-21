import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NetworkStatusComponent } from "../components/NetworkStatusComponent";
import { TipComponent } from "../components/TipComponent";
import { SocialUrls } from "../data/menus";
import { currencyToString } from "../enums";
import { formatPrice } from "../formatting";
import { TransactionDetails } from "../models";
import { getTransactionStatus } from "../service";
import { hideLoader, showLoader } from "../store/loader";
import { Section, SectionContent, SectionHeading1 } from "../styles/styled";

export const StatusScreen = () => {
  const dispatch = useDispatch();

  const [transaction, setTransaction] = useState<TransactionDetails | null>(
    null
  );

  const [error, setError] = useState<boolean>(false);

  const { id } = useParams();

  let timer: ReturnType<typeof setTimeout>;
  const interval = 5000;

  useEffect(() => {
    fetchStatus(true);
  }, []);

  const fetchStatus = async (withLoader = false) => {
    if (withLoader) {
      dispatch(showLoader());
    }
    try {
      const tx = await getTransactionStatus(id || "");
      if (!tx) {
        setError(true);

        poll();
        return;
      }
      setTransaction(tx);
      dispatch(hideLoader());

      if (tx.shouldPoll) {
        poll();
      }
    } catch (e) {
      setError(true);
      poll();
      dispatch(hideLoader());
    }
  };

  const poll = () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fetchStatus();
    }, interval);
  };

  // if (!transaction) {
  //   return null;
  // }

  // if (!transaction || !transaction.success || error) {
  //   return (
  //     <p className="text-center text-danger">
  //       No transaction found with identifier {id}.
  //     </p>
  //   );
  // }

  return (
    <div className="screen screen-status">
      <Section fill>
        <div className="container py-2">
          <NetworkStatusComponent />

          <SectionHeading1>Transaction Status</SectionHeading1>
          <SectionContent>
            <TipComponent>
              <span>Track your transaction's status here</span>
            </TipComponent>
            <TipComponent subtle>
              <span>
                Having a question?&nbsp;
                <a href="mailto:hello@reserveblock.io" className="text-light">
                  Contact Support
                </a>{" "}
                or connect with us on{" "}
                <a
                  href={SocialUrls.discord}
                  target="_blank"
                  className="text-light"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </span>
            </TipComponent>
          </SectionContent>
          <SectionContent>
            {transaction ? (
              <table className="table text-light">
                <tbody>
                  <tr>
                    <td>Transaction ID:</td>
                    <td>{transaction.id}</td>
                  </tr>
                  <tr>
                    <td>State:</td>
                    <td>{transaction.stateLabel}</td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>
                      {transaction.amount}{" "}
                      {currencyToString(transaction.currency)}
                      &nbsp;({formatPrice(transaction.priceUsd)} USD)
                    </td>
                  </tr>
                  <tr>
                    <td>Confirmations</td>
                    <td>
                      {transaction.confirmations} /{" "}
                      {transaction.confirmationsRequired}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Received</td>
                    <td>{transaction.receivedDateLabel}</td>
                  </tr>

                  <tr>
                    <td>Completed</td>
                    <td>{transaction.completedDateLabel}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p className="mb-0">
                Transaction not found with identifier: {id} <br />
                If you sent this transfer very recently, please refresh this
                page.
              </p>
            )}
          </SectionContent>
        </div>
      </Section>
    </div>
  );
};
