import type { ReactNode } from "react";

import type { FeetState } from "../types.ts";

export const STANCES = [
  "yohi-dachi",
  "heisoku-dachi",
  "zenkutsu-dachi",
  "han-zenkutsu-dachi",
  "kokutsu-dachi",
] as const;

export type Stance = (typeof STANCES)[number];

export type RawStanceMeta = {
  englishName: string;
  japaneseName: string;
  description: ReactNode;
  rightFootLeadingState: FeetState;
};

export const RAW_STANCES_META: Record<Stance, RawStanceMeta> = {
  "yohi-dachi": {
    englishName: "Parallel stance",
    japaneseName: "平行立ち",
    description: (
      <>
        Heiko-dachi is an attention stance or "get ready" stance used in some styles. It is generally performed after
        bowing (musubi-dachi), right before kihon practice or kata. Heiko-dachi is also the stance performed when
        listening to instructions (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootLeadingState: {
      left: {
        heel: { x: -20, y: 0 },
        angle: Math.PI / 2,
      },
      right: {
        heel: { x: 20, y: 0 },
        angle: Math.PI / 2,
      },
    },
  },
  "heisoku-dachi": {
    englishName: "Closed Foot Stance",
    japaneseName: "閉足立ち",
    description: (
      <>
        Heisoku-dachi is the ready stance used in some kata. It is similar to musubi-dachi, but the feet are kept
        together (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootLeadingState: {
      left: {
        heel: { x: -6, y: 0 },
        angle: Math.PI / 2,
      },
      right: {
        heel: { x: 6, y: 0 },
        angle: Math.PI / 2,
      },
    },
  },
  "zenkutsu-dachi": {
    englishName: "Front Stance",
    japaneseName: "前屈立ち",
    description: (
      <>
        Zenkutsu-dachi, a.k.a. forward stance, is one of the most common stances in Karate. It’s a stance that allows
        you to reach far and generate a great deal of power generation moving forward. Like with most stances, the
        Japanese version of Zenkutsu-dachi tends to be very long and wide compared to the shorter, more natural Okinawan
        version. Zenkutsu-dachi is a stance used as a conditioning exercise, not for self-defense nor kumite. The "long"
        version is a stabilizing stance that strengthens and tones the thighs, hips and glutes (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootLeadingState: {
      left: {
        heel: { x: -20, y: -30 },
        angle: Math.PI / 2 + Math.PI / 12,
      },
      right: {
        heel: { x: 20, y: 30 },
        angle: Math.PI / 2,
      },
    },
  },
  "han-zenkutsu-dachi": {
    englishName: "Half Front Stance",
    japaneseName: "半前屈立ち",
    description: (
      <>
        Han Zenkutsu-dachi is the shorter or half version of Zenkutsu-dachi. It’s a stance suitable for self-defense and
        kumite or sparring as it offers greater mobility. Han Zenkutsu-dachi is a neutral stance that allows you to
        quickly move back into the defensive Neko-ashi-dachi or the thrust forward into a full Zenkutsu-dachi or
        Sanchin-dachi (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootLeadingState: {
      left: {
        heel: { x: -20, y: -20 },
        angle: Math.PI / 2 + Math.PI / 12,
      },
      right: {
        heel: { x: 20, y: 20 },
        angle: Math.PI / 2,
      },
    },
  },
  "kokutsu-dachi": {
    englishName: "Back Stance",
    japaneseName: "後屈立ち",
    description: (
      <>
        Kokutsu-dachi is a defensive position that allows you to quickly retreat or move back and counterattack. It’s
        great to evade attack from your opponent (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
    rightFootLeadingState: {
      left: {
        heel: { x: 0, y: -60 },
        angle: Math.PI,
      },
      right: {
        heel: { x: 0, y: 0 },
        angle: Math.PI / 2,
      },
    },
  },
};
