import styled from "styled-components";
import { chunkArray } from "../../utils";

interface IPressItem {
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
  const pressItems: IPressItem[] = [
    { url: "", name: "", image: "/img/press/aliens.png" },
    { url: "", name: "", image: "/img/press/crypto.png" },
    { url: "", name: "", image: "/img/press/insider.png" },
    { url: "", name: "", image: "/img/press/market-watch.png" },
    { url: "", name: "", image: "/img/press/morningstar.png" },
    { url: "", name: "", image: "/img/press/seeking-alpha.png" },
    { url: "", name: "", image: "/img/press/yahoo.png" },
  ];

  return (
    <div>
      {chunkArray(pressItems, 4).map((chunk) => (
        <>
          <div className="py-3"></div>

          <div className="d-flex justify-content-between">
            {chunk.map((p: IPressItem) => (
              <div>
                <PressLink href={p.url} target="_blank" rel="noreferrer">
                  <img src={p.image} alt={p.name} height={60} />
                </PressLink>
              </div>
            ))}
          </div>
          <div className="py-3"></div>
        </>
      ))}
    </div>
  );
};
