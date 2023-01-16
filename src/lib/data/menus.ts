import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface INavItem {
  name: string;
  path: string;
  children?: INavItem[];
  openExternal?: boolean;
}

interface ISocialNavItem {
  name: string;
  icon: IconDefinition;
  url: string;
}

export const primaryNavItems: INavItem[] = [
  {
    name: "Learn",
    path: "/#learn",
  },
  {
    name: "Masternodes",
    path: "/#masternodes",
  },
  {
    name: "Wallet",
    path: "/#wallet",
  },
  {
    name: "Network",
    path: "/#network",
  },
  {
    name: "Build",
    path: "/#build",
  },

  {
    name: "Community",
    path: "/#community",
  },
  {
    name: "Press",
    path: "/#press",
  },
];

export const secondaryNavItems: INavItem[] = [
  {
    name: "Web Wallet",
    path: "https://wallet.rbx.network/",
    openExternal: true,
  },
  {
    name: "Litepaper",
    path: require("../../pdfs/ReserveBlockLitePaper.pdf"),
    openExternal: true,
  },
  {
    name: "Whitepaper",
    path: require("../../pdfs/RBX_Blockchain_Whitepaper.pdf"),
    openExternal: true,
  },

  {
    name: "Disclaimer",
    path: "/disclaimer",
  },
];

export const SocialUrls = {
  twitter: "https://twitter.com/ReserveBlockIO",
  instagram: "https://www.instagram.com/reserveblockio/",
  telegram: "https://t.me/reserveblock",
  discord: "https://discord.com/invite/PnS2HRETDh",
  github: "https://github.com/ReserveBlockIO",
};

export const socialNavItems: ISocialNavItem[] = [
  {
    url: SocialUrls.twitter,
    icon: faTwitter,
    name: "Twitter",
  },

  {
    url: SocialUrls.discord,
    icon: faDiscord,
    name: "Discord",
  },
  {
    url: SocialUrls.github,
    icon: faGithub,
    name: "Github",
  },
  {
    url: SocialUrls.telegram,
    icon: faTelegram,
    name: "Telegram",
  },
];

interface IFooterNavItem {
  heading: string;
  items: INavItem[];
}

export const footerNavItems: IFooterNavItem[] = [
  {
    heading: "General",
    items: [
      {
        name: "Learn",
        path: "/#learn",
      },
      {
        name: "Masternodes",
        path: "/#masternodes",
      },
      {
        name: "RBX Wallet",
        path: "/#wallet",
      },
    ],
  },
  {
    heading: "Develop",
    items: [
      {
        name: "Network",
        path: "/#network",
      },
      {
        name: "Build",
        path: "/#build",
      },

      {
        name: "Community",
        path: "/#community",
      },
    ],
  },
  {
    heading: "FAQs",
    items: [
      {
        name: "General",
        path: "/faq#general",
      },
      {
        name: "Masternodes",
        path: "/faq#masternodes",
      },
      {
        name: "Datanodes",
        path: "/faq#datanodes",
      },
      // {
      //   name: "Developer",
      //   path: "/faq#developer",
      // },
    ],
  },
  {
    heading: "About",
    items: [
      {
        name: "Disclaimer",
        path: "/disclaimer",
      },
      {
        name: "Litepaper",
        path: require("../../pdfs/ReserveBlockLitePaper.pdf"),
        openExternal: true,
      },
      {
        name: "Contact",
        path: "mailto:dev@reserveblock.io",
      },
    ],
  },
];
