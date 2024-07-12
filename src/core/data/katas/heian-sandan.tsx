import type { RawKata } from "./types.ts";

export const HEIAN_SANDAN: RawKata = {
  slug: "heian-sandan",
  name: "Peaceful Mind, level three",
  kanji: "平安二段",
  romaji: "Heian Sandan",
  description: <>TODO</>,
  initialStance: {
    stance: "yohi-dachi",
    facing: "north",
  },
  steps: [
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "west",
        leadingFoot: "left",
      },
      leftHand: {
        move: "uchi-uke",
        direction: "west",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "heisoku-dachi",
        facing: "west",
        leadingFoot: "left",
      },
      leftHand: {
        move: "gedan-barai",
        direction: "west",
      },
      rightHand: {
        move: "uchi-uke",
        direction: "west",
      },
    },
    {
      rightHand: {
        move: "gedan-barai",
        direction: "west",
      },
      leftHand: {
        move: "uchi-uke",
        direction: "west",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      rightHand: {
        move: "uchi-uke",
        direction: "east",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "heisoku-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      rightHand: {
        move: "gedan-barai",
        direction: "east",
      },
      leftHand: {
        move: "uchi-uke",
        direction: "east",
      },
    },
    {
      leftHand: {
        move: "gedan-barai",
        direction: "east",
      },
      rightHand: {
        move: "uchi-uke",
        direction: "east",
      },
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "north",
        leadingFoot: "left",
      },
      leftHand: {
        move: "morote-uke",
        direction: "north",
      },
    },
    {
      leftHand: {
        move: "osae-uke",
        direction: "north",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "north",
        leadingFoot: "right",
      },
      rightHand: {
        move: "nukite",
        direction: "north",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kiba-dachi",
        facing: "north",
        leadingFoot: "left",
      },
      leftHand: {
        move: "tettsui-uchi",
        direction: "north",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "north",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tsuki",
        direction: "north",
      },
      kiai: true,
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "heisoku-dachi",
        facing: "south",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kiba-dachi",
        facing: "south",
        leadingFoot: "right",
      },
    },
    {
      rightFoot: {
        move: "fumi-komi",
        direction: "south",
      },
    },
    {
      rightHand: {
        move: "empi-uke",
        direction: "south",
      },
    },
    {
      rightHand: {
        move: "uraken-uchi",
        direction: "south",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kiba-dachi",
        facing: "south",
        leadingFoot: "left",
      },
    },
    {
      leftFoot: {
        move: "fumi-komi",
        direction: "south",
      },
    },
    {
      leftHand: {
        move: "empi-uke",
        direction: "south",
      },
    },
    {
      leftHand: {
        move: "uraken-uchi",
        direction: "south",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kiba-dachi",
        facing: "south",
        leadingFoot: "right",
      },
    },
    {
      rightFoot: {
        move: "fumi-komi",
        direction: "south",
      },
    },
    {
      rightHand: {
        move: "empi-uke",
        direction: "south",
      },
    },
    {
      rightHand: {
        move: "uraken-uchi",
        direction: "south",
      },
    },
    {
      rightHand: {
        move: "tate-shuto-uke",
        direction: "south",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "south",
        leadingFoot: "left",
      },
      leftHand: {
        move: "tsuki",
        direction: "south",
      },
      pause: true,
    },

    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "heisoku-dachi",
        facing: "south",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kiba-dachi",
        leadingFoot: "left",
        facing: "west",
      },
      rightHand: {
        move: "tate-zuki",
        direction: "west",
      },
      leftHand: {
        move: "ushiro-empi-uchi",
        direction: "west",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kiba-dachi",
        leadingFoot: "right",
        facing: "east",
      },
      leftHand: {
        move: "tate-zuki",
        direction: "east",
      },
      rightHand: {
        move: "ushiro-empi-uchi",
        direction: "east",
      },
      kiai: true,
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "yohi-dachi",
        facing: "north",
      },
    },
  ],
};
