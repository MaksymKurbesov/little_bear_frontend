import TimberSkinImage from "../images/bears/timber/timber.webp";
import BricknSkinImage from "../images/bears/brickn/brickn.webp";
import AztronSkinImage from "../images/bears/aztron/aztron.webp";
import BrizzySkinImage from "../images/bears/brizzy/brizzy.webp";
import NeyonSkinImage from "../images/bears/neyon/neyon.webp";
import MickeySkinImage from "../images/bears/mickey/mickey.png";
import KyberonSkinImage from "../images/bears/kyberon/kyberon.webp";
import IntelionSkinImage from "../images/bears/intelion/intelion.webp";

import BricknOpenedImage from "../images/bears/brickn/brickn-opened.webp";
import AztronOpenedImage from "../images/bears/aztron/aztron-opened.webp";
import BrizzyOpenedImage from "../images/bears/brizzy/brizzy-opened.webp";
import NeyonOpenedImage from "../images/bears/aztron/aztron-opened.webp";
import MickeyOpenedImage from "../images/bears/mickey/mickey-opened.png";
import KyberonOpenedImage from "../images/bears/kyberon/kyberon-opened.webp";
import IntelionOpenedImage from "../images/bears/intelion/intelion-opened.webp";
import DollarIcon from "../images/dollar-coin2.webp";

export const SKINS = [
  {
    id: 1,
    image: TimberSkinImage,
    openedImage: TimberSkinImage,
    requiredPoints: 0,
    colorCN: "color-brown",
    points: 1,
    name: "timber",
    isPurchasable: false,
    requiredLevel: 1,
  },
  {
    id: 2,
    image: BricknSkinImage,
    openedImage: BricknOpenedImage,
    requiredPoints: 20000,
    colorCN: "color-red",
    points: 3,
    name: "brickn",
    isPurchasable: false,
    // backgroundImage: BGBear2,
    requiredLevel: 2,
  },
  {
    id: 3,
    image: AztronSkinImage,
    openedImage: AztronOpenedImage,
    requiredPoints: 60000,
    colorCN: "color-white",
    points: 5,
    name: "aztron",
    isPurchasable: false,
    // backgroundImage: BGBear3,
    requiredLevel: 3,
  },
  {
    id: 4,
    image: BrizzySkinImage,
    openedImage: BrizzyOpenedImage,
    requiredPoints: 120000,
    colorCN: "color-green",
    points: 7,
    name: "brizzy",
    isPurchasable: false,
    // backgroundImage: BGBear4,
    requiredLevel: 4,
  },
  {
    id: 5,
    image: NeyonSkinImage,
    openedImage: NeyonOpenedImage,
    requiredPoints: 200000,
    colorCN: "color-purple",
    points: 10,
    name: "neyon",
    isPurchasable: false,
    // backgroundImage: BGBear5,
    requiredLevel: 5,
  },
  {
    id: 6,
    image: KyberonSkinImage,
    openedImage: KyberonOpenedImage,
    requiredPoints: 750000,
    colorCN: "color-purple",
    points: 20,
    name: "kyberon",
    isPurchasable: false,
    // backgroundImage: BGKyberon,
    requiredLevel: 6,
  },
  {
    id: 7,
    image: IntelionSkinImage,
    openedImage: IntelionOpenedImage,
    requiredPoints: 2000000,
    colorCN: "color-aqua",
    points: 50,
    name: "intelion",
    isPurchasable: false,
    // backgroundImage: BGBear6,
    requiredLevel: 7,
  },
  {
    id: 8,
    image: MickeySkinImage,
    openedImage: MickeyOpenedImage,
    requiredPoints: null,
    colorCN: "color-red",
    points: 30,
    name: "mickey",
    price: 30,
    isPurchasable: true,
    // backgroundImage: BGBear6,
    requiredLevel: null,
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
