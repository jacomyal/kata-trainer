import type { ReactNode } from "react";

import type { Height } from "./height.ts";

export const FOOT_MOVES = ["mae-geri", "yoko-geri"] as const;

export type FootMove = (typeof FOOT_MOVES)[number];

export type RawFootMoveMeta = {
  name: string;
  japaneseName: string;
  description: ReactNode;
  defaultStrikeHeight?: Height;
};

export const RAW_FOOT_MOVES_META: Record<FootMove, RawFootMoveMeta> = {
  "mae-geri": {
    name: "Front Kick",
    japaneseName: "前蹴り",
    description: <>Front kick with the ball of the foot</>,
  },
  "yoko-geri": {
    name: "Side Kick",
    japaneseName: "横蹴り",
    description: <>Side kick with the edge of the foot</>,
  },
};
