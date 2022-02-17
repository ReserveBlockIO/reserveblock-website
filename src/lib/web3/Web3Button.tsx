import WalletLink from "walletlink";
import Web3 from "web3";

const APP_NAME = "My Awesome App";
const APP_LOGO_URL = "https://example.com/logo.png";
const DEFAULT_ETH_JSONRPC_URL =
  "https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>";
const DEFAULT_CHAIN_ID = 1;

export const walletLink = new WalletLink({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: true,
});

export const ethereum = walletLink.makeWeb3Provider(
  DEFAULT_ETH_JSONRPC_URL,
  DEFAULT_CHAIN_ID
);

export const web3 = new Web3(ethereum as any);

export const Web3Button = () => {
  const handleClick = () => {
    ethereum.enable().then((accounts: string[]) => {
      console.log(`User's address is ${accounts[0]}`);
      web3.eth.defaultAccount = accounts[0];
    });
  };

  return <button onClick={() => handleClick()}>Go</button>;
};
