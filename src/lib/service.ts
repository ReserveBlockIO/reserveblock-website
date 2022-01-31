import { Currency, currencyToString } from "./enums";
import {
  CheckoutDetails,
  NodeInfo,
  PriceDetail,
  PriceDetailFromUsd,
  TransactionDetails,
} from "./models";

const BASE_API_URL = "https://api.magi.computer/api/V1";

export function healthCheck() {
  return fetch(`${BASE_API_URL}/`).then((data) => data.json());
}

export function getDetails(amount: number, currency: Currency) {
  return fetch(
    `${BASE_API_URL}/GetCryptoPriceDetail/${amount}/${currencyToString(
      currency
    ).toLowerCase()}/`
  ).then(async (data) => {
    const json = await data.json();
    return new PriceDetail(json);
  });
}

export function getDetailsFromUsd(amount: number) {
  return fetch(`${BASE_API_URL}/GetUSDPriceToNodes/${amount}/`).then(
    async (data) => {
      const json = await data.json();
      return new PriceDetailFromUsd(json);
    }
  );
}

export function getIp() {
  return fetch("https://ipapi.co/json/").then(async (data) => {
    const json = await data.json();
    return json["ip"];
  });
}

export function allocateAddress(
  email: string,
  currency: string,
  ip: string,
  uuid: string,
  address: string,
  amount: number
) {
  return fetch(
    `${BASE_API_URL}/GetAddress/${email.replace(
      "@",
      "13%40"
    )}/${currency.toLowerCase()}/${ip}/${uuid}/${address}/${amount}/`
  ).then(async (data) => {
    const json = await data.json();
    return new CheckoutDetails(json);
  });
}

export function getTransactionStatus(id: string) {
  try {
    return fetch(`${BASE_API_URL}/GetTxStatus/${id}/`).then(async (data) => {
      const json = await data.json();
      return new TransactionDetails(json);
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function getNodeInfo() {
  return fetch(`${BASE_API_URL}/GetNodeInfo`).then(async (data) => {
    const json = await data.json();
    return new NodeInfo(json);
  });
}
