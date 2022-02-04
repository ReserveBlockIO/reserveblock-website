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
      question: "What fees can I expect on the RBX platform?",
      answer:
        "a.	RBX have near zero fees for transactions and for media storage, if needed but not required, they are equitable to hard drive space they take up with the Datanode infrastructure on the network but maintain a comparable nominal one-time fee per the public data algo formula. ",
    },
    {
      question: "How is the ReserveBlock different from other NFT platforms?",
      answer:
        "a.	RBX is different in that the platform is NFT centric, meaning the blockchain focuses on the delivery and features that allow for an NFTs true utility and are not just a collectible but provides real & relevant functionality. ",
    },
    {
      question: "Do you need to own crypto to use RBX platform?",
      answer:
        "A user will need to have “X” amount of RBX to mint or do a transaction again at the nominal near zero fees or stake to become a Masternode as a validator on the network and provide governance. RBX is also the platform native currency. ",
    },
    {
      question: "Is there a desktop app for the RBX platform?",
      answer:
        "Yes, there is a core desktop wallet where all functions are provided for a user. ",
    },
    {
      question: "Is there a mobile app for the RBX platform?",
      answer:
        "It is anticipated that there will be a web platform that mobile will be able to access and save to home screens. ",
    },

    {
      question: "Can I buy and sell Crypto on the platform?",
      answer: "No",
    },

    {
      question:
        "Do users have the option to download their NFTS into their personal storage without a fee? ",
      answer:
        "Yes, users can elect to store their NFTs entirely, on-chain or both, but when a user stores their own NFTs there is no fee.",
    },

    {
      question:
        "Which crypto currency do you need to use to utilize the platform?",
      answer:
        "A user will need RBX coins for transactions or to become a Masternode.",
    },
    {
      question: "Can I send RBX coins to another person?",
      answer: "Yes",
    },
    {
      question: "Can I use my credit card to utilize the platform?",
      answer: "No as that would require third party centralized management. ",
    },
    {
      question: "What does a “trustless system” mean?",
      answer:
        "A trustless system is a system in which there is no centralized authority making decisions on your behalf. Therefore, you can use the system without worry of any third-party interference, friction or barriers. ",
    },
    {
      question: "Who can write a smart contract?",
      answer:
        "Anyone can write a smart contract through either the templated smart contracts provided without code or customize.",
    },
    {
      question:
        "What is the role of the discord community in the RBX platform?   ",
      answer:
        "The role of the discord community is to communicate with the RBX community and deliver useful information, provide support and updates, as well as provide for a friendly open forum for all to participate.",
    },
    {
      question: "How is RBX a more environmentally friendly platform for NFTS?",
      answer:
        "There is no PoW for consensus meaning no heavy equipment or massive burden of power needed to secure the blockchain.  Instead, validation occurs within the Masternode infrastructure where the client is operating the passive file in the background on any laptop, desktop, Raspberry-Pi etc (per the min standards), agnostic to operating system, which utilizes the existing power supply of the said device. ",
    },
    {
      question:
        "Is there a customer support number for issues while using the RBX platform?",
      answer:
        "No, support is provided through the appropriate channels on the network Discord by a moderator and community members.",
    },
    {
      question: "How much storage do I have on my RBX digital wallet?",
      answer:
        "A user wallet does not provide storage, but rather the network through decentralized Datanodes.  Again, users may retain their own media if they choose to do so.  Should a user choose on-chain storage, they can call the file / image through their wallet for viewing or download it.",
    },
    {
      question:
        "Will I need to remember a long private key to use the RBX Platform?",
      answer:
        "The wallet will handle that, however like all blockchains when acting as your own repository, it is strongly recommended to follow best backup practices. ",
    },
    {
      question:
        "Will RBX provide a user with an online marketplace for NFT exposure?",
      answer:
        "Users have control over their own NFTs and where they can list them. There will be in-wallet trading tools, giving the NFT owner the ability to take their NFTs to any social or web-based platform they choose and conduct peer to peer auctions without any third-party or fees all through the RBX wallet utilizing the Decentralized Sales Tools (DSTs).  However, it is anticipated that existing and new marketplaces can pick up the protocol which then will allow for centralized trading should a user choose that option. ",
    },
    {
      question: "Are the sales generated on RBX reported to the IRS?",
      answer:
        "RBX is an autonomous & decentralized platform and therefore does not have access to this information as RBX is not a marketplace.  While each user acts as their own marketplace it then would be the user responsibility to act ethically & honestly and report earnings appropriately. ",
    },
    {
      question: "I’m a beginner, how can I learn how to create an NFT?",
      answer:
        "There will be “Get Started” documents and step by step instructions on how to create, mint, trade and utilize DST functions prior to Mainnet launch. ",
    },
    {
      question: "How do I become a member of the Discord community on RBX?",
      answer:
        "Simply click on the Discord icon on the site and agree to the rules and join.  A user can also access the appropriate identified channels for platform support.",
    },
    {
      question: "Will the RBX network also be supported by developers?",
      answer:
        "Yes, there is a provision for airdrop rewards on Testnet and Mainnet for open developer participation.  Additionally, as an open-source network, any developer can choose to make suggestions, create additional smart contracts for the compiler, or proposal changes which can be voted on by the Masternodes who provide governance.  Devs can also decide to build decentralized applications (dApps) on the RBX network should they choose.  ",
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
