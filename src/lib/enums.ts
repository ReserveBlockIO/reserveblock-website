export enum Currency {
  Btc,
  Eth,
  Ltc,
}

export function currencyToString(currency: Currency): string {
  switch (currency) {
    case Currency.Btc:
      return "BTC";
    case Currency.Eth:
      return "ETH";
    case Currency.Ltc:
      return "LTC";
  }
}

export function stringToCurrency(currency: string): Currency {
  switch (currency.toUpperCase()) {
    case "BTC":
      return Currency.Btc;
    case "ETH":
      return Currency.Eth;
    case "LTC":
      return Currency.Ltc;
    default:
      console.warn(`No currency found for string ${currency}`);
      return Currency.Btc;
  }
}
