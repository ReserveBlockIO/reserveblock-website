import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vimeo from "@u-wave/react-vimeo";
import { useEffect, useState } from "react";
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
  img {
    width: 50%;
    min-width: 300px;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
  }
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

export const NewWalletInstructions = () => {
  //   const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    var images = document.querySelectorAll(".container img");
    console.log(images);
    for (var img of images as any) {
      img.addEventListener("click", (event: any) => {
        // console.log(event.target);
        window.open(event.target.src);
      });
    }
  }, []);

  return (
    <Content>
      <SectionContent>
        <SectionHeading2>New RBX Wallets</SectionHeading2>
        <p>
          We have some new GUIs. Please watch the following video for your
          preferred platform that will show you how to set it up and give you a
          tour of what's new!
        </p>
        <div className="row">
          <div className="col-12 col-md-6">
            <SectionHeading3>Windows</SectionHeading3>
            <Vimeo video="688597304"></Vimeo>
          </div>

          <div className="col-12 col-md-6">
            <SectionHeading3>Mac</SectionHeading3>
            <Vimeo video="688592697"></Vimeo>
          </div>
        </div>
      </SectionContent>
      <SectionContent>
        <SectionHeading2>VPS &amp; Operating Instructions</SectionHeading2>

        <p>
          This video here covers this topic in full if you prefer to learn that
          way. Or, you can follow the written instructions below.
        </p>
        <div className="row d-flex">
          <div className="col col-md-6">
            <Vimeo video={685048570} responsive />
          </div>
        </div>
        <p></p>
        <p></p>
        <h2 id="setup-vps">Setup VPS</h2>
        <p>
          First we&#39;re going to want to setup a VPS (Virtual Private Server)
          in order to have a place to run our wallet persistantly. A VPS is
          essentially a computer running somewhere else in the world that you
          can remote control from your personal machine. When choosing a VPS
          provider, please ensure that they offer a static IP address because
          once you begin validating your IP address must remain constant.
        </p>
        <p>
          For ease of use, we are recommending{" "}
          <a target="_blank" rel="noreferrer" href="https://iportal.host/">
            iportal.host
          </a>{" "}
          as a provider but feel free to use another option if you prefer.
        </p>
        <h3 id="iportal-account-setup">iPortal Account Setup</h3>
        <ul>
          <li>
            Go to{" "}
            <a target="_blank" rel="noreferrer" href="https://iportal.host/">
              iportal.host
            </a>
          </li>
          <li>
            Choose US Windows VPS (or another country of your choice - just make
            sure it&#39;s <strong>Windows</strong>)
            <br />
            <img src="https://reserveblock.io/img/instructs/1.jpg" alt="img" />
          </li>
          <li>
            Choose the <strong>Wowbox</strong> and click{" "}
            <strong>Order Now</strong>. Note, you can probably get away with the{" "}
            <strong>Mediumbox</strong> but we have not tested this one in full.
            <br />
            <img src="https://reserveblock.io/img/instructs/2.jpg" alt="img" />
          </li>
          <li>Provide a root password in the password field</li>
          <li>
            Choose <strong>Windows Server 2016</strong>. Note: We will actually
            be provisioning a Windows 2019 server but choose this option at this
            stage.
          </li>
          <li>
            Click <strong>Continue</strong>
          </li>
          <li>
            Fill out your billing details on the following page. You can pay via
            credit card, paypal or BTC.
            <br />
            <img src="https://reserveblock.io/img/instructs/3.jpg" alt="img" />
          </li>
        </ul>
        <h3 id="iportal-vps-provision">iPortal VPS Provision</h3>
        <ul>
          <li>
            After completing the checkout, you will receive multiple emails from
            iportal. Look for the one with a subject of{" "}
            <strong>Your Windows VPS Information</strong>.
          </li>
          <li>
            Within that email, you will see a control panel link as well as
            username and password. Click that link and input the username and
            password respectively.
          </li>
          <li>
            On the Hosting Spaces section, click <strong>HyperV</strong> under
            VPS and then click <strong>Create VPS</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/4.jpg" alt="img" />
            <br />
            <img src="https://reserveblock.io/img/instructs/5.jpg" alt="img" />
          </li>
          <li>
            Check the box that says{" "}
            <strong>Generate hostname automatically</strong>.
          </li>
          <li>
            In the <strong>Operating system</strong> dropdown, choose Windows
            Server <strong>2019</strong>.
          </li>
          <li>
            Create a secure password - use your password manager if you have
            one!
          </li>
          <li>
            Click <strong>Next</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/6.jpg" alt="img" />
          </li>
          <li>
            On the Configration screen, you can leave everything in it&#39;s
            default state and click <strong>Next</strong>.
            <br />
            <img src="https://reserveblock.io/img/instructs/7.jpg" alt="img" />
          </li>
          <li>
            On external network, ensure that{" "}
            <strong>Randomly select IP address</strong> is selected and then
            click <strong>Next</strong>.
            <br />
            <img src="https://reserveblock.io/img/instructs/8.jpg" alt="img" />
          </li>
          <li>
            Review the summary and make sure that <strong>Windows 2019</strong>{" "}
            is selected and click <strong>Finish</strong>.
          </li>
          <li>
            Wait on the following screen for a couple of minutes until it
            redirects you to the detail page once it&#39;s completed setting up.
          </li>
          <li>
            Click on the <strong>Network</strong> tab and look for your{" "}
            <strong>IP Address</strong>. Copy that somewhere safe for future
            reference. This will be in the lower left corner above the blue Add
            IP button.
            <br />
            <img src="https://reserveblock.io/img/instructs/9.jpg" alt="img" />
          </li>
          <li>
            Note, if you have misplaced your VPS password you can do a password
            reset under the <strong>Configuration</strong> tab.
          </li>
        </ul>
        <h3 id="connecting-to-your-vps">Connecting to your VPS</h3>
        <h4 id="mac">Mac</h4>
        <ul>
          <li>
            Open up your <strong>App Store</strong> app on your mac and search
            for <strong>Microsoft Remote Desktop</strong>
          </li>
          <li>
            Click <strong>Install</strong> and once it finishes, click{" "}
            <strong>Open</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/10.jpg" alt="img" />
          </li>
          <li>
            Click the plus button in the menu and choose <strong>Add PC</strong>
          </li>
          <li>Under PC name, paste in the IP address from the previous step</li>
          <li>
            Under User Account, choose <strong>Add User Account</strong> and
            then use <strong>Administrator</strong> as the username and the
            password you created in the previous step in the password field then
            click <strong>Add</strong>.
            <br />
            <img src="https://reserveblock.io/img/instructs/11.jpg" alt="img" />
          </li>
          <li>
            Click <strong>Add</strong> again
          </li>
          <li>
            Then, double click on the new PC you created. This will load up the
            remote desktop. If there is an account error, double check the
            username (Administrator) and password is correct.
          </li>
        </ul>
        <h4 id="windows">Windows</h4>
        <ul>
          <li>
            Click on your start menu and start typing{" "}
            <strong>Remote Desktop</strong>
          </li>
          <li>Open the Remote Desktop App</li>
          <li>
            Enter the IP address you copied in the previous step
            <br />
            <img src="https://reserveblock.io/img/instructs/13.jpg" alt="img" />
          </li>
          <li>
            When prompted, enter &quot;Administrator&quot; as the username and
            the password from the previous step into the password field
          </li>
        </ul>
        <h4 id="after-connecting">After connecting</h4>
        <ul>
          <li>
            Windows should boot up. Please open your file explorer, right click
            on <strong>This PC</strong>, go to properties, and double check it
            says Windows Server <strong>2019</strong>.
            <br />
            <img src="https://reserveblock.io/img/instructs/14.jpg" alt="img" />
          </li>
        </ul>
        <h2 id="setting-up-your-rbx-wallet">Setting up your RBX Wallet</h2>
        <p>
          Now that we have our VPS setup, we can install the wallet software.
          For the remainder of this tutorial, you will need to follow along
          within your remote desktop connect of your VPS (not your local
          computer directly).
        </p>
        <h3 id="download-and-run-wallet-software">
          Download and Run wallet software
        </h3>
        <ul>
          <li>
            Go to this{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/tag/pre5"
            >
              Github link
            </a>{" "}
            and download <strong>rbx-winwallet-win-x64.zip</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/16.jpg" alt="img" />
          </li>
          <li>
            Once downloaded, right click on the zip file and choose{" "}
            <strong>Extract All</strong>
          </li>
          <li>
            The default settings are fine, just make sure the checkbox is
            checked so the files are revealed once extracted
            <br />
            <img src="https://reserveblock.io/img/instructs/17.jpg" alt="img" />
          </li>
          <li>
            Find a safe place in your file system (ie your &quot;Documents&quot;
            folder) and create a new folder called &quot;RBX&quot;
          </li>
          <li>
            Drag the win-x64 folder into this folder
            <br />
            <img src="https://reserveblock.io/img/instructs/18.jpg" alt="img" />
          </li>
          <li>
            Open double click on the win-x64 folder and then find
            ReserveWinWallet - right click and choose Run as Administrator
            <br />
            <img src="https://reserveblock.io/img/instructs/19.jpg" alt="img" />
          </li>
          <li>
            If prompted by your Windows Defender, click{" "}
            <strong>More Info</strong> and then click{" "}
            <strong>Run Anyways</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/20.jpg" alt="img" />
          </li>
        </ul>
        <h2 id="port-settings">Port Settings</h2>
        <p>
          To be a validating, port <code>3338</code> needs to be open for
          incoming connections so that other nodes on the network can
          communicate with your&#39;s.
        </p>
        <ul>
          <li>
            Open up{" "}
            <a target="_blank" rel="noreferrer" href="https://portchecker.co/">
              https://portchecker.co
            </a>{" "}
            and enter <code>3338</code> as the port then click Check.
          </li>
          <li>
            <p>
              If it says Port <code>3338</code> is closed, try the following
            </p>
          </li>
          <li>
            <p>Ensure your wallet is open and running on your VPS</p>
          </li>
          <li>
            Open your windows firewall (from your control panel) and click
            Advanced settings
            <br />
            <img src="https://reserveblock.io/img/instructs/22.jpg" alt="img" />
          </li>
          <li>
            Select Inbound Rules in the left panel then click New Rule.
            <br />
            <img src="https://reserveblock.io/img/instructs/23.jpg" alt="img" />
          </li>
          <li>
            Choose Port and click Next then enter <code>3338</code> into the
            specified local port field and click Next again.
            <br />
            <img src="https://reserveblock.io/img/instructs/24.jpg" alt="img" />
            <br />
            <img src="https://reserveblock.io/img/instructs/25.jpg" alt="img" />
          </li>
          <li>
            Make sure Allow this connection is selected and click next and keep
            all three checkboxes selected and choose next again.
          </li>
          <li>
            Then give it a friendly name such as “RBX” and click Finish.
            <br />
            <img src="https://reserveblock.io/img/instructs/26.jpg" alt="img" />
          </li>
          <li>
            Then go back to the port checker website and test again. If it still
            doesn’t work, double-check to make sure your wallet is open and
            running. If you still have no luck, you may have to configure your
            router settings by setting up port forwarding between port{" "}
            <code>3338</code> to port <code>3338</code>. All routers are
            different so you will have to consult the manufacturer’s
            documentation.
            <br />
            <img src="https://reserveblock.io/img/instructs/27.jpg" alt="img" />
          </li>
        </ul>
        <h3 id="block-height">Block Height</h3>
        <p>
          Before you can begin validating, you need to ensure your block height
          matches the global block height. You can check the current block
          height by going to{" "}
          <a target="_blank" rel="noreferrer" href="rbx.network">
            https://rbx.network/
          </a>{" "}
          and seeing what the most recent block&#39;s height is.
          <br />
          <img src="https://reserveblock.io/img/instructs/28.jpg" alt="img" />
        </p>
        <p>
          This process can take a couple hours from a fresh install. As long as
          you are seeing it climing, it will eventually sync in full.
        </p>
        <p>
          After a couple of minutes you should see the blocks starting to
          populate. If not, try restarting your windows within your VPS and then
          come back and restart the wallet program. If it still says -1 after a
          few minutes, reach out on Discord for help.
          <br />
          <img src="https://reserveblock.io/img/instructs/32.jpg" alt="img" />
        </p>
        <h2 id="generating-importing-your-wallet-address">
          Generating/Importing your wallet address
        </h2>
        <ul>
          <li>
            Click on <strong>Receive</strong> and then click on{" "}
            <strong>New Address</strong>
            <br />
            <img src="https://reserveblock.io/img/instructs/29.jpg" alt="img" />
          </li>
          <li>Your new private and public key will be displayed</li>
          <li>
            <p>
              Once you close the dialog, your private key will be copied to your
              clipboard.
              <br />
              <img
                src="https://reserveblock.io/img/instructs/30.jpg"
                alt="img"
              />
            </p>
          </li>
          <li>
            <p>
              Open up notepad (or any text editting program) and paste it there.
            </p>
          </li>
          <li>
            Be sure to back this up in a secure/private place.{" "}
            <strong>
              If you lose your private key there is no way to recover it
            </strong>
          </li>
          <li>
            We recommend using a password manager, or saving it to an encyrpted
            USB key, or even printing it off and keeping it somewhere safe. It
            is recommended you do at least two of these things.
          </li>
        </ul>
        <h3 id="importing-a-private-key">Importing a Private Key</h3>
        <ul>
          <li>
            If you already have a private key, you can choose{" "}
            <strong>Import Private Key</strong> instead in the Receive screen
            and paste it in there.
            <br />
            <img src="https://reserveblock.io/img/instructs/31.jpg" alt="img" />
          </li>
        </ul>

        <h2 id="validating">Validating</h2>
        <p>Double check the following:</p>
        <ul>
          <li>
            block height has reached the global block height as per{" "}
            <a target="_blank" href="https://rbx.network" rel="noreferrer">
              rbx.network
            </a>
          </li>
          <li>
            port <code>3338</code> is open for incoming connections (see
            instructions above)
          </li>
          <li>You have an address (private/public key) created / imported</li>
          <li>
            You have at least 1000 RBX in the wallet (the minium requirement to
            be a validator in the proof of stake model)
          </li>
        </ul>
        <p>If all is good, continue with:</p>
        <ul>
          <li>
            Click the <strong>Validator</strong> tab
          </li>
          <li>
            Ensure the correct account is selected and that you are eligable for
            validating
          </li>
          <li>
            Click <strong>Start Validating</strong>
          </li>
          <li>
            Give your node a unique name - think of this like a username for
            your node
          </li>
          <li>
            Click <strong>Ok</strong>
          </li>
          <li>
            If an error shows up, please record the message and file a bug
            report on our Discord channel.
          </li>
        </ul>
        <p>Thanks for supporting the network!</p>
      </SectionContent>

      {/* <SectionHeading2>
        Video Instructions for Setting Up & Operating Masternode(s):
      </SectionHeading2> */}

      {/* <div className="row">
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
      </div> */}

      <div className="pt-5">
        <SectionHeading2>
          FAQs for Wallets and Nodes – Operating:
        </SectionHeading2>

        <FaqComponent wallet></FaqComponent>
      </div>
    </Content>
  );
};
