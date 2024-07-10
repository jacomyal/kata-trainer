import type { ReactNode } from "react";

import type { BodyState } from "../types.ts";

export const STANCES = [
  "yohi-dachi",
  "heisoku-dachi",
  "zenkutsu-dachi",
  "han-zenkutsu-dachi",
  "kokutsu-dachi",
] as const;

export type Stance = (typeof STANCES)[number];

export type RawStanceMeta = {
  name: string;
  kanji: string;
  romaji: string;
  description: ReactNode;
  rightFootLeadingState: BodyState["feet"];
};

export const RAW_STANCES_META: Record<Stance, RawStanceMeta> = {
  "yohi-dachi": {
    name: "Parallel stance",
    kanji: "平行立ち",
    romaji: "Yohi Dachi",
    description: (
      <>
        Heiko-dachi is an attention stance or "get ready" stance used in some styles. It is generally performed after
        bowing (musubi-dachi), right before kihon practice or kata. Heiko-dachi is also the stance performed when
        listening to instructions (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
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
    name: "Closed Foot Stance",
    kanji: "閉足立ち",
    romaji: "Heisoku Dachi",
    description: (
      <>
        Heisoku-dachi is the ready stance used in some kata. It is similar to musubi-dachi, but the feet are kept
        together (<a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
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
    name: "Front Stance",
    kanji: "前屈立ち",
    romaji: "Zenkutsu Dachi",
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
    name: "Half Front Stance",
    kanji: "半前屈立ち",
    romaji: "Han Zenkutsu Dachi",
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
    name: "Back Stance",
    kanji: "後屈立ち",
    romaji: "Kokutsu Dachi",
    description: (
      <>
        Kokutsu-dachi is a defensive position that allows you to quickly retreat or move back and counterattack. It’s
        great to evade attack from your opponent (
        <a href="https://www.thekaratelifestyle.com/list-of-karate-stances/">source</a>).
      </>
    ),
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
};
