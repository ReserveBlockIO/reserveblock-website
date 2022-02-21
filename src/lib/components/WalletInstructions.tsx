import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import {
  SectionContent,
  SectionHeading2,
  SectionHeading3,
  SectionHeading4,
} from "../styles/styled";
import { ThemeColors } from "../theme";
import { FaqComponent } from "./common/FaqComponent";
import { Download } from "./Home/Download";

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
        <SectionHeading4>Step 1</SectionHeading4>
        <ul className="mb-0">
          <li>
            To get the wallet, you may click on the “Download Wallet” button on
            the presale interface or the “Core Wallet” button in the Wallet
            section of the site at any time.
          </li>
        </ul>
        <div className=" py-2">
          <strong>-- OR --</strong>
        </div>
        <ul>
          <li>
            You may also download the wallet from the GitHub release section:{" "}
            <a
              href="https://github.com/ReserveBlockIO/Core-CLI/releases"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/ReserveBlockIO/Core-CLI/releases
            </a>
          </li>
        </ul>
        <p>
          ** NOTE: Wallets will be available for download on the morning of
          Tuesday, Feb 22nd in advance of the sale. Please do not generate an
          address until you are ready to do a transaction on the sale as
          addresses generated will time-out after an hour or so with no
          activity. You will then have to generate a new address should that
          occur for you to complete a transaction.{" "}
        </p>
      </SectionContent>
      <SectionContent>
        <SectionHeading4>Step 2</SectionHeading4>
        <ul>
          <li>
            After downloading the wallet, find the ReserveBlockWallet
            application and double-click it. The same will apply should you
            choose the ReserveBlockCore application.
          </li>
          <li>
            The ReserveBlock Wallet GUI is a “point and click application” and
            will appear as the following image(s) when opened:
          </li>
          <img
            src="https://via.placeholder.com/800x300.jpg"
            className="w-100"
          />
          <li>
            The ReserveBlock Core CLI Wallet will appear as the following when
            opened:
          </li>
          <img
            src="https://via.placeholder.com/800x300.jpg"
            className="w-100"
          />
        </ul>

        <p>** Note:</p>
        <ol style={{ listStyleType: "lower-alpha" }}>
          <li>
            For Mac users only: You can download either wallet. For the CLI
            wallet, you will not have to do anything after downloading except
            double-click to open. For the GUI “point and click” wallet, you will
            need to run Windows for Mac in the background of your computer.
            Should you not have Windows for Mac, you can download it for free.
            You do NOT have to purchase a license to run the wallet, you simply
            download Windows for Mac and make sure it's running before you open
            the wallet application if you choose the GUI wallet with the point
            and click functions. There will be a full Mac version of the wallet
            released during the Mainnet launch.
          </li>
          <li>
            Both Mac & Windows users: Will need to make sure they open port
            [3338] in their Firewall before running the wallet. This can be done
            in the settings in your router / modem and you will want to set the
            DHCP to this port and assign a static IP to your device. Some
            devices will automatically detect this however it is advised to
            check this before running the wallet. This is also covered in the
            video.
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
      </SectionContent>

      <SectionHeading2>
        Video Instructions for Download & Setting up Wallet:
      </SectionHeading2>

      <div className="row">
        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Windows</SectionHeading4>
            <img
              src="https://via.placeholder.com/1600x900.jpg"
              className="w-100"
            />
          </SectionContent>
        </div>
        <div className="col-12 col-md-6">
          <SectionContent>
            <SectionHeading4>Mac</SectionHeading4>
            <img
              src="https://via.placeholder.com/1600x900.jpg"
              className="w-100"
            />
          </SectionContent>
        </div>
      </div>

      <div className="pt-5">
        <SectionHeading2>
          FAQs for Wallets and Nodes – Operating:
        </SectionHeading2>
        <p
          className="mb-0"
          style={{ fontWeight: "bold", fontSize: 24, lineHeight: 1.4 }}
        >
          YOU WILL NOT BE ABLE TO TURN NODES ON UNTIL FEBRUARY 27th @ 6pm!!
          <br />
          PLEASE DO NOT ATTEMPT BEFORE HAND.
        </p>
        <FaqComponent wallet></FaqComponent>
      </div>
    </Content>
  );
};
