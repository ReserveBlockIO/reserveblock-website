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
    { url: "", name: "", image: "/img/press/aliens.png" },
    { url: "", name: "", image: "/img/press/crypto.png" },
    { url: "", name: "", image: "/img/press/insider.png" },
    { url: "", name: "", image: "/img/press/market-watch.png" },
    { url: "", name: "", image: "/img/press/morningstar.png" },
    { url: "", name: "", image: "/img/press/seeking-alpha.png" },
    { url: "", name: "", image: "/img/press/yahoo.png" },
  ];

  const pressItems: IPressCardProps[] = [
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
                  <img
                    src={p.image}
                    alt={p.name}
                    height={60}
                    className="my-2 my-md-0"
                  />
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
          <div className="col-12 col-md-4 pb-3 pb-md-0">
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
