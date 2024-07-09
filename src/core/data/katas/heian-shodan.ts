import type { RawKata } from "./types.ts";

export const HEIAN_SHODAN: RawKata = {
  slug: "heian-shodan",
  name: "Heian Shodan",
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
        stance: "zenkutsu-dachi",
        facing: "west",
        leadingFoot: "left",
      },
      leftHand: {
        move: "gedan-barai",
        direction: "west",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "west",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tsuki",
        direction: "west",
      },
    },

    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      rightHand: {
        move: "gedan-barai",
        direction: "east",
      },
    },
    {
      move: {
        foot: "right",
        range: "short",
      },
      stance: {
        stance: "han-zenkutsu-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tettsui-uchi",
        direction: "east",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "east",
        leadingFoot: "left",
      },
      leftHand: {
        move: "tsuki",
        direction: "east",
      },
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "north",
        leadingFoot: "left",
      },
      leftHand: {
        move: "gedan-barai",
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
        move: "age-uke",
        height: "jodan",
        direction: "north",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "north",
        leadingFoot: "left",
      },
      leftHand: {
        move: "age-uke",
        height: "jodan",
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
        move: "age-uke",
        height: "jodan",
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
        stance: "zenkutsu-dachi",
        facing: "east",
        leadingFoot: "left",
      },
      leftHand: {
        move: "gedan-barai",
        direction: "east",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tsuki",
        direction: "east",
      },
      pause: true,
    },

    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "west",
        leadingFoot: "right",
      },
      rightHand: {
        move: "gedan-barai",
        direction: "west",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "west",
        leadingFoot: "left",
      },
      leftHand: {
        move: "tsuki",
        direction: "west",
      },
      pause: true,
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
        move: "gedan-barai",
        direction: "south",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "south",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tsuki",
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
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "south",
        leadingFoot: "right",
      },
      rightHand: {
        move: "tsuki",
        direction: "south",
      },
      kiai: true,
      pause: true,
    },

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
        move: "shuto-uke",
        direction: "west",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "northwest",
        leadingFoot: "right",
      },
      rightHand: {
        move: "shuto-uke",
        direction: "northwest",
      },
      pause: true,
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
        move: "shuto-uke",
        direction: "east",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "northeast",
        leadingFoot: "left",
      },
      leftHand: {
        move: "shuto-uke",
        direction: "northeast",
      },
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
