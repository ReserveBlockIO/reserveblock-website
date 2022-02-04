import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClock,
  faDownload,
  faEnvelope,
  faInfoCircle,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AboutTextComponent } from "../components/Home/AboutTextComponent";
import {
  Section,
  SectionContent,
  SectionHeading1,
  SectionHeading2,
  SectionHeading3,
  SectionHeading4,
} from "../styles/styled";
import { PositionedAsset } from "../components/common/PositionedAsset";
import { Download } from "../components/Home/Download";
import { NodeType } from "../components/Home/NodeType";
import { NextSectionButton } from "../components/common/NextSectionButton";
import { chunkArray } from "../utils";
import { PressList } from "../components/Home/PressList";
import { SocialLinks } from "../components/common/SocialLinks";
import { Footer } from "../components/common/Footer";
import { ThemeColors, ThemeFonts } from "../theme";

interface IIntroVideo {
  ref: React.Ref<HTMLVideoElement>;
}

const IntroVideo = styled.video<IIntroVideo>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const IntroTextContainer = styled.div`
  position: relative;
  text-align: center;

  .democratize {
    font-size: 22px;
    color: ${ThemeColors.bright};
    text-transform: uppercase;
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 52px;
  }
`;

const BottomFade = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 100px;
  background: rgb(3, 23, 69);
  background: linear-gradient(
    180deg,
    rgba(3, 23, 69, 0) 0%,
    rgba(3, 23, 69, 1) 59%
  );
