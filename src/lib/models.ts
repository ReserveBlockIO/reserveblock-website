import { Currency, stringToCurrency } from "./enums";

export class PriceDetail {
  amountOwed: number;
  assetName: string;
  assetPrice: number;
  nodeAmount: number;
  rbxAmount: number;
  rbxPrice: number;
  usdAmount: number;
  success: boolean;

  constructor(json: any) {
    this.amountOwed = json["AmountOwed"];
    this.assetName = json["AssetName"];
    this.assetPrice = json["AssetPrice"];
    this.nodeAmount = json["NodeAmount"];
    this.rbxAmount = json["RBXAmount"];
    this.rbxPrice = json["RBXPrice"];
    this.usdAmount = json["USDAmount"];
    this.success = json["Success"];
  }

  get assetNameLabel() {
    return this.assetName.toUpperCase();
  }
}

export class CheckoutDetails {
  address: string;
  amountOwed: number;
  asset: string;
  success: boolean;

  constructor(json: any) {
    this.address = json["Address"];
    this.amountOwed = json["AmountOwed"];
    this.asset = json["Asset"];
    this.success = json["Success"];
  }
}

export class TransactionDetails {
  id: string;
  active: boolean;
  success: boolean;
  amount: number;
  completeDate: Date;
  insertDate: Date;
  confirmations: number;
  currency: Currency;
  isProcessed: boolean;
  timeReceived: Date;
  priceUsd: number;
  currentPriceUsd: number;
  constructor(json: any) {
    this.id = json["UniqueIdentifier"];
    this.active = json["Active"];
    this.success = json["Success"];
    this.amount = json["Amount"];
    this.completeDate = new Date(json["CompleteDate"]);
    this.insertDate = new Date(json["InsertDate"]);
    this.confirmations = json["Confirmations"];
    this.currency = stringToCurrency(json["AssetName"]);
    this.isProcessed = json["IsProcessed"];
    this.timeReceived = new Date(json["TimeReceived"] * 1000);
    this.priceUsd = json["PriceUSD"];
    this.currentPriceUsd = json["CurrentPriceInUSD"];
  }

  get stateLabel(): string {
    if (this.active) {
      return "Active";
    }

    if (!this.isProcessed) {
      return "Pending Processing...";
    }

    return "Pending...";
  }

  get confirmationsRequired(): number {
    switch (this.currency) {
      case Currency.Btc:
        return 6;
      case Currency.Eth:
        return 20;
      default:
      case Currency.Ltc:
        return 12;
    }
  }

  get receivedDateLabel(): string {
    if (!this.timeReceived) return "-";
    return `${this.timeReceived.toLocaleDateString()} ${this.timeReceived.toLocaleTimeString()}`;
  }

  get insertDateLabel(): string {
    if (!this.insertDate) return "-";
    return `${this.insertDate.toLocaleDateString()} ${this.insertDate.toLocaleTimeString()}`;
  }

  get completedDateLabel(): string {
    if (!this.completeDate) return "-";
    return `${this.completeDate.toLocaleDateString()} ${this.completeDate.toLocaleTimeString()}`;
  }

  get shouldPoll(): boolean {
    if (this.confirmations >= this.confirmationsRequired) {
      return false;
    }

    return true;
  }
}

export class NodeInfo {
  success: boolean;
  total: number;
  diamond: number;
  carbon: number;
  diamondRemaining: number;
  carbonRemaining: number;
  totalRemaining: number;

  constructor(json: any) {
    this.success = json["Success"];
    this.total = json["NodeTotal"];
    this.diamond = json["DiamondNodeTotal"];
    this.carbon = json["CarbonNodeTotal"];
    this.diamondRemaining = json["TotalDiamonNodesLeft"];
    this.carbonRemaining = json["TotalCarbonNodesLeft"];
    this.totalRemaining = json["TotalNodesLeft"];
  }

  get totalLabel(): string {
    return `${this.totalRemaining} / ${this.total}`;
  }

  get carbonLabel(): string {
    return `${this.carbonRemaining} / ${this.carbon}`;
  }

  get diamondLabel(): string {
    return `${this.diamondRemaining} / ${this.diamond}`;
  }
}

export class PriceDetailFromUsd {
  success: boolean;
  usdAmount: number;
  totalNodesPossible: number;
  ethAmount: number;
  btcAmount: number;
  ltcAmount: number;

  constructor(json: any) {
    this.success = json["Success"];
    this.usdAmount = json["USDAmount"];
    this.totalNodesPossible = json["TotalNodesPossible"];
    this.ethAmount = json["ETHAmount"];
    this.btcAmount = json["BTCAmount"];
    this.ltcAmount = json["LTCAmount"];
  }
}
