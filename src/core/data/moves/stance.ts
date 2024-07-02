export const STANCES = [
  // Ready stances
  "yohi-dachi",

  // Forward stances
  "zenkutsu-dachi",

  // Backward stances
  "kokutsu-dachi",

  // Horse stances
  "kiba-dachi",
  "shiko-dachi",

  // Cat stances
  "nekoashi-dachi",

  // Hourglass stances
  "sanchin-dachi",
  "hangetsu-dachi",

  // Natural stances
  "fudo-dachi",
  "heiko-dachi",
  "hachiji-dachi",
  "musubi-dachi",
  "heisoku-dachi",

  // Crossed stances
  "teiji-dachi",
  "kosa-dachi",

  // L-shaped stances
  "renoji-dachi",

  // Crane stances
  "tsuruashi-dachi",

  // Hooked stances
  "kake-dachi",
] as const;

export type Stance = (typeof STANCES)[number];

export type StanceMeta = {
  englishName: string;
  japaneseName: string;
  description: string;
};

export const STANCES_META: Record<Stance, StanceMeta> = {
  "yohi-dachi": {
    englishName: "Ready Stance",
    japaneseName: "用意立ち",
    description:
      "A preparatory stance where the feet are together or slightly apart, and the hands are positioned in front of the body, ready for action.",
  },
  "zenkutsu-dachi": {
    englishName: "Front Stance",
    japaneseName: "前屈立ち",
    description: "Forward stance with weight distribution primarily on the front leg",
  },
  "kokutsu-dachi": {
    englishName: "Back Stance",
    japaneseName: "後屈立ち",
    description: "Backward stance with weight distribution primarily on the back leg",
  },
  "shiko-dachi": {
    englishName: "Sumo Stance",
    japaneseName: "四股立ち",
    description: "Wide, low stance with feet turned outward, similar to the stance used in sumo wrestling",
  },
  "kiba-dachi": {
    englishName: "Horse Stance",
    japaneseName: "騎馬立ち",
    description: "Wide stance with knees bent and weight evenly distributed",
  },
  "nekoashi-dachi": {
    englishName: "Cat Stance",
    japaneseName: "猫足立ち",
    description: "Stance with weight primarily on the back leg and front foot lightly touching the ground",
  },
  "sanchin-dachi": {
    englishName: "Hourglass Stance",
    japaneseName: "三戦立ち",
    description: "Stance with feet turned inward, weight evenly distributed",
  },
  "hangetsu-dachi": {
    englishName: "Half-Moon Stance",
    japaneseName: "半月立ち",
    description: "Stance with feet turned inward in a crescent shape",
  },
  "fudo-dachi": {
    englishName: "Immovable Stance",
    japaneseName: "不動立ち",
    description: "Natural stance with slight bend in the knees, weight evenly distributed",
  },
  "heiko-dachi": {
    englishName: "Parallel Stance",
    japaneseName: "平行立ち",
    description: "Stance with feet shoulder-width apart and parallel",
  },
  "hachiji-dachi": {
    englishName: "Open Natural Stance",
    japaneseName: "八字立ち",
    description: "Natural stance with feet shoulder-width apart and toes pointed slightly outward",
  },
  "musubi-dachi": {
    englishName: "Heels Together Stance",
    japaneseName: "結び立ち",
    description: "Stance with heels together and toes pointing outward",
  },
  "heisoku-dachi": {
    englishName: "Closed Foot Stance",
    japaneseName: "閉足立ち",
    description: "Stance with feet together and toes pointing forward",
  },
  "teiji-dachi": {
    englishName: "T Stance",
    japaneseName: "丁字立ち",
    description: "Stance with feet forming a T shape, one foot placed at the arch of the other",
  },
  "kosa-dachi": {
    englishName: "Crossed Stance",
    japaneseName: "交差立ち",
    description: "Stance with legs crossed, weight primarily on one leg",
  },
  "renoji-dachi": {
    englishName: "L Stance",
    japaneseName: "レの字立ち",
    description: "Stance with feet forming an L shape, one foot placed at a 90-degree angle to the other",
  },
  "tsuruashi-dachi": {
    englishName: "Crane Stance",
    japaneseName: "鶴足立ち",
    description: "One-legged stance with the other foot tucked against the standing leg",
  },
  "kake-dachi": {
    englishName: "Hooked Stance",
    japaneseName: "掛け立ち",
    description: "Stance with one leg hooked behind the other, weight on the back leg",
  },
};
