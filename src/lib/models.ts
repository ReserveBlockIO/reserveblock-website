import { Currency, stringToCurrency } from "./enums";
import * as timeago from 'timeago.js';

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
  completeDate?: Date;
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
    this.completeDate = json["CompleteDate"]
      ? new Date(json["CompleteDate"].split(".")[0] + ".000Z")
      : undefined;
    this.insertDate = new Date(json["InsertDate"]);
    this.confirmations = json["Confirmations"];
    this.currency = stringToCurrency(json["AssetName"]);
    this.isProcessed = json["IsProcessed"];
    this.timeReceived = new Date(json["TimeReceived"] * 1000);
    this.priceUsd = json["PriceUSD"];
    this.currentPriceUsd = json["CurrentPriceInUSD"];
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
    this.diamondRemaining = json["TotalDiamondNodesLeft"];
    this.carbonRemaining = json["TotalCarbonNodesLeft"];
    this.totalRemaining = json["TotalNodesLeft"];
  }

  get totalLabel(): string {
    return `${this.total - this.totalRemaining}`;
  }

  get carbonLabel(): string {
    return `${this.carbon - this.carbonRemaining}`;
  }

  get diamondLabel(): string {
    return `${this.diamond - this.diamondRemaining}`;
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
export class Block {
  height: number;
  hash: string;
  validator: string;
  totalAmount: number;
  totalReward: number;
  numberOfTransactions: number;
  size: number;
  craftTime: number;
  transactions: Transaction[] = [];
  prevHash: string;
  chainRefId: string;
  merkleRoot: string;
  stateRoot: string;
  validatorSignature: string;
  // nextValidators: string[];
  totalValidators: number;
  version: number;

  dateCrafted: Date;

  constructor(d: any) {
    this.height = d["height"];

    this.hash = d["hash"];
    this.prevHash = d["previous_hash"];
    this.validator = d["validator_address"];
    this.validatorSignature = d["validator_signature"];
    this.chainRefId = d["chain_ref_id"];
    this.merkleRoot = d["merkle_root"];
    this.stateRoot = d["state_root"];
    this.totalReward = d["total_reward"];
    this.totalAmount = d["total_amount"];
    this.totalValidators = d["total_validators"];
    this.version = d["version"];
    this.size = d["size"];
    this.craftTime = d["craft_time"];
    this.dateCrafted = new Date(d["date_crafted"]);

    const transactions = d["transactions"];
    this.numberOfTransactions = transactions?.length || 0;

    if (transactions) {
      for (let tx of transactions) {
        this.transactions.push(new Transaction(tx));
      }

    }


  }

  hashPreview(n: number = 16): string {
    const amount = Math.floor(n / 2);
    return `${this.hash.slice(0, amount)}...${this.hash.slice(-amount)}`;
  }

  validatorPreview(n: number = 16): string {
    const amount = Math.floor(n / 2);
    return `${this.validator.slice(0, amount)}...${this.validator.slice(
      -amount
    )}`;
  }


  get timestampLabel(): string {
    // if (isToday(this.dateCrafted)) {
    //   return this.dateCrafted.toLocaleTimeString();
    // }
    return `${this.dateCrafted.toLocaleDateString()} ${this.dateCrafted.toLocaleTimeString()}`;
  }

  get sizeLabel(): string {
    let units = ["B", "KB", "MB", "GB", "TB", "PB"];

    let i = 0;
  
    for (i; this.size > 1024; i++) {
      this.size /= 1024;
    }
  
    return parseFloat(this.size.toFixed(2)) + " " + units[i];

  }



  get craftTimeAccent(): string {
    if (this.craftTime < 1000) {
      return "success";
    }
    if (this.craftTime < 2000) {
      return "warning";
    }

    return "danger";
  }

  get timeAgoLabel() {
    return timeago.format(this.dateCrafted);
  }
}
export class Transaction {
  hash: string;
  toAddress: string;
  fromAddress: string;
  amount: number;
  nounce: number;
  fee: number;
  dateCrafted: Date;
  nftData?: any;
  signature?: any;
  height: number;
  transactionType: number;

  constructor(d: any) {
    this.hash = d["hash"];
    this.toAddress = d["to_address"];
    this.fromAddress = d["from_address"];
    this.amount = d["total_amount"];
    this.nounce = d["nounce"];
    this.fee = d["total_fee"];
    this.dateCrafted = new Date(d["date_crafted"]);
    this.nftData = d["data"];
    this.signature = d["signature"];
    this.height = d["height"];
    this.transactionType = d["transaction_type"] ?? d["type"] ?? 0;
  }
}
export class PaginatedResponse<T> {
  count: number;
  page: number;
  numPages: number;
  results: T[];

  constructor(count: number, page: number, numPages: number, results: T[]) {
    this.count = count;
    this.page = page;
    this.numPages = numPages;
    this.results = results;
  }
}
