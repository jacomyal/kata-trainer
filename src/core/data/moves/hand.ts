import type { HEIGHTS } from "./height.ts";

export const HAND_MOVES = [
  // Basic punches (closed fist)
  "oizuki",
  "gyakuzuki",
  "kizamizuki",
  "mawashi-zuki",
  "tate-zuki",
  "yama-zuki",
  "ura-zuki",
  "kagi-zuki",
  "morote-zuki",
  "awase-zuki",

  // Back fist and hammer fist strikes (closed fist)
  "uraken-uchi",
  "tettsui-uchi",
  "empi-uchi",

  // Open hand strikes
  "shuto-uchi",
  "nukite",
  "oshi-zuki",
  "shotei-uchi",
  "haito-uchi",

  // Defensive blocks
  "jodan-age-uke",
  "chudan-age-uke",
  "shuto-uke",
  "soto-uke",
  "uchi-uke",
  "gedan-barai",

  // Specialized strikes
  "ago-uchi",
  "ura-ken",
  "gyaku-shuto-uchi",
  "ura-shuto-uchi",
] as const;

export type HandMove = (typeof HAND_MOVES)[number];

export type HandMoveMeta = {
  englishName: string;
  japaneseName: string;
  strikeHeight: HEIGHTS;
  description: string;
  isClosedFist: boolean;
  otherHandPosition?: string;
};

