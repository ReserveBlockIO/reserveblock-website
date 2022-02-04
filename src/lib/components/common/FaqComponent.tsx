import { SectionContent, SectionHeading4 } from "../../styles/styled";

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqComponent = () => {
  const items: FaqItem[] = [
    {
      question: "What is the ReserveBlock RBX Platform?",
      answer:
        "RBX is a next generation open-source blockchain (layer 1) network that unlocks peer to peer operability and for the minting & trading of NFTs without the need for a centralized authority or marketplace.  The platform provides for true decentralized storage of media tied to the NFT, all with a robust suite of on-chain tools and features through a core wallet. RBX NFT suite of features have scalable utility that other blockchains simply are not currently offering today.  The platform is also a smart contract enabled blockchain allowing users to customize and control how NFTs evolve without the need to know how to code.",
    },
    {
      question: "How do you register?",
      answer:
        "Since this is an autonomous & decentralized network there is no registration as that would require a centralized authority to maintain. Instead users participate in the network per their own free will. To participate in the network, you simply download an RBX wallet and choose to be either become a Data or Masternode to be a validator per the minimum requirements, create a smart contract or trade RBX NFTs peer to peer.  Choice is up to each user. ",
    },
    {
      question:
        "What personal information is requested to become a user of the platform?",
      answer:
        "No personal information is ever requested or collected, the platform is non-custodial. ",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
    {
      question: "",
      answer: "",
    },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <div>
          <SectionContent>
            <SectionHeading4>
              {i + 1}. {item.question}
            </SectionHeading4>
            <p className="mb-0">{item.answer}</p>
          </SectionContent>
        </div>
      ))}
    </div>
  );
};
