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
      url: "https://www.nasdaq.com/press-release/mlb-all-star-and-ny-yankee-pitcher-nestor-cortes-releasing-personal-nft-collection-on",
      name: "Nasdaq",
      image: "/img/press/nasdaq.png",
    },
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
      url: "https://www.marketwatch.com/press-release/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts-2022-03-09?mod=search_headline",
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
      url: "https://blockchainreporter.net/the-reserveblock-protocol-has-achieved-mainnet-beta-with-over-2300-validators-concurrently-with-a-web-wallet-release-providing-on-chain-tools-and-features-for-the-first-ever-p2p-auction-on-the-networ/",
      name: "Block Chain Reporter",
      image: "/img/press/blockchain-reporter.png",
    },
    // {
    //   url: "https://www.streetinsider.com/dr/news.php?id=20352091&gfv=1",
    //   name: "Street Insider",
    //   image: "/img/press/street-insider.png",
    // },
    {
      url: "https://coinmarketcap.com/headlines/news/the-reserveblock-protocol-has-achieved-mainnet-beta-with-over-2300-validators-concurrently-with-a-web-wallet-release-providing-on-chain-tools-and-features-for-the-first-ever-p2p-auction-on-the-network/",
      name: "Coin Marketcap",
      image: "/img/press/coinmarketcap.png",
    },
    {
      url: "https://finance.yahoo.com/news/reserveblock-foundation-rbx-network-venture-153000616.html",
      name: "Yahoo Finance",
      image: "/img/press/yahoo.png",
    },
    {
      url: "https://www.merrilledge.com/research/story?strykey=2508-202207121330pr_news_uspr_____ny13428-1",
      image: "/img/press/merrill.png",
      name: "Merrill",
    },
    {
      image: "/img/press/thebitcoinnews.png",
      name: "The Bitcoin News",
      url: "https://thebitcoinnews.com/reserveblock-foundation-announces-the-rbx-network-masternode-release-presale-for-governance-consensus-and-block-rewards-in-conjunction-with-the-networks-public-testnet/",
    },
    {
      image: "/img/press/benzinga.png",
      name: "Benzinga",
      url: "https://www.benzinga.com/pressreleases/22/03/n26063541/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts",
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

    {
      image: "/img/press/tdh.png",
      name: "thedailyhodl",
      url: "https://dailyhodl.com/2022/03/09/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts/",
    },
    {
      image: "/img/press/blocktelegraph.png",
      name: "blocktelegraph",
      url: "https://blocktelegraph.io/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts/",
    },
    {
      image: "/img/press/cryptosaurus.png",
      name: "Cryptosaurus",
      url: "https://cryptosaurus.tech/former-navy-seal-and-writer-willard-chesney-joins-cbs-seal-team-actor-justin-melnick-to-leverage-boot-campaign-on-the-reserveblock-rbx-network-to-release-nft-archive/",
    },
  ];

  const pressItems: IPressCardProps[] = [

    {
      title:
        "Canes Connection NIL Program for University of Miami To Integrate the RBX Network by Way of Masternode Pool and Interactive NFTs",
      date: "09/14/22",
      imageUrl: "/img/press/tdh.png",
      url: "https://dailyhodl.com/2022/09/14/canes-connection-nil-program-for-university-of-miami-student-athletes-to-integrate-the-reserveblock-rbx-network-by-way-of-masternode-pool-and-interactive-nfts/",
    },
    {
      title:
        "Canes Connection NIL Program for University of Miami To Integrate the RBX Network by Way of Masternode Pool and Interactive NFTs",
      date: "09/14/22",
      imageUrl: "/img/press/bitcoin-insider.png",
      url: "https://www.bitcoininsider.org/article/184594/canes-connection-nil-program-university-miami-student-athletes-integrate",
    },
    {
      title:
        "Canes Connection NIL Program for University of Miami To Integrate the RBX Network by Way of Masternode Pool and Interactive NFTs",
      date: "09/14/22",
      imageUrl: "/img/press/dailycoin.png",
      url: "https://dailycoin.com/canes-connection-nil-program-for-university-of-miami-student-athletes-to-integrate-the-reserveblock-rbx-network-by-way-of-masternode-pool-and-interactive-nfts/",
    },

    {
      title:
        "Jencarlos Canela to Launch Lifestyle NFT Series On The RBX Network",
      date: "08/30/22",
      imageUrl: "/img/press/seeking-alpha.png",
      url: "https://seekingalpha.com/pr/18921416-singer-songwriter-and-actor-jencarlos-canela-to-launch-personal-and-professional-lifestyle",
    },

    {
      title:
        "Jencarlos Canela to Launch Lifestyle NFT Series On The RBX Network",
      date: "08/30/22",
      imageUrl: "/img/press/insider.png",
      url: "https://markets.businessinsider.com/news/stocks/singer-songwriter-and-actor-jencarlos-canela-to-launch-personal-and-professional-lifestyle-nft-series-on-the-reserveblock-rbx-network-with-interactive-fan-voting-to-determine-release-direction-an-1031714041",
    },

    {
      title:
        "Jencarlos Canela to Launch Lifestyle NFT Series On The RBX Network",
      date: "08/30/22",
      imageUrl: "/img/press/tdh.png",
      url: "https://dailyhodl.com/2022/08/30/singer-songwriter-and-actor-jencarlos-canela-to-launch-personal-and-professional-lifestyle-nft-series-on-the-reserveblock-rbx-network/",
    },
    {
      title:
        "Former Navy SEAL and Author Willard Chesney to Release NFT Collection On The ReserveBlock RBX Network ",
      date: "08/16/22",
      imageUrl: "/img/press/blocktelegraph.png",
      url: "https://blocktelegraph.io/?p=6419",
    },
    {
      title:
        "Former Navy SEAL and Author Willard Chesney to Release NFT Collection On The ReserveBlock RBX Network ",
      date: "08/16/22",
      imageUrl: "/img/press/tdh.png",
      url: "https://dailyhodl.com/2022/08/16/former-navy-seal-and-author-willard-chesney-joins-cbs-seal-team-actor-justin-melnick-with-nft-collection-release-on-the-reserveblock-rbx-network-proceeds-to-benefit-the-boot-campaign/",
    },
    {
      title:
        "Former Navy SEAL and Author Willard Chesney to Release NFT Collection On The ReserveBlock RBX Network ",
      date: "08/16/22",
      imageUrl: "/img/press/cryptosaurus.png",
      url: "https://cryptosaurus.tech/former-navy-seal-and-writer-willard-chesney-joins-cbs-seal-team-actor-justin-melnick-to-leverage-boot-campaign-on-the-reserveblock-rbx-network-to-release-nft-archive/",
    },


    {
      title:
        "The ReserveBlock Protocol Has Achieved Mainnet Beta With Over 2,300 Validators",
      date: "07/21/22",
      imageUrl: "/img/press/blockchain-reporter.png",
      url: "https://blockchainreporter.net/the-reserveblock-protocol-has-achieved-mainnet-beta-with-over-2300-validators-concurrently-with-a-web-wallet-release-providing-on-chain-tools-and-features-for-the-first-ever-p2p-auction-on-the-networ/",
    },
    {
      title:
        "The ReserveBlock Protocol Has Achieved Mainnet Beta With Over 2,300 Validators",
      date: "07/21/22",
      imageUrl: "/img/press/street-insider.png",
      url: "https://www.streetinsider.com/dr/news.php?id=20352091&gfv=1",
    },
    {
      title:
        "The ReserveBlock Protocol Has Achieved Mainnet Beta With Over 2,300 Validators",
      date: "07/21/22",
      imageUrl: "/img/press/coinmarketcap.png",
      url: "https://coinmarketcap.com/headlines/news/the-reserveblock-protocol-has-achieved-mainnet-beta-with-over-2300-validators-concurrently-with-a-web-wallet-release-providing-on-chain-tools-and-features-for-the-first-ever-p2p-auction-on-the-network/",
    },
    {
      title:
        "MLB All-Star and NY Yankee Pitcher Nestor Cortes Releasing Personal NFT Collection On The ReserveBlock RBX Network",
      date: "07/12/22",
      imageUrl: "/img/press/nasdaq.png",
      url: "https://www.nasdaq.com/press-release/mlb-all-star-and-ny-yankee-pitcher-nestor-cortes-releasing-personal-nft-collection-on",
    },
    {
      title:
        "MLB All-Star and NY Yankee Pitcher Nestor Cortes Releasing Personal NFT Collection On The ReserveBlock RBX Network",
      date: "07/12/22",
      imageUrl: "img/press/blocktelegraph.png",
      url: "https://blocktelegraph.io/mlb-all-star-and-ny-yankee-pitcher-nestor-cortes-releasing-personal-nft-collection-on-the-reserveblock-rbx-network/",
    },
    {
      title:
        "MLB All-Star and NY Yankee Pitcher Nestor Cortes Releasing Personal NFT Collection On The RBX Network",
      date: "07/12/22",
      imageUrl: "/img/press/merrill.png",
      url: "https://www.merrilledge.com/research/story?strykey=2508-202207121330pr_news_uspr_____ny13428-1",
    },

    {
      title:
        "ReserveBlock Foundation RBX Network and Venture Miami Team To Collaborate on Miami-Centric NFTs...",
      date: "03/09/22",
      imageUrl: "/img/press/tdh.png",
      url: "https://dailyhodl.com/2022/03/09/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts/",
    },

    {
      title:
        "ReserveBlock Foundation RBX Network and Venture Miami Team To Collaborate on Miami-Centric NFTs...",
      date: "03/09/22",
      imageUrl: "/img/press/yahoo.png",
      url: "https://finance.yahoo.com/news/reserveblock-foundation-rbx-network-venture-153000616.html",
    },
    {
      title:
        "ReserveBlock Foundation RBX Network and Venture Miami Team To Collaborate on Miami-Centric NFTs...",
      date: "03/09/22",
      imageUrl: "/img/press/blocktelegraph.png",
      url: "https://blocktelegraph.io/reserveblock-foundation-rbx-network-and-venture-miami-team-to-collaborate-on-miami-centric-nfts/",
    },

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
