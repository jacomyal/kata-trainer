import type { ReactNode } from "react";

import type { BodyState } from "../types.ts";

export const STANCES = [
  "yohi-dachi",
  "heisoku-dachi",
  "zenkutsu-dachi",
  "han-zenkutsu-dachi",
  "kokutsu-dachi",
  "kiba-dachi",
] as const;

export type Stance = (typeof STANCES)[number];

export type RawStanceMeta = {
  name: string;
  kanji: string;
  romaji: string;
  description: ReactNode;
  rightFootLeadingState: BodyState["feet"];
  rightFootBodyAngle: number;
};

export const RAW_STANCES_META: Record<Stance, RawStanceMeta> = {
  "yohi-dachi": {
    name: "Position parallèle",
    kanji: "平行立ち",
    romaji: "Yohi Dachi",
    description: (
      <>
        Heiko-dachi est une position d'attention ou de "préparation" utilisée dans certains styles. Elle est
        généralement effectuée après le salut (musubi-dachi), juste avant la pratique du kihon ou du kata. Heiko-dachi
        est également la position adoptée lorsqu'on écoute des instructions (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootBodyAngle: 0,
    rightFootLeadingState: {
      left: {
        x: -20,
        y: 0,
        angle: 0,
      },
      right: {
        x: 20,
        y: 0,
        angle: 0,
      },
    },
  },
  "heisoku-dachi": {
    name: "Position des pieds joints",
    kanji: "閉足立ち",
    romaji: "Heisoku Dachi",
    description: (
      <>
        Heisoku-dachi est la position de préparation utilisée dans certains katas. Elle est similaire à musubi-dachi,
        mais les pieds sont joints (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootBodyAngle: 0,
    rightFootLeadingState: {
      left: {
        x: -6,
        y: 0,
        angle: 0,
      },
      right: {
        x: 6,
        y: 0,
        angle: 0,
      },
    },
  },
  "zenkutsu-dachi": {
    name: "Position avant",
    kanji: "前屈立ち",
    romaji: "Zenkutsu Dachi",
    description: (
      <>
        Zenkutsu-dachi, également connue sous le nom de position avant, est l'une des positions les plus courantes en
        karaté. C'est une position qui permet d'atteindre loin et de générer beaucoup de puissance en avançant. Comme
        pour la plupart des positions, la version japonaise de Zenkutsu-dachi tend à être très longue et large par
        rapport à la version plus courte et naturelle de l'Okinawa. Zenkutsu-dachi est utilisée comme exercice de
        conditionnement, pas pour l'autodéfense ni pour le kumite. La version "longue" est une position stabilisante qui
        renforce et tonifie les cuisses, les hanches et les fessiers (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootBodyAngle: 0,
    rightFootLeadingState: {
      left: {
        x: -20,
        y: -40,
        angle: Math.PI / 10,
      },
      right: {
        x: 20,
        y: 20,
        angle: 0,
      },
    },
  },
  "han-zenkutsu-dachi": {
    name: "Demi-position avant",
    kanji: "半前屈立ち",
    romaji: "Han Zenkutsu Dachi",
    description: (
      <>
        Han Zenkutsu-dachi est la version plus courte ou demi de Zenkutsu-dachi. C'est une position adaptée à
        l'autodéfense et au kumite ou sparring car elle offre une plus grande mobilité. Han Zenkutsu-dachi est une
        position neutre qui permet de passer rapidement à la position défensive Neko-ashi-dachi ou de se propulser vers
        l'avant en pleine Zenkutsu-dachi ou Sanchin-dachi (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootBodyAngle: 0,
    rightFootLeadingState: {
      left: {
        x: -20,
        y: -15,
        angle: Math.PI / 10,
      },
      right: {
        x: 20,
        y: 25,
        angle: 0,
      },
    },
  },
  "kokutsu-dachi": {
    name: "Position arrière",
    kanji: "後屈立ち",
    romaji: "Kokutsu Dachi",
    description: (
      <>
        Kokutsu-dachi est une position défensive qui permet de reculer rapidement ou de se déplacer en arrière et de
        contre-attaquer. Elle est idéale pour esquiver une attaque de l'adversaire (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootBodyAngle: Math.PI / 3,
    rightFootLeadingState: {
      left: {
        x: 0,
        y: -10,
        angle: Math.PI / 2,
      },
      right: {
        x: 0,
        y: 50,
        angle: 0,
      },
    },
  },
  "kiba-dachi": {
    name: "Position du cavalier",
    kanji: "騎馬立ち",
    romaji: "Kiba Dachi",
    description: (
      <>
        Position large avec les genoux fléchis et le poids réparti uniformément, ressemblant à la position de monter à
        cheval
      </>
    ),
    rightFootBodyAngle: Math.PI / 2,
    rightFootLeadingState: {
      left: {
        x: 0,
        y: -30,
        angle: Math.PI / 2,
      },
      right: {
        x: 0,
        y: 30,
        angle: Math.PI / 2,
      },
    },
  },
};
