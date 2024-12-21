import BearSkin1 from "../images/skins/timber.webp";
import BearSkin2 from "../images/skins/brickn.webp";
import BearSkin3 from "../images/skins/neyon.webp";
import BearSkin4 from "../images/skins/brizzy.webp";
import BearSkin5 from "../images/skins/aztron.webp";
import MickeySkin from "../images/skins/mickey.png";
import DimasSkin from "../images/skins/dimas.webp";
import KyberonSkin from "../images/skins/kyberon.webp";
import IntelionSkin from "../images/skins/intelion.webp";
import OpenedBearSkin1 from "../images/skins/timber.webp";
import OpenedBearSkin2 from "../images/skins/brickn-opened.webp";
import OpenedBearSkin3 from "../images/skins/neyon-opened.webp";
import OpenedBearSkin4 from "../images/skins/brizzy-opened.webp";
import OpenedBearSkin5 from "../images/skins/aztron-opened.webp";
import OpenedMickeySkin from "../images/skins/mickey-opened.png";
import OpenedDimasSkin from "../images/skins/dimas-opened.webp";
import OpenedKyberonSkin from "../images/skins/kyberon-opened.webp";
import OpenedIntelionSkin from "../images/skins/intelion-opened.webp";
import DollarIcon from "../images/dollar-coin2.webp";
import TicketIcon from "/ticket.webp";
import BGBear1 from "/bg1-skin.png";
import BGBear2 from "/bg2-skin.png";
import BGBear3 from "/bg3-skin.webp";
import BGBear4 from "/bg4-skin.webp";
import BGBear5 from "/bg5-skin.png";
import BGBear6 from "/bg6-skin.png";
import BGKyberon from "/kyberon-bg.webp";

// export const POINTS_TO_ADD = [1, 3, 5, 7, 10];
export const POINTS_TO_ADD = {
  timber: 1,
  brickn: 3,
  aztron: 5,
  brizzy: 7,
  neyon: 10,
  kyberon: 20,
  mickey: 30,
  intelion: 50,
};

export const SKINS = [
  {
    id: 1,
    image: BearSkin1,
    openedImage: OpenedBearSkin1,
    requiredPoints: 0,
    colorCN: "color-brown",
    points: 1,
    name: "timber",
    isPurchasable: false,
    backgroundImage: BGBear1,
    requiredLevel: 1,
  },
  {
    id: 2,
    image: BearSkin2,
    openedImage: OpenedBearSkin2,
    requiredPoints: 20000,
    colorCN: "color-red",
    points: 3,
    name: "brickn",
    isPurchasable: false,
    backgroundImage: BGBear2,
    requiredLevel: 2,
  },
  {
    id: 3,
    image: BearSkin5,
    openedImage: OpenedBearSkin5,
    requiredPoints: 60000,
    colorCN: "color-white",
    points: 5,
    name: "aztron",
    isPurchasable: false,
    backgroundImage: BGBear3,
    requiredLevel: 3,
  },
  {
    id: 4,
    image: BearSkin4,
    openedImage: OpenedBearSkin4,
    requiredPoints: 120000,
    colorCN: "color-green",
    points: 7,
    name: "brizzy",
    isPurchasable: false,
    backgroundImage: BGBear4,
    requiredLevel: 4,
  },
  {
    id: 5,
    image: BearSkin3,
    openedImage: OpenedBearSkin3,
    requiredPoints: 200000,
    colorCN: "color-purple",
    points: 10,
    name: "neyon",
    isPurchasable: false,
    backgroundImage: BGBear5,
    requiredLevel: 5,
  },
  {
    id: 6,
    image: KyberonSkin,
    openedImage: OpenedKyberonSkin,
    requiredPoints: 750000,
    colorCN: "color-purple",
    points: 20,
    name: "kyberon",
    isPurchasable: false,
    backgroundImage: BGKyberon,
    requiredLevel: 6,
  },
  {
    id: 7,
    image: MickeySkin,
    openedImage: OpenedMickeySkin,
    requiredPoints: null,
    colorCN: "color-red",
    points: 30,
    name: "mickey",
    price: 30,
    isPurchasable: true,
    backgroundImage: BGBear6,
    requiredLevel: null,
  },
  {
    id: 8,
    image: IntelionSkin,
    openedImage: OpenedIntelionSkin,
    requiredPoints: 2000000,
    colorCN: "color-red",
    points: 50,
    name: "intelion",
    isPurchasable: false,
    backgroundImage: BGBear6,
    requiredLevel: 7,
  },
];

export const DAILY_REWARDS = [
  {
    reward: 10,
    icon: DollarIcon,
  },
  {
    reward: 50,
    icon: DollarIcon,
  },
  {
    reward: 100,
    icon: DollarIcon,
  },
  {
    reward: 300,
    icon: DollarIcon,
  },
  {
    reward: 500,
    icon: DollarIcon,
  },
  {
    reward: 1000,
    icon: DollarIcon,
  },
  {
    reward: 2000,
    icon: DollarIcon,
  },
  {
    reward: 3000,
    icon: DollarIcon,
  },
  {
    reward: 5000,
    icon: DollarIcon,
  },
  {
    reward: 10000,
    icon: DollarIcon,
  },
];

export const SEGMENTS = [
  {
    name: "30000 Bear Token",
    value: "30000",
    chance: 11,
  },
  {
    name: "Silver Ticket",
    value: "silver_ticket",
    chance: 15,
  },
  {
    name: "20000 Bear Token",
    value: "20000",
    chance: 16,
  },
  {
    name: "Golden Ticket",
    value: "gold_ticket",
    chance: 10,
  },
  {
    name: "10000 Bear Token",
    value: "10000",
    chance: 11,
  },
  {
    name: "Mafia Bear",
    value: "bear",
    chance: 5,
  },
  {
    name: "50000 Bear Token",
    value: "50000",
    chance: 11,
  },
  {
    name: "Golden Ticket",
    value: "gold_ticket",
    chance: 10,
  },
  {
    name: "40000 Bear Token",
    value: "40000",
    chance: 16,
  },
  {
    name: "Silver Ticket",
    value: "silver_ticket",
    chance: 15,
  },
];

export const DAILY_REWARDS_BY_DAY: { [key: string]: number } = {
  0: 10,
  1: 50,
  2: 100,
  3: 300,
  4: 500,
  5: 1000,
  6: 2000,
  7: 3000,
  8: 5000,
  9: 10000,
};

export const levelThresholds = [
  0, 20000, 60000, 120000, 200000, 750000, 2000000,
];
