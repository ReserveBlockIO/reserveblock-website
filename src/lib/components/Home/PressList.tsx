import styled from "styled-components";
import { chunkArray } from "../../utils";
import { IPressCardProps, PressCard } from "../common/PressCard";
import { VisibilityTransition } from "../common/VisibilityTransition";

interface PressLogo {
  name: string;
  url: string;
  image: string;
}

const PressLink = styled.a`
  position: relative;
  img {
    transition: opacity 0.4s;
  }
  &:hover {
    img {
      opacity: 0.7;
    }
  }
`;

export const PressList = () => {
  const pressLogos: PressLogo[] = [
    {
      url: "https://aliens.com/read/reserveblock-foundation-announces-upcoming-release-of-the-first-open-source-decentralized-nft-centric-blockchain-platform-in-q1-22",
      name: "Aliens",
      image: "/img/press/aliens.png",
    },
    {
      url: "https://cryptelicious.com/2021/12/16/reserveblock-foundation-announces-upcoming-release-of-the-first-open-source-decentralized-nft-centric-blockchain-platform-in-q1-22/",
      name: "Cryptolicious",
      image: "/img/press/crypto.png",
    },
    {
      url: "https://markets.businessinsider.com/news/stocks/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet-1031172008",
      name: "Insider",
      image: "/img/press/insider.png",
    },
    {
      url: "https://www.marketwatch.com/press-release/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet-2022-02-08",
      name: "Market Watch",
      image: "/img/press/market-watch.png",
    },
    {
      url: "https://www.morningstar.com/news/pr-newswire/20211216ny09139/reserveblock-foundation-announces-upcoming-release-of-the-first-open-source-decentralized-nft-centric-blockchain-platform-in-q1-22",
      name: "Morningstar",
      image: "/img/press/morningstar.png",
    },
    {
      url: "https://seekingalpha.com/pr/18662580-reserveblock-foundation-announces-rbx-network-masternode-release-and-presale-for-governance",
      name: "Seeking Alpha",
      image: "/img/press/seeking-alpha.png",
    },
    {
      url: "https://finance.yahoo.com/news/reserveblock-foundation-announces-rbx-network-140000624.html?guccounter=1",
      name: "Yahoo Finance",
      image: "/img/press/yahoo.png",
    },
    {
      image: "/img/press/thebitcoinnews.png",
      name: "The Bitcoin News",
      url: "https://thebitcoinnews.com/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet/",
    },
    {
      image: "/img/press/benzinga.png",
      name: "Benzinga",
      url: "https://www.benzinga.com/pressreleases/22/02/n25477074/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consen",
    },
    {
      image: "/img/press/coinspeaker.png",
      name: "Coinspeaker",
      url: "https://www.coinspeaker.com/reserveblock-foundation-announces-rbx-network-masternode-release/",
    },
    {
      image: "/img/press/cointelegraph.png",
      name: "CoinTelegraph",
      url: "https://cointelegraph.com/press-releases/reserveblock-announces-rbx-network-masternode-release-public-testnet",
    },
    {
      image: "/img/press/cryptobrief.png",
      name: "cryptobriefing",
      url: "https://cryptobriefing.com/reserveblock-foundation-announces-the-rbx-network-masternode-release-in-conjunction-with-the-networks-public-testnet/",
    },
    {
      image: "/img/press/cryptopotato.png",
      name: "cryptopotato",
      url: "https://cryptopotato.com/reserveblock-releases-rbx-network-masternode-prepares-presale-for-governance-consensus-and-block-rewards/",
    },
    {
      image: "/img/press/cryptoslate.png",
      name: "cryptoslate",
      url: "https://cryptoslate.com/press-releases/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards/",
    },
    {
      image: "/img/press/dailycoin.png",
      name: "dailycoin",
      url: "https://dailycoin.com/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet/",
    },
    {
      image: "/img/press/zycrypto.png",
      name: "zycrypto",
      url: "https://zycrypto.com/reserveblock-foundation-to-release-its-rbx-network-masternodes-and-a-presale-in-the-coming-days/",
    },
  ];

  const pressItems: IPressCardProps[] = [
    {
      title:
        "ReserveBlock Foundation Announces the RBX Network Masternode Release & Presale for Governance...",
      date: "02/08/22",
      imageUrl: "/img/press/benzinga.png",
      url: "https://www.benzinga.com/pressreleases/22/02/n25477074/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consen",
    },
    {
      title:
        "ReserveBlock Foundation Announces the RBX Network Masternode Release & Presale for Governance...",
      date: "02/08/22",
      imageUrl: "/img/press/thebitcoinnews.png",
      url: "https://thebitcoinnews.com/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet/",
    },
    {
      title:
        "ReserveBlock Foundation Announces the RBX Network Masternode Release & Presale for Governance...",
      date: "02/08/22",
      imageUrl: "/img/press/coinspeaker.png",
      url: "https://www.coinspeaker.com/reserveblock-foundation-announces-rbx-network-masternode-release/",
    },
    {
      title:
        "ReserveBlock Foundation announces upcoming release of the first open-source decentralized NFT...",
      date: "12/16/21",
      imageUrl: "/img/press/aliens.png",
      url: "https://aliens.com/read/reserveblock-foundation-announces-upcoming-release-of-the-first-open-source-decentralized-nft-centric-blockchain-platform-in-q1-22",
    },
    {
      title:
        "ReserveBlock Foundation announces upcoming release of the first open-source decentralized NFT...",
      date: "12/16/21",
      imageUrl: "/img/press/seeking-alpha.png",
      url: "https://seekingalpha.com/pr/18604630-reserveblock-foundation-announces-upcoming-release-of-first-open-source-decentralized-nft",
    },
    {
      title:
        "ReserveBlock Foundation announces upcoming release of the first open-source decentralized NFT...",
      date: "12/16/21",
      imageUrl: "/img/press/market-watch.png",
      url: "https://www.marketwatch.com/press-release/reserveblock-foundation-announces-upcoming-release-of-the-first-open-source-decentralized-nft-centric-blockchain-platform-in-q1-22-2021-12-16",
    },
  ];

  return (
    <div>
      {chunkArray(pressLogos, 4).map((chunk) => (
        <>
          <div className="py-3 d-none d-md-block"></div>

          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
            {chunk.map((p: PressLogo, i: number) => (
              <VisibilityTransition
                transitionType="fade"
                transitionDelay={i * 350}
              >
                <PressLink href={p.url} target="_blank" rel="noreferrer">
                  <div className="p-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      height={60}
                      className="my-2 my-md-0"
                    />
                  </div>
                </PressLink>
              </VisibilityTransition>
            ))}
          </div>
          <div className="py-3  d-none d-md-block"></div>
        </>
      ))}

      <div className="py-3"></div>

      <div className="row">
        {pressItems.map((p, i: number) => (
          <div className="col-12 col-md-4 pb-3">
            <VisibilityTransition
              transitionType="slide"
              transitionDirection={i === 0 ? "right" : i === 1 ? "up" : "left"}
              transitionDelay={250}
            >
              <PressCard {...p} />
            </VisibilityTransition>
          </div>
        ))}
      </div>
    </div>
  );
};
