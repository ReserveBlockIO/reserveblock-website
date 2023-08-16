import { SocialUrls } from "../../data/menus";
import { SectionContent, SectionHeading3 } from "../../styles/styled";

export const FoundationComponent = () => {
  return (
    <div>
      <SectionHeading3>About the ReserveBlock Builders</SectionHeading3>
      <SectionContent>
        <p>
          The RBX network has been created and developed as the result of a
          collective of founding validators, each with vast expertise in media,
          entertainment, technology, sports, hospitality, banking and finance.
          Led by The Reserve Label, Texoware, and The Young Astronauts
          technology group (
          <a
            href="https://thereservelabel.com"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            thereservelabel.com
          </a>
          ), as the initial founding & development validators, and has
          been completely self-funded devoid of any centralized control
          whatsoever ensuring the most ideal decentralized NFT Layer 1
          ecosystem.
        </p>
        <p>
          The founding validators have produced and created, through media and
          technology solutions, a number of high-profile projects & platforms
          across multiple mediums. Prior foundation validators projects include,
          but are not limited to, large scale film, television & digital studio
          launches, technology solutions and brand campaigns for and in
          collaboration with{" "}
          <strong>
            Legendary Pictures, Bandito Brothers, Act of Valor, Hot Wheels, The
            Concours Club, CBS SEAL Team, The United States Navy, Ford, Hummer,
            BMW, Nike, Apple, Beats, Live Nation, Pepsi, Kodak, Major League
            Baseball, NFL, NBA, Amazon, Viacom, Universal, Sony, Intel and
            Google.
          </strong>{" "}
          Additional founding validators have held previous positions at Amazon
          and Citigroup, as well as various sports and media agencies.
        </p>

        <p>
          The Founding Validators and Developers have now released ALL governance of the network to the Masternode community through on-chain voting in the core wallet upon exiting beta and ALL Validators now control all decisions and / or improvements independently of any third-party or authority. Requests and support can be made directly through the RBX community channels on{" "}
          <a
            href={SocialUrls.discord}
            className="text-light"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>.
        </p>
      </SectionContent>
      {/* <div className="text-center">
        <SectionHeading4>For Further Inquiries:</SectionHeading4>
        <p>
          Website:{" "}
          <a href="https://reserveblock.io" className="text-light">
            reserveblock.io
          </a>
          <br />
          Discord:{" "}
          <a
            href="https://discord.gg/PnS2HRETDh"
            className="text-light"
            target="_blank"
            rel="noreferrer"
          >
            discord.gg/PnS2HRETDh
          </a>{" "}
          <br />
          Twitter:{" "}
          <a
            href="https://twitter.com/ReserveBlockIO"
            className="text-light"
            target="_blank"
            rel="noreferrer"
          >
            twitter.com/ReserveBlockIO
          </a>{" "}
          <br />
          Instagram:{" "}
          <a
            href="https://instagram.com/reserveblockio"
            className="text-light"
            target="_blank"
            rel="noreferrer"
          >
            instagram.com/reserveblockio
          </a>{" "}
          <br />
          Github:{" "}
          <a
            href="https://github.com/ReserveBlockIO"
            className="text-light"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ReserveBlockIO
          </a>
        </p>
      </div> */}
    </div>
  );
};
