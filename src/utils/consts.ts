import BearSkin1 from "../images/skins/timber.webp";
import BearSkin2 from "../images/skins/brickn.webp";
import BearSkin3 from "../images/skins/neyon.webp";
import BearSkin4 from "../images/skins/brizzy.webp";
import BearSkin5 from "../images/skins/aztron.webp";
import OpenedBearSkin1 from "../images/skins/timber.webp";
import OpenedBearSkin2 from "../images/skins/brickn-opened.webp";
import OpenedBearSkin3 from "../images/skins/neyon-opened.webp";
import OpenedBearSkin4 from "../images/skins/brizzy-opened.webp";
import OpenedBearSkin5 from "../images/skins/aztron-opened.webp";
import DollarIcon from "../images/dollar-coin2.webp";
import TicketIcon from "/ticket.webp";

export const POINTS_TO_ADD = [1, 3, 5, 7, 10];

export const SKINS = [
  {
    id: 1,
    image: BearSkin1,
    openedImage: OpenedBearSkin1,
    requiredPoints: 0,
    colorCN: "color-brown",
    points: 1,
  },
  {
    id: 2,
    image: BearSkin2,
    openedImage: OpenedBearSkin2,
    requiredPoints: 20000,
    colorCN: "color-red",
    points: 3,
  },
  {
    id: 3,
    image: BearSkin5,
    openedImage: OpenedBearSkin5,
    requiredPoints: 60000,
    colorCN: "color-white",
    points: 5,
  },
  {
    id: 4,
    image: BearSkin4,
    openedImage: OpenedBearSkin4,
    requiredPoints: 120000,
    colorCN: "color-green",
    points: 7,
  },
  {
    id: 5,
    image: BearSkin3,
    openedImage: OpenedBearSkin3,
    requiredPoints: 200000,
    colorCN: "color-purple",
    points: 10,
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

export const TICKET_REWARDS = [
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
  },
  {
    reward: 1,
    icon: TicketIcon,
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

export const levelThresholds = [0, 20000, 60000, 120000, 200000];
