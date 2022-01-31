import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { currencyToString } from "../enums";
import { formatPrice } from "../formatting";
import { TransactionDetails } from "../models";
import { getTransactionStatus } from "../service";
import { hideLoader, showLoader } from "../store/loader";

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

  if (!transaction?.success || error) {
    return (
      <p className="text-center text-danger">
        No transaction found with identifier {id}.
      </p>
    );
  }

  if (!transaction) {
    return null;
  }

  return (
    <div className="screen screen-status">
      <h2 className="text-center mb-4">Transaction Status</h2>
      <table className="table table-striped">
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
              {transaction.amount} {currencyToString(transaction.currency)}
              &nbsp;({formatPrice(transaction.priceUsd)} USD)
            </td>
          </tr>
          <tr>
            <td>Confirmations</td>
            <td>
              {transaction.confirmations} / {transaction.confirmationsRequired}{" "}
            </td>
          </tr>
          <tr>
            <td>Received</td>
            <td>{transaction.receivedDateLabel}</td>
          </tr>
          <tr>
            <td>Inserted</td>
            <td>{transaction.insertDateLabel}</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>{transaction.completedDateLabel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
