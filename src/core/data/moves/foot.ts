import type { Height } from "./height.ts";

export const FOOT_MOVES = [
  // Front kicks
  "mae-geri",
  "mae-geri-keage",
  "mae-geri-kekomi",

  // Side kicks
  "yoko-geri",
  "yoko-geri-keage",
  "yoko-geri-kekomi",

  // Roundhouse kicks
  "mawashi-geri",
  "ura-mawashi-geri",
  "ushiro-mawashi-geri",

  // Back kicks
  "ushiro-geri",
  "ushiro-geri-keage",
  "ushiro-geri-kekomi",

  // Crescent kicks
  "mikazuki-geri",

  // Stomping and low kicks
  "fumikomi",
  "sokuto-geri",
  "kansetsu-geri",

  // Jumping kicks
  "nidan-geri",

  // Heel kicks
  "kakato-geri",

  // Knee strikes
  "hiza-geri",

  // Sweeping
  "ashi-barai",
] as const;

export type FootMove = (typeof FOOT_MOVES)[number];

export type FootMoveMeta = {
  englishName: string;
  japaneseName: string;
  strikeHeight: Height;
  description: string;
};

export const FOOT_MOVES_META: Record<FootMove, FootMoveMeta> = {
  "mae-geri": {
    englishName: "Front Kick",
    japaneseName: "前蹴り",
    strikeHeight: "chudan",
    description: "Front kick with the ball of the foot",
  },
  "yoko-geri": {
    englishName: "Side Kick",
    japaneseName: "横蹴り",
    strikeHeight: "chudan",
    description: "Side kick with the edge of the foot",
  },
  "mawashi-geri": {
    englishName: "Roundhouse Kick",
    japaneseName: "回し蹴り",
    strikeHeight: "chudan",
    description: "Circular kick with the instep or ball of the foot",
  },
  "ushiro-geri": {
    englishName: "Back Kick",
    japaneseName: "後ろ蹴り",
    strikeHeight: "chudan",
    description: "Back kick with the heel",
  },
  "kansetsu-geri": {
    englishName: "Joint Kick",
    japaneseName: "関節蹴り",
    strikeHeight: "gedan",
    description: "Kick aimed at the joints, typically the knee",
  },
  "kakato-geri": {
    englishName: "Heel Drop Kick",
    japaneseName: "踵蹴り",
    strikeHeight: "chudan",
    description: "Downward kick with the heel",
  },
  "mikazuki-geri": {
    englishName: "Crescent Kick",
    japaneseName: "三日月蹴り",
    strikeHeight: "chudan",
    description: "Arc-shaped kick with the inside edge of the foot",
  },
  fumikomi: {
    englishName: "Stomp Kick",
    japaneseName: "踏み込み",
    strikeHeight: "gedan",
    description: "Stomping kick with the heel",
  },
  "sokuto-geri": {
    englishName: "Sword Foot Kick",
    japaneseName: "足刀蹴り",
    strikeHeight: "chudan",
    description: "Side kick using the edge of the foot",
  },
  "nidan-geri": {
    englishName: "Double Kick",
    japaneseName: "二段蹴り",
    strikeHeight: "chudan",
    description: "Two consecutive kicks in quick succession",
  },
  "mae-geri-keage": {
    englishName: "Front Snap Kick",
    japaneseName: "前蹴り上げ",
    strikeHeight: "jodan",
    description: "Snapping front kick with the ball of the foot",
  },
  "mae-geri-kekomi": {
    englishName: "Front Thrust Kick",
    japaneseName: "前蹴り蹴込み",
    strikeHeight: "chudan",
    description: "Thrusting front kick with the ball of the foot",
  },
  "yoko-geri-keage": {
    englishName: "Side Snap Kick",
    japaneseName: "横蹴り上げ",
    strikeHeight: "chudan",
    description: "Snapping side kick with the edge of the foot",
  },
  "yoko-geri-kekomi": {
    englishName: "Side Thrust Kick",
    japaneseName: "横蹴り蹴込み",
    strikeHeight: "chudan",
    description: "Thrusting side kick with the edge of the foot",
  },
  "ushiro-geri-keage": {
    englishName: "Back Snap Kick",
    japaneseName: "後ろ蹴り上げ",
    strikeHeight: "chudan",
    description: "Snapping back kick with the heel",
  },
  "ushiro-geri-kekomi": {
    englishName: "Back Thrust Kick",
    japaneseName: "後ろ蹴り蹴込み",
    strikeHeight: "chudan",
    description: "Thrusting back kick with the heel",
  },
  "ura-mawashi-geri": {
    englishName: "Reverse Roundhouse Kick",
    japaneseName: "裏回し蹴り",
    strikeHeight: "chudan",
    description: "Reverse circular kick with the instep or ball of the foot",
  },
  "ushiro-mawashi-geri": {
    englishName: "Back Roundhouse Kick",
    japaneseName: "後ろ回し蹴り",
    strikeHeight: "chudan",
    description: "Circular kick to the back with the instep or ball of the foot",
  },
  "hiza-geri": {
    englishName: "Knee Strike",
    japaneseName: "膝蹴り",
    strikeHeight: "chudan",
    description: "Upward strike with the knee",
  },
  "ashi-barai": {
    englishName: "Foot Sweep",
    japaneseName: "足払い",
    strikeHeight: "gedan",
    description: "Sweeping kick to unbalance the opponent",
  },
};
