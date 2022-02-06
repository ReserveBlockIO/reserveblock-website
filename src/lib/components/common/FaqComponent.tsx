import { SectionContent, SectionHeading4 } from "../../styles/styled";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  general: boolean;
}

export const FaqComponent = (props: Props) => {
  const generalItems: FaqItem[] = [
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
        "RBX have near zero fees for transactions and for media storage, if needed but not required, they are equitable to hard drive space they take up with the Datanode infrastructure on the network but maintain a comparable nominal one-time fee per the public data algo formula. ",
    },
    {
      question: "How is the ReserveBlock different from other NFT platforms?",
      answer:
        "RBX is different in that the platform is NFT centric, meaning the blockchain focuses on the delivery and features that allow for an NFTs true utility and are not just a collectible but provides real & relevant functionality. ",
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

  const masterNodeItems: FaqItem[] = [
    {
      question: "How do I become a Masternode? ",
      answer:
        "To become a Masternode you download either a desktop wallet or the CLI and allow incoming connections through firewall and elect from the application to become a masternode. You will also need to have the minimum amount of 1,000 RBX coins in the wallet to qualify to be a Masternode and earn block rewards.  The staked collateral to the network is not taken and a user can elect to unstake anytime without any holding period, penalty, or fee.  This is called liquid staking.",
    },
    {
      question: "What is the difference between a Full node and a Masternode?",
      answer:
        "A Full node is both a Datanode and Masternode. A Masternode will help validate & provide governance on the network, but it will not store the incoming data.  Datanodes simply stakes decentralized storage for the network through the contribution of hard drive space which is Proof of Capacity (PoC).",
    },
    {
      question: "What are the responsibilities of a Masternode? ",
      answer:
        "A Masternode is what secures the network and validates that an incoming transaction are both authentic and legitimate. ",
    },
    {
      question: "Is there a limit of Masternodes on the RBX Network? ",
      answer:
        "No there is no limit. In fact the more nodes that participate on the network the stronger network grows and the more secure it becomes over long periods of time. ",
    },
    {
      question:
        "What hardware is necessary to verify transactions on the RBX blockchain?",
      answer:
        "A basic computer can be a Masternode. A Recommended base specs would be at least a 2GB Ram (4GB pref), Pentium or higher processor, solid state hard drive to match block data. But in theory something like a Raspberry-Pi would be able to be a Masternode as well. ",
    },
    {
      question: "How do you become a Full node?",
      answer:
        "To become a full node a user would follow the steps above, but then elects to dedicate X amount of hard drive space, at which point the wallet will lock that space for use within the application. ",
    },
    {
      question: "What is the difference between mining and verifying? ",
      answer:
        "Since there is no PoW there is no mining, but rather validating the incoming blocks and then having the node share that validation to all other online nodes. Mining is the process in which a very power hungry machine attempts to solve a mathematical problem with the incoming block information. Once that problem is solved the block has been mined and the results are published to all other online nodes. ",
    },
    {
      question: "How long can a user be a Masternode? ",
      answer:
        "A user can be a Masternode as long as the required minimum amount of RBX is staked and the client is operating in the background of the local device. ",
    },
    {
      question:
        "Who determines how many native coins will need to be staked to become a Masternode?",
      answer:
        "This is determined & defined in the on-chain rules that is established at the networks Genesis block. ",
    },
    {
      question: "Can I become more than one Masternode?",
      answer: "Yes. A user can have one Masternode per unique IP address. ",
    },
    {
      question: "How much RBX coin can you stake?",
      answer:
        "A user only needs to stake the minimum required amount per node operating. Staking more than the required amount does not give a user any advantage over others.  Simply, if a user would like to operate 5 nodes and has 5 unique IP addresses, they would simply stake 1,000 RBX coin for each node. ",
    },

    {
      question:
        "Can a user become a Datanode and a Masternode at the same time?",
      answer: "Yes.",
    },
    {
      question: "How long are the staking periods on RBX?",
      answer:
        "There are no staking periods, fees or penalties of any kind. To be a Masternode a user must have the staked amount, the moment user reduces the minimum amount staked below the threshold that user will become immediately ineligible to maintain their Masternode and cease earning block rewards. However, this works both ways, should a user re-stakes the correct amount again that user will immediately become eligible again. ",
    },
    {
      question:
        "What are the penalties to unstake before the term is complete?",
      answer:
        "No penalties and no terms period.  Staking on RBX is liquid staking and provides for free will participation.  ",
    },
    {
      question: "How long does it take to unstake?",
      answer:
        "There are no terms and therefore a user can freely move funds at any time should a user choose to do so. ",
    },
    {
      question: "After unstaking, is there a waiting period to restake?",
      answer: "No.",
    },
    {
      question:
        "Will there be a referral system for Masternodes to add other clients?",
      answer:
        "No, RBX is an autonomous and decentralized ecosystem.  The only rewards earned are through validation and data provided to the network.  ",
    },
    {
      question: "Can I sell my node to another client?",
      answer: "Yes.",
    },
    {
      question: "When will rewards for validating payout?",
      answer:
        "They are automatically paid instantly if the user is the node validating the incoming block. ",
    },
    {
      question:
        "What hardware or software factors can affect proper validation on the RBX Blockchain?",
      answer:
        "As long as hardware is running and not damaged or faulty then proper validation will happen. If the software is not running on the local device then that node is not validating or if the operating system on the local device is having issues then it could prevent the node from running correctly.  It is recommended that a user monitor their node daily (requiring minimal effort) to insure there are no faults with equipment or operating system. ",
    },
    {
      question:
        "Will a user need to disable the computers firewall when acting as a Masternode?",
      answer: "No.",
    },
    {
      question:
        "What is the purpose of proof of stake as it pertains to the functionality of the blockchain? ",
      answer:
        "Users stake (assure) coins in their wallet if they want to act as a Masternode which is the unbonded (liquid) collateral that allows the node to validate transactions and receive block rewards. ",
    },
  ];

  const items = props.general ? generalItems : masterNodeItems; //todo
  return (
    <div>
      {items.map((item, i) => (
        <div>
          <SectionContent>
            <SectionHeading4>
              {i + 1}. {item.question.trim()}
            </SectionHeading4>
            <p className="mb-0">{item.answer.trim()}</p>
          </SectionContent>
        </div>
      ))}
    </div>
  );
};
