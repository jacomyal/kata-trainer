import type { ReactNode } from "react";

import type { Height } from "./height.ts";

export const HAND_MOVES = [
  "hikite",
  "tsuki",
  "ura-zuki",
  "nukite",
  "uraken-uchi",
  "tettsui-uchi",
  "age-uke",
  "ude-uke",
  "tate-uke",
  "uchi-uke",
  "soto-uke",
  "osae-uke",
  "shuto-uke",
  "morote-uke",
  "gedan-barai",
  "ude-soete",
] as const;

export type HandMove = (typeof HAND_MOVES)[number];

export type HandMoveMeta = {
  englishName: string;
  japaneseName: string;
  description: ReactNode;
  isClosedFist?: boolean;
  defaultStrikeHeight?: Height;
  defaultOtherHandPosition?: HandMove;
};

export const HAND_MOVES_META: Record<string, HandMoveMeta> = {
  hikite: {
    englishName: "Pulling Hand",
    japaneseName: "引き手",
    description: <>The pulling hand used to retract the arm quickly to the hip</>,
    isClosedFist: true,
  },
  tsuki: {
    englishName: "Punch",
    japaneseName: "突き",
    description: <>Forward stepping punch</>,
    isClosedFist: true,
  },
  "ura-zuki": {
    englishName: "Close Punch",
    japaneseName: "裏突き",
    description: <>Short distance punch with the fist</>,
    isClosedFist: true,
  },
  nukite: {
    englishName: "Spear Hand Strike",
    japaneseName: "貫手",
    description: <>Thrust with the fingertips</>,
    isClosedFist: false,
    defaultOtherHandPosition: "osae-uke",
  },
  "uraken-uchi": {
    englishName: "Back Fist Strike",
    japaneseName: "裏拳打ち",
    description: <>Strike with the back of the fist</>,
    isClosedFist: true,
  },
  "tettsui-uchi": {
    englishName: "Hammer Fist Strike",
    japaneseName: "鉄槌打ち",
    description: <>Strike with the bottom of the fist</>,
    isClosedFist: true,
  },
  "age-uke": {
    englishName: "Rising Block",
    japaneseName: "上げ受け",
    description: <>Rising block aimed at the upper level</>,
    isClosedFist: true,
  },
  "ude-uke": {
    englishName: "Forearm Block",
    japaneseName: "腕受け",
    description: (
      <>General term for blocks using the forearm, can refer to inside or outside blocks depending on the context</>
    ),
    defaultStrikeHeight: "chudan",
    isClosedFist: true,
  },
  "tate-uke": {
    englishName: "Vertical Block",
    japaneseName: "縦受け",
    description: <>Vertical block using the forearm</>,
    isClosedFist: true,
  },
  "uchi-uke": {
    englishName: "Inside Block",
    japaneseName: "内受け",
    description: <>Block from the inside to the outside</>,
    isClosedFist: true,
  },
  "soto-uke": {
    englishName: "Outside Block",
    japaneseName: "外受け",
    description: <>Block from the outside to the inside</>,
    isClosedFist: true,
  },
  "osae-uke": {
    englishName: "Pressing Block",
    japaneseName: "押さえ受け",
    description: <>Pressing block to control the opponent's attack</>,
    isClosedFist: false,
  },
  "shuto-uke": {
    englishName: "Knife Hand Block",
    japaneseName: "手刀受け",
    description: <>Block using the edge of the hand</>,
    isClosedFist: false,
    defaultOtherHandPosition: "osae-uke",
  },
  "morote-uke": {
    englishName: "Augmented Block",
    japaneseName: "諸手受け",
    description: <>Block with one hand supported by the other</>,
    isClosedFist: true,
  },
  "gedan-barai": {
    englishName: "Downward Block",
    japaneseName: "下段払い",
    description: <>Sweeping block aimed at the lower level</>,
    defaultStrikeHeight: "gedan",
    isClosedFist: true,
  },
  "ude-soete": {
    englishName: "Reinforced Forearm Block",
    japaneseName: "腕添え",
    description: <>Reinforced block using the forearm</>,
    isClosedFist: true,
  },
};
