import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faGithub,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { WIKI_BASE_URL } from "../constants";

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
    name: "Wiki",
    path: WIKI_BASE_URL,
  },
  {
    name: "Community",
    path: "/#community",
  },

];

export const secondaryNavItems: INavItem[] = [
  {
    name: "Web Wallet",
    path: "https://wallet.rbx.network/",
    openExternal: true,
  },

  {
    name: "Whitepaper v2",
    path: `${WIKI_BASE_URL}/docs/documents/whitepaper-v2/`,
    openExternal: false,
  },

  {
    name: "Disclaimer",
    path: "/disclaimer",
  },
];

export const SocialUrls = {
  twitter: "https://twitter.com/ReserveBlockIO",
  instagram: "https://www.instagram.com/reserveblockio/",
  // telegram: "https://t.me/reserveblockofficial",
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
  // {
  //   url: SocialUrls.telegram,
  //   icon: faTelegram,
  //   name: "Telegram",
  // },
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
        path: `${WIKI_BASE_URL}/docs/FAQs/general-faq/`,
      },
      {
        name: "Core Wallet",
        path: `${WIKI_BASE_URL}/docs/FAQs/core-wallet-faq/`,
      },
      {
        name: "Masternodes",
        path: `${WIKI_BASE_URL}/docs/FAQs/masternode-faq/`,
      },
      // {
      //   name: "Datanodes",
      //   path: "/faq#datanodes",
      // },
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
        name: "Whitepaper v2",
        path: `${WIKI_BASE_URL}/docs/documents/whitepaper-v2/`,
        openExternal: false,
      },
      {
        name: "Contact",
        path: "mailto:dev@reserveblock.io",
      },
    ],
  },
];
