import { NodeType } from "../Home/NodeType";

export const NodeTypesComponent = () => {
  return (
    <>
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
    </>
  );
};
