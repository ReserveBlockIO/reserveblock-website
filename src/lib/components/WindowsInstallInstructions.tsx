import Vimeo from "@u-wave/react-vimeo";
import { useState } from "react";
import styled from "styled-components";
import { ThemeColors } from "../theme";

const Instructions = styled.div`
  ol {
    li {
      font-size: 17px;
      margin-bottom: 10px;
      a {
        color: ${ThemeColors.bright};
      }
    }
  }
`;

interface Props {
  withVideos?: boolean;
}

export const WindowsInstallInstructions = (props: Props) => {
  const [showingWinVideo, setShowingWinVideo] = useState(false);
  const [showingMacVideo, setShowingMacVideo] = useState(false);
  return (
    <Instructions>
      <ol>
        <li>
          In order to generate an address, you must have Windows installed on
          your computer. If you are a Mac user you can use{" "}
          <a
            href="https://support.apple.com/en-ca/boot-camp"
            target="_blank"
            rel="noreferrer"
          >
            Bootcamp
          </a>{" "}
          or{" "}
          <a href="https://www.parallels.com/" target="_blank" rel="noreferrer">
            Parallels
          </a>{" "}
          or{" "}
          <a
            href="https://www.codeweavers.com/crossover"
            target="_blank"
            rel="noreferrer"
          >
            Crossover
          </a>
          . Linux users can download the{" "}
          <a
            href="https://github.com/ReserveBlockIO/Core-CLI/releases/tag/pre2"
            target="_blank"
            rel="noreferrer"
          >
            Core CLI
          </a>{" "}
          version instead.
        </li>
        <li>
          Download the zip file at this{" "}
          <a
            href="https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/download/pre2/rbx-winwallet-win-x64.zip"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          .
        </li>
        <li>Right click and choose “Extract All” all then confirm.</li>
        <li>Open the folder that was generated.</li>
        <li>
          Right-click on “ReserveBlockWinWallet” and choose “Run as
          Administrator”
        </li>
        <li>
          If prompted with a warning from Windows Defender, click “More Info”
          and then click “Run Anyway”
        </li>
        <li>Once the app opens, click on the menu item labeled “Receive”</li>
        <li>Click the button that says “New Address”</li>
        <li>Click “Copy Address”</li>
        <li>IMPORTANT: this will generate your PUBLIC and PRIVATE key</li>
        <li>
          Open notepad (or the text editor of your choice) and paste in the
          private key that was automatically copied to your clipboard. Save this
          somewhere safe and do NOT share with anyone.
        </li>
        <li>
          Next, click the “Copy Address” button. This will copy your PUBLIC key
          (RBX Wallet Address) to your clipboard which is safe to share as
          needed.
        </li>
        <li>
          {" "}
          Paste that address into the web form above (RBX Wallet Address) and
          then click “Continue”.
        </li>
      </ol>

      <h5>Edge Cases</h5>
      <p>
        <small>
          If you are running a very high resolution monitor, the app may not
          scale properly. You can fix this by changing your output resolution to
          1920x1080 (or something close to that) and make sure your zoom is set
          to 100%) Once you’ve generated your address, you can safely change
          back as we will have this issue patched soon.
        </small>
      </p>

      {props.withVideos ? (
        <div>
          <div className="py-2">
            <button
              className="btn btn-light w-100"
              onClick={() => setShowingWinVideo(!showingWinVideo)}
            >
              Video Tutorial [WINDOWS]
            </button>
          </div>
          {showingWinVideo ? (
            <div className="w-100 py-2">
              <Vimeo video="680151855" responsive />
            </div>
          ) : null}
          <div className="py-2">
            <button
              className="btn btn-light w-100"
              onClick={() => setShowingMacVideo(!showingMacVideo)}
            >
              Video Tutorial [MAC]
            </button>
          </div>

          {showingMacVideo ? (
            <div className="w-100 py-2">
              <Vimeo video="680155835" responsive />
            </div>
          ) : null}
        </div>
      ) : null}
    </Instructions>
  );
};