`;

const ContentContainer = styled.div`
  opacity: 0;
  transition: all 1.3s;
  transform: translateY(100px);
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeScreen = () => {
  // const introVideo =
  //   "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/bg-curvedxx.mp4?alt=media";
  const introVideo =
    "https://firebasestorage.googleapis.com/v0/b/rbx-storage.appspot.com/o/rbx-animation-scaled-v5x.mp4?alt=media";
  const [contentVisible, setContentVisible] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current!;

    v.addEventListener("canplay", () => {
      v.play();
    });

    v.addEventListener("timeupdate", (event) => {
      if (!contentVisible) {
        if (event.timeStamp >= 4500) {
          setContentVisible(true);
        }
      }
    });

    v.addEventListener(
      "ended",
      (_) => {
        console.log("ended");
        const videoLoopFrameStart = 5 * 24 + 26;
        const frameRate = 24;
        const videoLoopStart = videoLoopFrameStart / frameRate;

        v.currentTime = videoLoopStart;
        v.play();
      },
      false
    );
  }, []);

  return (
    <div className="screen screen-home">
      <Section fill={true} center={true}>
        <IntroVideo
          ref={videoRef}
          src={introVideo}
          muted={true}
          playsInline={true}
        ></IntroVideo>

        <ContentContainer className={contentVisible ? "visible" : ""}>
          <IntroTextContainer>
            <h2 className="democratize">Democratizing NFTs for Everyone</h2>
            <h3>
              Your Block
              <br />
              Your Data
              <br />
              Your NFT Reserved
            </h3>
            <SectionContent>
              <div className="row align-items-center">
                <div className="col">
                  <SectionHeading4>
                    <strong>Node Presale</strong>
                  </SectionHeading4>
                  <SectionHeading4
                    className="text-center pb-1 mb-0 text-lowercase"
                    style={{ color: ThemeColors.bright }}
                  >
                    12d 3h 5m 12s
                  </SectionHeading4>
                </div>

                <div className="col">
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light btn-lg text-uppercase">
                      Notify&nbsp;me
                    </button>
                    {/* <button className="btn btn-light text-uppercase">
                        Learn&nbsp;More
                      </button> */}
                  </div>
                </div>
              </div>
            </SectionContent>
          </IntroTextContainer>
        </ContentContainer>
        <ContentContainer
          className={contentVisible ? "visible" : ""}
          style={{
            position: "absolute",
            bottom: 80,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <SocialLinks />
        </ContentContainer>
        <BottomFade />
        <NextSectionButton sectionId="learn" />
      </Section>

      <Section fill={true} center={true} id="learn">
        <div>
          <PositionedAsset
            url="/img/decor/globe.png"
            alt="Globe"
            top={0}
            right={0}
            width={600}
          />
          <div className="container">
            <SectionHeading1>Learn</SectionHeading1>
            <SectionHeading2>Stuff to learn about.</SectionHeading2>
            <div className="py-2"></div>

            <SectionContent>
              <div className="row">
                <div className="col-2">
                  <img
                    src="/img/rbx_cube_small.png"
                    alt="cube"
                    className="w-100"
                  />
                </div>
                <div className="col-10">
                  <p>
                    If the past few years have proved anything, it most
                    certainly has resulted in a massive shift in the way we
                    connect, create, collect, interact and trade. Highly
                    different than ever before, with unprecedented velocity, our
                    quest for trustless technologies and tools has far exceeded
                    yesterday’s innovations.
                  </p>
                  <p>
                    Enter blockchain technologies and applications that have
                    propelled, what we know today to be Web3, as a way for us to
                    embrace creativity & independence in a secure, safe and
                    scalable ecosystem that allow for transparent innovation &
                    facilitate decentralized transactions for the adopters who
                    embrace them.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="mb-0">
                    With various blockchain technologies on the rise,
                    applications and marketplaces have effectively removed the
                    traditional high-barriers of entry for creators & traders
                    alike. Through non-fungible tokens (NFTs), creators and
                    collectors have clearly been able to connect & interact with
                    their audiences unlike ever before. An NFT, a unique digital
                    identifier that cannot be copied, is recorded in a
                    blockchain through transactions with smart contracts and
                    cannot be changed or altered once created. In other words,
                    NFTs are immutable and transparent digital certificates that
                    represent an asset and allow us to view their authenticity
                    and history on a blockchains public ledger. Simply, they are
                    tokens that allow us to perfect the ownership rights of
                    digital and physical property & allow us to make these
                    unique items “portable”. The creation and trading of art,
                    collectibles, music, content, games, experiences, physical
                    assets, & real estate, to name a few with many more to come,
                    have eclipsed tens of billions in pure transactional sales
                    volume to date.
                  </p>
                </div>
              </div>
            </SectionContent>
            <div className="py-2"></div>
            {/* <SectionHeading2>Resources</SectionHeading2> */}

            <div className="row my-4">
              <div className="col">
                <Download
                  title="Resource 1"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  labore suscipit ipsa laborum aut magnam provident."
                  url="#"
                />
              </div>
              <div className="col">
                <Download
                  title="Resource 2"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  labore suscipit ipsa laborum aut magnam provident."
                  url="#"
                />
              </div>
              <div className="col">
                <Download
                  title="Resource 3"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  labore suscipit ipsa laborum aut magnam provident."
                  url="#"
                />
              </div>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="nodes" />
      </Section>

      <Section fill={true} center={true} id="masternodes">
        <PositionedAsset
          url="/img/decor/bg_03.png"
          alt="bg"
          bottom={0}
          right={0}
          cover={true}
          opacity={0.5}
        ></PositionedAsset>
        <div className="container">
          <SectionHeading1>Masternodes</SectionHeading1>
          <SectionHeading2>Join the Block.</SectionHeading2>

          <div className="row">
            <div className="col col-7">
              <SectionContent>
                <p className="">
                  To become a Masternode and turn the client on, a user will
                  need to acquire the RBX native currency. A minimum of 1,000
                  RBX coin is required to be staked to the network per node in
                  order for the client to be active. A client is a node that has
                  a RBX core wallet that is tied to a unique address belonging
                  to them with “X” amount of native coin belonging to them and
                  having control over that address.
                </p>

                <p className="">
                  Again, the client simply runs the wallet program in the
                  background of their local device (laptop, desktop,
                  Raspberry-Pi etc. all agnostic to operating system) specific
                  to the provided install and operating instructions and
                  maintain only one node per static IP address. This is in-line
                  with the Nakamoto principles of “one CPU one vote”.
                </p>

                <p className="mb-0">
                  While there is no limit on the amount of nodes that may
                  operate on the network so long as the client has the required
                  native coin or data, there are two classes of Masternodes that
                  are defined and identified with specific NFT badging hard
                  coded to the network which embeds specific utility value in
                  each & limited as follows
                </p>
              </SectionContent>
              <SectionHeading3>Minimum System Requirements</SectionHeading3>
              <SectionContent>
                <p className="py-0">
                  <strong>CPU:</strong> Pentium G Series or recommend i3 or
                  Ryzen3 and Up.
                  <br />
                  Will work with lower processors like a Raspberry-Pi 
                  <br />
                  <strong>RAM:</strong> Recommend 4GB but can run with 2GB 
                  <br />
                  <strong>HDD:</strong> For Masternode min 50GB with room for
                  growth.
                  <br />
                  For DataNode, having at least 500GB of free space is
                  recommended and with room for growth. 
                  <br />
                  <strong>GPU:</strong> Not Needed 
                  <br />
                  <strong>Networking:</strong> Recommend a network speed of 25
                  mbps down if a client is a Masternode and if client is a
                  Datanode recommend 25 mbps down and 25 mbps up.
                </p>
              </SectionContent>
              <SectionHeading3>Become a master node</SectionHeading3>
              <SectionContent inverted={true}>
                <div className="text-center">
                  <SectionHeading4>Node Sale Launching Soon</SectionHeading4>
                  <div className="py-2"></div>
                  <SectionHeading1>02/18/2022</SectionHeading1>
                  <div className="py-2"></div>
                  <button className="btn btn-dark btn-lg text-uppercase">
                    Remind Me
                  </button>
                </div>
              </SectionContent>
            </div>
            <div className="col">
              <NodeType
                title="Diamond Node Founder"
                image="/img/rbx_diamond.png"
                details={[
                  "Limited to 450 Diamond holders.",
                  "Must have 5 or more nodes.",
                  "NFT Badge identifier hard-coded to the network.",
                  "Contains a super vote governance of 1.5 votes per node up to10 nodes, with the remaining nodes held over that eachcontaining 1 vote (If a holder owns 20 nodes, they wouldhave 15 super votes per the first 10 nodes and then haveanother 10 votes per the remaining 10 nodes held for a totalof 25 votes).",
                  "Block rewards per the halving schedule.",
                  "Airdrops and limited NFT rewards.",
                  "Foundation one-year Anniversary limited edition NFT",
                  "NFT badge is immediate tradable, however if sold, allbenefits transfer to the new client when the new clientturns on their respective Masternode. The original founderwill still continue to act as a Masternode so long as theyhave the required amount of RBX staked to the network.",
                ]}
              />

              <NodeType
                title="Carbon Node Founder"
                image="/img/rbx_carbon.png"
                details={[
                  "Limited to 450 Diamond holders.",
                  "Must have 5 or more nodes.",
                  "NFT Badge identifier hard-coded to the network.",
                  "Contains a super vote governance of 1.5 votes per node up to10 nodes, with the remaining nodes held over that eachcontaining 1 vote (If a holder owns 20 nodes, they wouldhave 15 super votes per the first 10 nodes and then haveanother 10 votes per the remaining 10 nodes held for a totalof 25 votes).",
                  "Block rewards per the halving schedule.",
                  "Airdrops and limited NFT rewards.",
                  "Foundation one-year Anniversary limited edition NFT",
                  "NFT badge is immediate tradable, however if sold, allbenefits transfer to the new client when the new clientturns on their respective Masternode. The original founderwill still continue to act as a Masternode so long as theyhave the required amount of RBX staked to the network.",
                ]}
              />
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="wallet" />
      </Section>
      <Section fill={true} center={true} id="wallet">
        <div className="container">
          <SectionHeading1>Wallet</SectionHeading1>
          <SectionHeading2>Lorem Ipsum.</SectionHeading2>
        </div>
        <NextSectionButton sectionId="build" />
      </Section>
      <Section fill={true} center={true} id="build">
        <PositionedAsset
          url="/img/decor/bg_01.png"
          alt="thingy"
          bottom={0}
          left={0}
        />
        <div className="container">
          <SectionHeading1>Build</SectionHeading1>
          <SectionHeading2>Making the doughnuts.</SectionHeading2>
          <SectionContent>
            <SectionHeading4>Lorem:</SectionHeading4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              veritatis doloremque neque vitae, eveniet blanditiis placeat esse
              quisquam consequatur maiores maxime dolorem consectetur laborum!
              Quaerat vero laborum voluptatum eligendi laudantium? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Enim veritatis
              doloremque neque vitae, eveniet blanditiis placeat esse quisquam
              consequatur maiores maxime dolorem consectetur laborum! Quaerat
              vero laborum voluptatum eligendi laudantium?
            </p>
            <p className="mb-0">
              Voluptatum eligendi laudantium? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Enim veritatis doloremque neque
              vitae, eveniet blanditiis placeat esse quisquam consequatur
              maiores maxime dolorem consectetur laborum! Quaerat vero laborum
              voluptatum eligendi.
            </p>

            <div className="mt-4">
              <a href="#" className="btn btn-light btn-lg text-uppercase">
                Start Building
              </a>
              <span className="mx-2"></span>
              <a href="#" className="btn btn-dark btn-lg text-uppercase">
                Learn more
              </a>
            </div>
          </SectionContent>
        </div>
        <NextSectionButton sectionId="network" />
      </Section>

      <Section fill={true} center={true} id="network">
        <div className="container">
          <SectionHeading1>Network</SectionHeading1>
          <SectionHeading2>Lorem Ipsum.</SectionHeading2>
        </div>
        <NextSectionButton sectionId="community" />
      </Section>

      <Section fill={true} center={true} id="community">
        <PositionedAsset
          url="/img/decor/bg_04.png"
          alt="thingy"
          bottom={0}
          right={0}
          opacity={0.4}
        />
        <div className="container">
          <SectionHeading1>Community</SectionHeading1>
          <SectionHeading2>Play along with our friends.</SectionHeading2>

          <div className="row mt-4 d-flex align-items-center">
            <div className="col-4">
              <img src="/img/decor/nodelines.png" className="w-100" />
            </div>
            <div className="col-8">
              <SectionContent>
                <div className="row d-flex align-items-center">
                  <div className="col-2 text-center">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      size="4x"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="col-10">
                    <SectionHeading4>Say Hello</SectionHeading4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis sunt iusto repellat neque. Quod, odio! Eius culpa
                      hic non, ipsam accusamus, minus vitae fuga praesentium
                      quis similique cum labore necessitatibus!{" "}
                      <strong>
                        <a href="#" className="text-light">
                          Join now!
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </SectionContent>
              <SectionContent>
                <div className="row d-flex align-items-center">
                  <div className="col-2 text-center">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="4x"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="col-10">
                    <SectionHeading4>Contrubite</SectionHeading4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis sunt iusto repellat neque. Quod, odio! Eius culpa
                      hic non, ipsam accusamus, minus vitae fuga praesentium
                      quis similique cum labore necessitatibus!{" "}
                      <strong>
                        <a href="#" className="text-light">
                          Learn more!
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </SectionContent>
            </div>
          </div>
        </div>
        <NextSectionButton sectionId="press" />
      </Section>

      <Section fill={true} center={true} id="press">
        <PositionedAsset
          url="/img/decor/bg_02.png"
          alt="thingy"
          bottom={0}
          right={0}
          opacity={0.4}
        />
        <div className="container">
          <SectionHeading1>Press</SectionHeading1>
          <SectionHeading2>As seen in.</SectionHeading2>
          <div className="py-2"></div>

          <PressList />

          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <NextSectionButton sectionId="support" />
      </Section>

      <Section fill={true} center={true} id="support">
        <PositionedAsset
          url="/img/decor/bg_01.png"
          alt="thingy"
          bottom={0}
          right={0}
          opacity={0.4}
        />
        <div className="container">
          <SectionHeading1>Support</SectionHeading1>
          <SectionHeading2>Connect or Interact</SectionHeading2>
          <div className="row">
            <div className="col text-center">
              <SectionContent>
                <FontAwesomeIcon icon={faInfoCircle} size="3x" />
                <SectionHeading4 mt={12}>
                  Frequently Asked Questions
                </SectionHeading4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, minima voluptatibus.
                </p>
                <a href="/faq" className="btn btn-dark w-100">
                  Read our FAQs
                </a>
              </SectionContent>
            </div>
            <div className="col text-center">
              <SectionContent>
                <FontAwesomeIcon icon={faDiscord} size="3x" />
                <SectionHeading4 mt={12}>Join our Discord</SectionHeading4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, minima voluptatibus.
                </p>
                <a href="#" className="btn btn-dark w-100">
                  Launch Discord
                </a>
              </SectionContent>
            </div>
            <div className="col text-center">
              <SectionContent>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                <SectionHeading4 mt={12}>Contact</SectionHeading4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, minima voluptatibus.
                </p>
                <a
                  href="mailto:hello@reserveblock.io"
                  className="btn btn-dark w-100"
                >
                  Send Email
                </a>
              </SectionContent>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
