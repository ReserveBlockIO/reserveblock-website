# Full Tutorial

There is an companion video here that covers this topic in full if you prefer to learn through a video.

## Setup VPS

First we're going to want to setup a VPS (Virtual Private Server) in order to have a place to run our wallet persistantly. A VPS is essentially a computer running somewhere else in the world that you can remote control from your personal machine. When choosing a VPS provider, please ensure that they offer a static IP address because once you begin validating your IP address must remain constant.

For ease of use, we are recommending [iportal.host](https://iportal.host/) as a provider but feel free to use another option if you prefer.

### iPortal Account Setup

- Go to [https://iportal.host/](https://iportal.host/)
- Choose US Windows VPS (or another country of your choice - just make sure it's **Windows**)
- Choose the **Wowbox** and click **Order Now**. Note, you can probably get away with the **Mediumbox** but we have not tested this one in full.
- Provide a root password in the password field
- Choose **Windows Server 2016**. Note: We will actually be provisioning a Windows 2019 server but choose this option at this stage.
- Click **Continue**
- Fill out your billing details on the following page. You can pay via credit card, paypal or BTC.

### iPortal VPS Provision

- After completing the checkout, you will receive multiple emails from iportal. Look for the one with a subject of **Your Windows VPS Information**.
- Within that email, you will see a control panel link as well as username and password. Click that link and input the username and password respectively.
- On the Hosting Spaces section, click **HyperV** under VPS and then click **Create VPS**
- Check the box that says **Generate hostname automatically**.
- In the **Operating system** dropdown, choose Windows Server **2019**.
- Create a secure password - use your password manager if you have one!
- Click **Next**
- On the Configration screen, you can leave everything in it's default state and click **Next**.
- On external network, ensure that **Randomly select IP address** is selected and then click **Next**.
- Review the summary and make sure that **Windows 2019** is selected and click **Finish**.
- Wait on the following screen for a couple of minutes until it redirects you to the detail page once it's completed setting up.
- Click on the **Network** tab and look for your **IP Address**. Copy that somewhere safe for future reference. This will be in the lower left corner above the blue Add IP button.
- Note, if you have misplaced your VPS password you can do a password reset under the **Configuration** tab.

### Connecting to your VPS

#### Mac

- Open up your **App Store** app on your mac and search for **Microsoft Remote Desktop**
- Click **Install** and once it finishes, click **Open**
- Click the plus button in the menu and choose **Add PC**
- Under PC name, paste in the IP address from the previous step
- Under User Account, choose **Add User Account** and then use **Administrator** as the username and the password you created in the previous step in the password field then click **Add**.
- Click **Add** again
- Then, double click on the new PC you created. This will load up the remote desktop. If there is an account error, double check the username (Administrator) and password is correct.

#### Windows

- Click on your start menu and start typing **Remote Desktop**
- Open the Remote Desktop App
- Enter the IP address you copied in the previous step
- When prompted, enter "Administrator" as the username and the password from the previous step into the password field

#### After connecting

- Windows should boot up. Please open your file explorer, right click on **This PC**, go to properties, and double check it says Windows Server **2019**.

## Setting up your RBX Wallet

Now that we have our VPS setup, we can install the wallet software. For the remainder of this tutorial, you will need to follow along within your remote desktop connect of your VPS (not your local computer directly).

### Download and Run wallet software

- Go to this [Github link](https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/tag/pre5) and download **rbx-winwallet-win-x64.zip**
- Once downloaded, right click on the zip file and choose **Extract All**
- The default settings are fine, just make sure the checkbox is checked so the files are revealed once extracted
- Find a safe place in your file system (ie your "Documents" folder) and create a new folder called "RBX"
- Drag the win-x64 folder into this folder
- Open double click on the win-x64 folder and then find ReserveWinWallet - right click and choose Run as Administrator
- If prompted by your Windows Defender, click **More Info** and then click **Run Anyways**

### Port Settings

To be a validating, port `3338` needs to be open for incoming connections so that other nodes on the network can communicate with your's.

- Open up [https://portchecker.co](https://portchecker.co/) and enter `3338` as the port then click Check.
- If it says Port `3338` is closed, try the following

0. Ensure your wallet is open and running on your VPS
1. Open your windows firewall (from your control panel) and click Advanced settings
2. Select Inbound Rules in the left panel then click New Rule.
3. Choose Port and click Next then enter `3338` into the specified local port field and click Next again.
4. Make sure Allow this connection is selected and click next and keep all three checkboxes selected and choose next again.
5. Then give it a friendly name such as “RBX” and click Finish.
6. Then go back to the port checker website and test again. If it still doesn’t work, double-check to make sure your wallet is open and running. If you still have no luck, you may have to configure your router settings by setting up port forwarding between port `3338` to port `3338`. All routers are different so you will have to consult the manufacturer’s documentation.

### Block Height

Before you can begin validating, you need to ensure your block height matches the global block height.

You can check the current block height by going to [https://rbx.network/](rbx.network) and seeing what the most recent block's height is.

This process can take a couple hours from a fresh install. As long as you are seeing it climing, it will eventually sync in full.

After a couple of minutes you should see the blocks starting to populate. If not, try restarting your windows within your VPS and then come back and restart the wallet program. If it still says -1 after a few minutes, reach out on Discord for help.

## Generating/Importing your wallet address

- Click on **Receive** and then click on **New Address**
- Your new private and public key will be displayed
- Once you close the dialog, your private key will be copied to your clipboard.
- Open up notepad (or any text editting program) and paste it there.
- Be sure to back this up in a secure/private place. **If you lose your private key there is no way to recover it**
- We recommend using a password manager, or saving it to an encyrpted USB key, or even printing it off and keeping it somewhere safe. It is recommended you do at least two of these things.

### Importing a Private Key

- If you already have a private key, you can choose **Import Private Key** instead in the Receive screen and paste it in there.

## Validating

Double check the following:

- block height has reached the global block height as per [https://rbx.network/](rbx.network)
- port `3338` is open for incoming connections (see instructions above)
- You have an address (private/public key) created / imported
- You have at least 1000 RBX in the wallet (the minium requirement to be a validator in the proof of stake model)

If all is good, continue with:

- Click the **Validator** tab
- Ensure the correct account is selected and that you are eligable for validating
- Click **Start Validating**
- Give your node a unique name - think of this like a username for your node
- Click **Ok**
- If an error shows up, it may say that your node name is not unique so try something else.
