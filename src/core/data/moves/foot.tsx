import type { ReactNode } from "react";



import type { Height } from "./height.ts";


export const FOOT_MOVES = ["mae-geri", "yoko-geri", "fumi-komi"] as const;

export type FootMove = (typeof FOOT_MOVES)[number];

export type RawFootMoveMeta = {
  name: string;
  romaji: string;
  kanji: string;
  description: ReactNode;
  defaultStrikeHeight?: Height;
};

export const RAW_FOOT_MOVES_META: Record<FootMove, RawFootMoveMeta> = {
  "mae-geri": {
    name: "Front Kick",
    romaji: "Mae Geri",
    kanji: "前蹴り",
    description: <>Front kick with the ball of the foot</>,
  },
  "yoko-geri": {
    name: "Side Kick",
    romaji: "Yoko Geri",
    kanji: "横蹴り",
    description: <>Side kick with the edge of the foot</>,
  },
  "fumi-komi": {
    name: "Stomp Kick",
    romaji: "Fumi Komi",
    kanji: "踏み込み",
    description: <>Stomping kick with the heel, usually aimed at the opponent's lower body or legs</>,
  },
};