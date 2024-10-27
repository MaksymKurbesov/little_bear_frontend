import BearSkin1 from "../images/skins/timber.webp";
import BearSkin2 from "../images/skins/brickn.webp";
import BearSkin3 from "../images/skins/neyon.webp";
import BearSkin4 from "../images/skins/brizzy.webp";
import BearSkin5 from "../images/skins/aztron.webp";
import MickeySkin from "../images/skins/mickey.png";
import DimasSkin from "../images/skins/dimas.webp";
import OpenedBearSkin1 from "../images/skins/timber.webp";
import OpenedBearSkin2 from "../images/skins/brickn-opened.webp";
import OpenedBearSkin3 from "../images/skins/neyon-opened.webp";
import OpenedBearSkin4 from "../images/skins/brizzy-opened.webp";
import OpenedBearSkin5 from "../images/skins/aztron-opened.webp";
import OpenedMickeySkin from "../images/skins/mickey-opened.png";
import OpenedDimasSkin from "../images/skins/dimas-opened.webp";
import DollarIcon from "../images/dollar-coin2.webp";
import TicketIcon from "/ticket.webp";

// export const POINTS_TO_ADD = [1, 3, 5, 7, 10];
export const POINTS_TO_ADD = {
  timber: 1,
  brickn: 3,
  aztron: 5,
  brizzy: 7,
  neyon: 10,
  mickey: 30,
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
  },
  {
    id: 6,
    image: MickeySkin,
    openedImage: OpenedMickeySkin,
    requiredPoints: null,
    colorCN: "color-red",
    points: 30,
    name: "mickey",
    isPurchasable: true,
  },
  // {
  //   id: 7,
  //   image: DimasSkin,
  //   openedImage: OpenedDimasSkin,
  //   requiredPoints: null,
  //   colorCN: "color-red",
  //   points: 10,
  //   name: "dimas",
  //   isPurchasable: true,
  // },
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
    name: "30000 BEAR TOKEN",
    value: "30",
    chance: 11,
  },
  {
    name: "Серебрянный билет",
    value: "silver_ticket",
    chance: 15,
  },
  {
    name: "20000 BEAR TOKEN",
    value: "20",
    chance: 16,
  },
  {
    name: "Золотой билет",
    value: "gold_ticket",
    chance: 10,
  },
  {
    name: "10000 BEAR TOKEN",
    value: "10",
    chance: 11,
  },
  {
    name: "Скин 'Mafia Little Bear'",
    value: "bear",
    chance: 5,
  },
  {
    name: "50000 BEAR TOKEN",
    value: "50",
    chance: 11,
  },
  {
    name: "Золотой билет",
    value: "gold_ticket",
    chance: 10,
  },
  {
    name: "40000 BEAR TOKEN",
    value: "40",
    chance: 16,
  },
  {
    name: "Серебрянный билет",
    value: "silver_ticket",
    chance: 15,
  },
];

export const TICKET_REWARDS = [];

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

export const levelThresholds = [0, 20000, 60000, 120000, 200000];
