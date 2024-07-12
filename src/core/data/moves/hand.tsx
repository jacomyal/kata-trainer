import type { ReactNode } from "react";

import type { AngledPosition } from "../types.ts";
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
  "empi-uke",
  "tate-shuto-uke",
  "tate-zuki",
  "ushiro-empi-uchi",
] as const;

export type HandMove = (typeof HAND_MOVES)[number];

export const PALMS = ["sky", "ground", "side", "front", "back"] as const;
export type Palm = (typeof PALMS)[number];

export type RawHandMoveMeta = {
  name: string;
  kanji: string;
  romaji: string;
  description: ReactNode;
  rightHandPosition: AngledPosition;
  bodyAngle?: number;
  isClosedFist?: boolean;
  palmDirection?: Palm;
  defaultStrikeHeight?: Height;
  defaultOtherHandMove?: HandMove;
};

export const DEFAULT_HAND_MOVE: HandMove = "hikite";

export const DEFAULT_PALM_DIRECTION: Palm = "ground";

export const RAW_HAND_MOVES_META: Record<HandMove, RawHandMoveMeta> = {
  hikite: {
    name: "Main Tirante",
    kanji: "引き手",
    romaji: "Hikite",
    description: <>La main tirante utilisée pour rétracter le bras rapidement vers la hanche</>,
    rightHandPosition: {
      x: 20,
      y: -5,
      angle: 0,
    },
    palmDirection: "sky",
    isClosedFist: true,
  },
  tsuki: {
    name: "Coup de Poing",
    kanji: "突き",
    romaji: "Tsuki",
    description: <>Coup de poing en avançant</>,
    rightHandPosition: {
      x: 10,
      y: 50,
      angle: 0,
    },
    palmDirection: "ground",
    isClosedFist: true,
  },
  "ura-zuki": {
    name: "Coup de Poing Court",
    kanji: "裏突き",
    romaji: "Ura Zuki",
    description: <>Coup de poing à courte distance avec le poing</>,
    rightHandPosition: {
      x: 10,
      y: 40,
      angle: 0,
    },
    palmDirection: "ground",
    isClosedFist: true,
  },
  nukite: {
    name: "Coup de Main en Lance",
    kanji: "貫手",
    romaji: "Nukite",
    description: <>Poussée avec le bout des doigts</>,
    rightHandPosition: {
      x: 10,
      y: 50,
      angle: 0,
    },
    palmDirection: "side",
    isClosedFist: false,
    defaultOtherHandMove: "osae-uke",
  },
  "uraken-uchi": {
    name: "Coup de Poing Inversé",
    kanji: "裏拳打ち",
    romaji: "Uraken Uchi",
    description: <>Coup de poing avec le dos de la main</>,
    rightHandPosition: {
      x: 10,
      y: 40,
      angle: 0,
    },
    palmDirection: "sky",
    isClosedFist: true,
  },
  "tettsui-uchi": {
    name: "Coup de Poing Marteau",
    kanji: "鉄槌打ち",
    romaji: "Tettsui Uchi",
    description: <>Coup de poing avec le bas du poing</>,
    rightHandPosition: {
      x: 10,
      y: 40,
      angle: 0,
    },
    palmDirection: "side",
    isClosedFist: true,
  },
  "age-uke": {
    name: "Blocage Ascendant",
    kanji: "上げ受け",
    romaji: "Age Uke",
    description: <>Blocage ascendant visant le niveau supérieur</>,
    rightHandPosition: {
      x: -10,
      y: 30,
      angle: Math.PI / 2 - Math.PI / 10,
    },
    palmDirection: "ground",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "ude-uke": {
    name: "Blocage de l'Avant-bras",
    kanji: "腕受け",
    romaji: "Ude Uke",
    description: (
      <>
        Terme général pour les blocages utilisant l'avant-bras, peut désigner des blocages internes ou externes selon le
        contexte
      </>
    ),
    rightHandPosition: {
      x: -15,
      y: 20,
      angle: (2 * Math.PI) / 3,
    },
    palmDirection: "ground",
    defaultStrikeHeight: "chudan",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "tate-uke": {
    name: "Blocage Vertical",
    kanji: "縦受け",
    romaji: "Tate Uke",
    description: <>Blocage vertical utilisant l'avant-bras</>,
    rightHandPosition: {
      x: 10,
      y: 40,
      angle: 0,
    },
    palmDirection: "front",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "uchi-uke": {
    name: "Blocage Intérieur",
    kanji: "内受け",
    romaji: "Uchi Uke",
    description: <>Blocage de l'intérieur vers l'extérieur</>,
    rightHandPosition: {
      x: 20,
      y: 30,
      angle: 0,
    },
    palmDirection: "back",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "soto-uke": {
    name: "Blocage Extérieur",
    kanji: "外受け",
    romaji: "Soto Uke",
    description: <>Blocage de l'extérieur vers l'intérieur</>,
    rightHandPosition: {
      x: 20,
      y: 30,
      angle: 0,
    },
    palmDirection: "ground",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "osae-uke": {
    name: "Blocage Pressant",
    kanji: "押さえ受け",
    romaji: "Osae Uke",
    description: <>Blocage pressant pour contrôler l'attaque de l'adversaire</>,
    rightHandPosition: {
      x: 0,
      y: 20,
      angle: Math.PI / 2,
    },
    palmDirection: "ground",
    isClosedFist: false,
    bodyAngle: Math.PI / 4,
  },
  "shuto-uke": {
    name: "Blocage avec le Tranchant de la Main",
    kanji: "手刀受け",
    romaji: "Shuto Uke",
    description: <>Blocage utilisant le tranchant de la main</>,
    rightHandPosition: {
      x: 5,
      y: 40,
      angle: Math.PI / 6,
    },
    palmDirection: "ground",
    isClosedFist: false,
    defaultOtherHandMove: "osae-uke",
    bodyAngle: Math.PI / 3,
  },
  "morote-uke": {
    name: "Blocage Renforcé",
    kanji: "諸手受け",
    romaji: "Morote Uke",
    description: <>Blocage avec une main soutenue par l'autre</>,
    rightHandPosition: {
      x: 0,
      y: 40,
      angle: Math.PI / 8,
    },
    palmDirection: "sky",
    isClosedFist: true,
  },
  "gedan-barai": {
    name: "Blocage Bas",
    kanji: "下段払い",
    romaji: "Gedan Barai",
    description: <>Blocage balayé visant le niveau inférieur</>,
    rightHandPosition: {
      x: 15,
      y: 40,
      angle: Math.PI / 8,
    },
    palmDirection: "ground",
    defaultStrikeHeight: "gedan",
    isClosedFist: true,
    bodyAngle: Math.PI / 4,
  },
  "ude-soete": {
    name: "Blocage Renforcé de l'Avant-bras",
    kanji: "腕添え",
    romaji: "Ude Soete",
    description: <>Blocage renforcé utilisant l'avant-bras</>,
    rightHandPosition: {
      x: 20,
      y: 20,
      angle: 0,
    },
    palmDirection: "side",
    isClosedFist: true,
  },
  "empi-uke": {
    name: "Blocage avec le Coude",
    kanji: "猿臂受け",
    romaji: "Empi-uke",
    description: <>Blocage utilisant le coude, généralement pour bloquer une attaque à la tête ou au haut du corps</>,
    rightHandPosition: {
      x: 20,
      y: 0,
      angle: Math.PI / 2,
    },
    palmDirection: "back",
    isClosedFist: true,
  },
  "tate-shuto-uke": {
    name: "Blocage Vertical avec le Tranchant de la Main",
    kanji: "縦手刀受け",
    romaji: "Tate-shuto-uke",
    description: <>Blocage vertical utilisant le tranchant de la main</>,
    rightHandPosition: {
      x: 20,
      y: 50,
      angle: 0,
    },
    palmDirection: "side",
    isClosedFist: false,
  },
  "tate-zuki": {
    name: "Coup de Poing Vertical",
    kanji: "縦突き",
    romaji: "Tate-zuki",
    description: <>Coup de poing vertical avec le poing tourné sur le côté</>,
    rightHandPosition: {
      x: 10,
      y: 50,
      angle: 0,
    },
    palmDirection: "side",
    isClosedFist: true,
  },
  "ushiro-empi-uchi": {
    name: "Coup de Coude Arrière",
    kanji: "後ろ猿臂打ち",
    romaji: "Ushiro-empi-uchi",
    description: <>Coup de coude vers l'arrière, généralement dirigé vers un adversaire derrière</>,
    rightHandPosition: {
      x: -20,
      y: 0,
      angle: 180,
    },
    isClosedFist: true,
  },
};
