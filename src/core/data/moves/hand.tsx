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

export type RawHandMoveMeta = {
  name: string;
  kanji: string;
  romaji: string;
  description: ReactNode;
  bodyAngle?: number;
  isClosedFist?: boolean;
  defaultStrikeHeight?: Height;
  defaultOtherHandPosition?: HandMove;
};

export const RAW_HAND_MOVES_META: Record<HandMove, RawHandMoveMeta> = {
  hikite: {
    name: "Pulling Hand",
    kanji: "引き手",
    romaji: "Hikite",
    description: <>The pulling hand used to retract the arm quickly to the hip</>,
    isClosedFist: true,
  },
  tsuki: {
    name: "Punch",
    kanji: "突き",
    romaji: "Tsuki",
    description: <>Forward stepping punch</>,
    isClosedFist: true,
  },
  "ura-zuki": {
    name: "Close Punch",
    kanji: "裏突き",
    romaji: "Ura Zuki",
    description: <>Short distance punch with the fist</>,
    isClosedFist: true,
  },
  nukite: {
    name: "Spear Hand Strike",
    kanji: "貫手",
    romaji: "Nukite",
    description: <>Thrust with the fingertips</>,
    isClosedFist: false,
    defaultOtherHandPosition: "osae-uke",
  },
  "uraken-uchi": {
    name: "Back Fist Strike",
    kanji: "裏拳打ち",
    romaji: "Uraken Uchi",
    description: <>Strike with the back of the fist</>,
    isClosedFist: true,
  },
  "tettsui-uchi": {
    name: "Hammer Fist Strike",
    kanji: "鉄槌打ち",
    romaji: "Tettsui Uchi",
    description: <>Strike with the bottom of the fist</>,
    isClosedFist: true,
  },
  "age-uke": {
    name: "Rising Block",
    kanji: "上げ受け",
    romaji: "Age Uke",
    description: <>Rising block aimed at the upper level</>,
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "ude-uke": {
    name: "Forearm Block",
    kanji: "腕受け",
    romaji: "Ude Uke",
    description: (
      <>General term for blocks using the forearm, can refer to inside or outside blocks depending on the context</>
    ),
    defaultStrikeHeight: "chudan",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "tate-uke": {
    name: "Vertical Block",
    kanji: "縦受け",
    romaji: "Tate Uke",
    description: <>Vertical block using the forearm</>,
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "uchi-uke": {
    name: "Inside Block",
    kanji: "内受け",
    romaji: "Uchi Uke",
    description: <>Block from the inside to the outside</>,
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "soto-uke": {
    name: "Outside Block",
    kanji: "外受け",
    romaji: "Soto Uke",
    description: <>Block from the outside to the inside</>,
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "osae-uke": {
    name: "Pressing Block",
    kanji: "押さえ受け",
    romaji: "Osae Uke",
    description: <>Pressing block to control the opponent's attack</>,
    isClosedFist: false,
    bodyAngle: Math.PI / 4,
  },
  "shuto-uke": {
    name: "Knife Hand Block",
    kanji: "手刀受け",
    romaji: "Shuto Uke",
    description: <>Block using the edge of the hand</>,
    isClosedFist: false,
    defaultOtherHandPosition: "osae-uke",
    bodyAngle: Math.PI / 3,
  },
  "morote-uke": {
    name: "Augmented Block",
    kanji: "諸手受け",
    romaji: "Morote Uke",
    description: <>Block with one hand supported by the other</>,
    isClosedFist: true,
  },
  "gedan-barai": {
    name: "Downward Block",
    kanji: "下段払い",
    romaji: "Gedan Barai",
    description: <>Sweeping block aimed at the lower level</>,
    defaultStrikeHeight: "gedan",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "ude-soete": {
    name: "Reinforced Forearm Block",
    kanji: "腕添え",
    romaji: "Ude Soete",
    description: <>Reinforced block using the forearm</>,
    isClosedFist: true,
  },
};