export const HAND_MOVES_META: Record<HandMove, HandMoveMeta> = {
  oizuki: {
    englishName: "Lunge Punch",
    japaneseName: "追い突き",
    strikeHeight: "chudan",
    description: "Forward stepping punch",
    isClosedFist: true,
  },
  gyakuzuki: {
    englishName: "Reverse Punch",
    japaneseName: "逆突き",
    strikeHeight: "chudan",
    description: "Punch with the opposite hand to the leading foot",
    isClosedFist: true,
  },
  kizamizuki: {
    englishName: "Jab",
    japaneseName: "刻み突き",
    strikeHeight: "chudan",
    description: "Quick punch with the lead hand",
    isClosedFist: true,
  },
  "mawashi-zuki": {
    englishName: "Round Punch",
    japaneseName: "回し突き",
    strikeHeight: "chudan",
    description: "Circular punch with a hook motion",
    isClosedFist: true,
  },
  "uraken-uchi": {
    englishName: "Back Fist Strike",
    japaneseName: "裏拳打ち",
    strikeHeight: "jodan",
    description: "Strike with the back of the fist",
    isClosedFist: true,
  },
  "shuto-uchi": {
    englishName: "Knife Hand Strike",
    japaneseName: "手刀打ち",
    strikeHeight: "chudan",
    description: "Strike with the edge of the hand",
    isClosedFist: false,
    otherHandPosition: "Guarding the center",
  },
  "tettsui-uchi": {
    englishName: "Hammer Fist Strike",
    japaneseName: "鉄槌打ち",
    strikeHeight: "chudan",
    description: "Strike with the bottom of the fist",
    isClosedFist: true,
  },
  nukite: {
    englishName: "Spear Hand Strike",
    japaneseName: "貫手",
    strikeHeight: "chudan",
    description: "Thrust with the fingertips",
    isClosedFist: false,
    otherHandPosition: "Guarding the center",
  },
  "tate-zuki": {
    englishName: "Vertical Punch",
    japaneseName: "縦突き",
    strikeHeight: "chudan",
    description: "Vertical punch with the fist turned sideways",
    isClosedFist: true,
  },
  "yama-zuki": {
    englishName: "U Punch",
    japaneseName: "山突き",
    strikeHeight: "chudan",
    description: "Double punch with one fist high and one fist low",
    isClosedFist: true,
  },
  "ago-uchi": {
    englishName: "Uppercut",
    japaneseName: "顎打ち",
    strikeHeight: "jodan",
    description: "Rising punch aimed at the chin",
    isClosedFist: true,
  },
  "empi-uchi": {
    englishName: "Elbow Strike",
    japaneseName: "猿臂打ち",
    strikeHeight: "chudan",
    description: "Strike with the elbow",
    isClosedFist: false,
  },
  "ura-zuki": {
    englishName: "Close Punch",
    japaneseName: "裏突き",
    strikeHeight: "chudan",
    description: "Short distance punch with the fist",
    isClosedFist: true,
  },
  "kagi-zuki": {
    englishName: "Hook Punch",
    japaneseName: "鉤突き",
    strikeHeight: "chudan",
    description: "Hooking punch with a horizontal motion",
    isClosedFist: true,
  },
  "oshi-zuki": {
    englishName: "Pressing Punch",
    japaneseName: "押し突き",
    strikeHeight: "chudan",
    description: "Pressing punch with a forward motion",
    isClosedFist: true,
  },
  "shotei-uchi": {
    englishName: "Palm Heel Strike",
    japaneseName: "掌底打ち",
    strikeHeight: "chudan",
    description: "Strike with the base of the palm",
    isClosedFist: false,
  },
  "haito-uchi": {
    englishName: "Ridge Hand Strike",
    japaneseName: "背刀打ち",
    strikeHeight: "chudan",
    description: "Strike with the ridge of the hand",
    isClosedFist: false,
  },
  "ura-ken": {
    englishName: "Inverted Fist",
    japaneseName: "裏拳",
    strikeHeight: "jodan",
    description: "Strike with the inverted fist",
    isClosedFist: true,
  },
  "gyaku-shuto-uchi": {
    englishName: "Reverse Knife Hand Strike",
    japaneseName: "逆手刀打ち",
    strikeHeight: "chudan",
    description: "Strike with the reverse edge of the hand",
    isClosedFist: false,
    otherHandPosition: "Guarding the center",
  },
  "ura-shuto-uchi": {
    englishName: "Back Hand Knife Strike",
    japaneseName: "裏手刀打ち",
    strikeHeight: "chudan",
    description: "Strike with the back of the knife hand",
    isClosedFist: false,
  },
  "morote-zuki": {
    englishName: "Double Fist Punch",
    japaneseName: "諸手突き",
    strikeHeight: "chudan",
    description: "Simultaneous punch with both fists",
    isClosedFist: true,
  },
  "awase-zuki": {
    englishName: "Combined Punch",
    japaneseName: "合わせ突き",
    strikeHeight: "chudan",
    description: "Combination of a lunge punch and reverse punch",
    isClosedFist: true,
  },
  "jodan-age-uke": {
    englishName: "Upper Rising Block",
    japaneseName: "上段上げ受け",
    strikeHeight: "jodan",
    description: "Rising block aimed at the upper level",
    isClosedFist: true,
  },
  "chudan-age-uke": {
    englishName: "Middle Rising Block",
    japaneseName: "中段上げ受け",
    strikeHeight: "chudan",
    description: "Rising block aimed at the middle level",
    isClosedFist: true,
  },
  "shuto-uke": {
    englishName: "Knife Hand Block",
    japaneseName: "手刀受け",
    strikeHeight: "chudan",
    description: "Block using the edge of the hand",
    isClosedFist: false,
    otherHandPosition: "Guarding the center",
  },
  "soto-uke": {
    englishName: "Outside Block",
    japaneseName: "外受け",
    strikeHeight: "chudan",
    description: "Block from the outside to the inside",
    isClosedFist: true,
  },
  "uchi-uke": {
    englishName: "Inside Block",
    japaneseName: "内受け",
    strikeHeight: "chudan",
    description: "Block from the inside to the outside",
    isClosedFist: true,
  },
  "gedan-barai": {
    englishName: "Downward Block",
    japaneseName: "下段払い",
    strikeHeight: "gedan",
    description: "Sweeping block aimed at the lower level",
    isClosedFist: true,
  },
};
