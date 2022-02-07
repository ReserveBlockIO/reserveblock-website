import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faGithub,
  faInstagram,
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
    name: "RBX Wallet",
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
    name: "Litepaper",
    path: require("../../pdfs/ReserveBlockLitePaper.pdf"),
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
    url: SocialUrls.instagram,
    icon: faInstagram,
    name: "Instagram",
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
];
