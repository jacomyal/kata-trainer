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
    name: "Coup de pied frontal",
    romaji: "Mae Geri",
    kanji: "前蹴り",
    description: <>Coup de pied frontal avec la plante du pied</>,
  },
  "yoko-geri": {
    name: "Coup de pied latéral",
    romaji: "Yoko Geri",
    kanji: "横蹴り",
    description: <>Coup de pied latéral avec le tranchant du pied</>,
  },
  "fumi-komi": {
    name: "Coup de pied écrasant",
    romaji: "Fumi Komi",
    kanji: "踏み込み",
    description: (
      <>Coup de pied écrasant avec le talon, généralement dirigé vers le bas du corps ou les jambes de l'adversaire</>
    ),
  },
};
