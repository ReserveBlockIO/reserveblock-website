import { Currency, currencyToString } from "./enums";
import {
  Block,
  CheckoutDetails,
  NodeInfo,
  PaginatedResponse,
  PriceDetail,
  PriceDetailFromUsd,
  TransactionDetails,
} from "./models";

const BASE_API_URL = "https://api.magi.computer/api/V1";
const NETWORK_API_URL = 'https://data.rbx.network/api';

export function healthCheck() {
  return fetch(`${BASE_API_URL}/`).then((data) => data.json());
}

export function getCirculation() {
  return fetch(`${NETWORK_API_URL}/circulation`).then((data) => data.json());
}

export function listBlocks(page: number = 1, params: any = {},) {
  return fetch(`${NETWORK_API_URL}/blocks/`, {
    page: page,
    ...params,
  }).then(async (response) => {
    const data: any = await response.json();

    const results = [];

    for (let result of data["results"]) {
      results.push(new Block(result));
    }

    return new PaginatedResponse<Block>(
      data["count"],
      data["page"],
      data["num_pages"],
      results
    );
  });

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
  return fetch("https://ipapi.co/json/")
    .then(async (data) => {
      const json = await data.json();
      return json["ip"];
    })
    .catch((e) => {
      return fetch("https://api.ipify.org/")
        .then(async (data) => {
          return await data.text();
        })
        .catch((e) => {
          console.log("ERROR", e);
          return "1.1.1.1";
        });
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
      "%40"
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
