import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vimeo from "@u-wave/react-vimeo";
import { useState } from "react";
import styled from "styled-components";
import { githubFiles } from "../../github-files";
import {
  SectionContent,
  SectionHeading2,
  SectionHeading3,
  SectionHeading4,
} from "../styles/styled";
import { ThemeColors } from "../theme";
import { FaqComponent } from "./common/FaqComponent";
import { Download } from "./Home/Download";
import { WindowsInstallInstructions } from "./WindowsInstallInstructions";

const Content = styled.div`
  a {
    color: ${ThemeColors.bright};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    strong {
      color: ${ThemeColors.bright};
    }
  }

  ul,
  ol {
    li {
      line-height: 24px;
      font-size: 20px;
      margin-bottom: 8px;
    }
  }
`;

export const WalletInstructions = () => {
  //   const [faqVisible, setFaqVisible] = useState(false);

  return (
    <Content>
      <SectionHeading2>
        RBX Wallet Install and Operating Instructions
      </SectionHeading2>
      <SectionHeading3>Downloading the RBX Wallet:</SectionHeading3>

      <SectionContent>
        <p>
          The RBX Wallet you will be downloading is a TESTNET wallet. The
          design, functions, &amp; features are for <strong>Testnet</strong>{" "}
          only and will be updated to the full functioning wallet with all
          network features unlocked by Mainnet. As with any wallet, please make
          sure to{" "}
          <strong>keep your private key in a safe place with backup</strong> as
          your wallet will contain your RBX balance at all times!
        </p>
        <p className="mb-0">
          Regardless of events that might occur during the Testnet, you can be
          rest assured that your RBX coin associated with your Masternode(s)
          purchases on the presale will always be guaranteed. Please do NOT
          transfer any coin to any third party and do NOT share your private
          keys with anyone. The Foundation/network will NEVER ask for you to
          transfer or to share your private key period! Should you be asked for
          this please report in the Discord. Again, should you ever need support
          in any way please also direct your questions to the appropriate
          channels in the Discord and a moderator will address them directly.
        </p>
      </SectionContent>
      <SectionContent>
        <SectionHeading4>Step 1: Download Files</SectionHeading4>
        <ul className="mb-0">
          <li>
            To get the wallet, you may click on the ???Download Wallet??? button on
            the presale interface or the ???Core Wallet??? button in the Wallet
            section of the site at any time.
          </li>
        </ul>
        <div className=" py-2">
          <strong>-- OR --</strong>
        </div>
        <ul>
          <li>
            You may also download the wallet from the GitHub release section:{" "}
            <a href={githubFiles.gui.url} target="_blank" rel="noreferrer">
              {githubFiles.gui.url}
            </a>
          </li>
        </ul>
        {/* <p>
          ** NOTE: Wallets will be available for download on the morning of
          Tuesday, Feb 22nd in advance of the sale. Please do not generate an
          address until you are ready to do a transaction on the sale as
          addresses generated will time-out after an hour or so with no
          activity. You will then have to generate a new address should that
          occur for you to complete a transaction.{" "}
        </p> */}
      </SectionContent>
      <SectionContent>
        <SectionHeading4>Step 2: Setup Wallet</SectionHeading4>

        <WindowsInstallInstructions />
      </SectionContent>

      <SectionContent>
        <SectionHeading4>Step 3: Become a Validator</SectionHeading4>

        <ol>
          <li>
            Open your wallet and ensure the block height matches what is on{" "}
            <a href="https://rbx.network" target={"blank"} rel="noreferrer">
              https://rbx.network
            </a>
          </li>
          <li>
            Open up{" "}
            <a href="https://portchecker.co/" target="_blank" rel="noreferrer">
              https://portchecker.co
            </a>{" "}
            and enter 3338 as the port then click Check.
          </li>
          <li>If it says Port 3338 is closed, try the following</li>
          <ol>
            <li>
              Open your windows firewall (from your control panel) and click
              Advanced settings
            </li>
            <li>Select Inbound Rules in the left panel then click New Rule.</li>
            <li>
              Choose Port and click Next then enter 3338 into the specified
              local port field and click Next again.
            </li>
            <li>
              Make sure Allow this connection is selected and click next and
              keep all three checkboxes selected and choose next again.
            </li>
            <li>
              Then give it a friendly name such as ???RBX??? and click Finish.
            </li>
            <li>
              Then go back to the port checker website and test again. If it
              still doesn???t work, double-check to make sure your wallet is open
              and running. If you still have no luck, you may have to configure
              your router settings by setting up port forwarding between port
              3338 to port 3338. All routers are different so you will have to
              consult the manufacturer???s documentation.
            </li>
          </ol>
          <li>
            Once your local block height matches the remote height listed on
            rbx.network, click on the Validate button in your wallet.
          </li>
          <li>
            Ensure that your address is eligible to validate (requires at least
            1000 RBX) and then click Start Validating.{" "}
          </li>
          <li>
            You will be prompted to create a unique name for your masternode.
            Think of this like a username where it can???t be the same as any
            other nodes on the network. Do not use something like ???test123???
          </li>
          <li>
            Then click Ok and you should see shortly that Validating has ???Yes???
            under it. If it doesn???t update to say Yes in about 30 min, try
            closing your wallet and opening it again. Reach out on Discord if
            you are still experiencing an issue. Keep in mind that once you
            enable your address to validate, you need to keep it running at all
            times. If your IP address changes or your computer gets shutdown or
            your wallet is closed, that address will eventually become banned
            from the validator pool. This means you will have to transfer your
            funds to a different wallet and spin up a new validator on a new IP
            address if you want to become a validator again.
          </li>
        </ol>
      </SectionContent>

      {/* 

      <SectionContent>
        <SectionHeading4>Step 2</SectionHeading4>
        <ul>
          <li>
            After downloading the wallet, find the ReserveBlockWallet
            application and double-click it. The same will apply should you
            choose the ReserveBlockCore application.
          </li>
          <li>
            The ReserveBlock Wallet GUI is a ???point and click application??? and
            will appear as the following image(s) when opened:
          </li>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="/img/wallet/wallet-screen-1.png"
                className="w-100"
                alt="Wallet GUI"
              />
            </div>
          </div>

          <div className="py-2"></div>
          <li>
            The ReserveBlock Core CLI Wallet will appear as the following when
            opened:
          </li>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="/img/wallet/wallet-cli-1.png"
                className="w-100"
                alt="Wallet CLI"
              />
            </div>
          </div>
        </ul>

        <p>** Note:</p>
        <ol style={{ listStyleType: "lower-alpha" }}>
          <li>
            For Mac users only: You can download either wallet. For the CLI
            wallet, you will not have to do anything after downloading except
            double-click to open. For the GUI ???point and click??? wallet, you will
            need to run Windows for Mac in the background of your computer.
            Should you not have Windows for Mac, you can download it for free.
            You do NOT have to purchase a license to run the wallet, you simply
            download Windows for Mac and make sure it's running before you open
            the wallet application if you choose the GUI wallet with the point
            and click functions. There will be a full Mac version of the wallet
            released during the Mainnet launch.
          </li>
         
        </ol>
      </SectionContent>
      <SectionContent>
        <SectionHeading4>Step 3</SectionHeading4>
        <p>
          Once your wallet is open and running you will need to generate your
          address(es) to send funds to etc. You can generate an address(es) from
          the receiving screen on your wallet. Again, once you generate an
          address(es) you will have approximately one hour to complete a
          transaction before that address(es) will time out. Should this occur,
          you may generate another address(es) at any time.
        </p>
      </SectionContent> */}

      <SectionHeading2>
        Video Instructions for Setting Up & Operating Masternode(s):
      </SectionHeading2>

      <div className="row">
        {/* <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Windows</SectionHeading4>
            <Vimeo video={"680151855"} responsive />
          </SectionContent>
        </div>
        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Mac</SectionHeading4>
            <Vimeo video="680155835" responsive />
          </SectionContent>
        </div>

        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>CLI Intel Mac</SectionHeading4>
            <Vimeo video="681049804" responsive />
          </SectionContent>
        </div>
        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Updating Wallet GUI</SectionHeading4>
            <Vimeo video="681577308" responsive />
          </SectionContent>
        </div> */}

        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Setting up Remote VPS</SectionHeading4>
            <Vimeo video="682012029" responsive />
          </SectionContent>
        </div>

        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Installing Wallet & Validating</SectionHeading4>
            <Vimeo video="684426732" responsive />
          </SectionContent>
        </div>
      </div>

      <div className="pt-5">
        <SectionHeading2>
          FAQs for Wallets and Nodes ??? Operating:
        </SectionHeading2>

        <FaqComponent wallet></FaqComponent>
      </div>
    </Content>
  );
};
