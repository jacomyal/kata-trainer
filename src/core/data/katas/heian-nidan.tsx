import type { RawKata } from "./types.ts";

export const HEIAN_NIDAN: RawKata = {
  slug: "heian-nidan",
  name: "Heian Nidan",
  japaneseName: "平安二段",
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
        move: "tate-uke",
        height: "jodan",
        direction: "west",
      },
      rightHand: {
        move: "ude-soete",
        direction: "west",
      },
      pause: true,
    },
    {
      leftHand: {
        move: "ude-uke",
        direction: "east",
      },
      rightHand: {
        move: "ude-soete",
        direction: "west",
      },
    },
    {
      leftHand: {
        move: "tettsui-uchi",
        height: "jodan",
        direction: "west",
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
      leftHand: {
        move: "ude-soete",
        direction: "east",
      },
      rightHand: {
        move: "tate-uke",
        height: "jodan",
        direction: "east",
      },
      pause: true,
    },
    {
      leftHand: {
        move: "ude-soete",
        direction: "east",
      },
      rightHand: {
        move: "ude-uke",
        direction: "west",
      },
    },
    {
      rightHand: {
        move: "tettsui-uchi",
        height: "jodan",
        direction: "east",
      },
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "heisoku-dachi",
        facing: "east",
      },
    },
    {
      rightHand: {
        move: "uraken-uchi",
        direction: "south",
      },
      rightFoot: {
        move: "yoko-geri",
        direction: "south",
      },
    },

    {
      move: {
        foot: "right",
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
      pause: true,
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "north",
        leadingFoot: "right",
      },
      rightHand: {
        move: "shuto-uke",
        direction: "north",
      },
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
        move: "shuto-uke",
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
      kiai: true,
      pause: true,
    },

    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "east",
        leadingFoot: "left",
      },
      leftHand: {
        move: "shuto-uke",
        direction: "east",
      },
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "southeast",
        leadingFoot: "right",
      },
      rightHand: {
        move: "shuto-uke",
        direction: "southeast",
      },
      pause: true,
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "west",
        leadingFoot: "right",
      },
      rightHand: {
        move: "shuto-uke",
        direction: "west",
      },
    },
    {
      move: {
        foot: "left",
      },
      stance: {
        stance: "kokutsu-dachi",
        facing: "southwest",
        leadingFoot: "left",
      },
      leftHand: {
        move: "shuto-uke",
        direction: "southwest",
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
      rightHand: {
        move: "soto-uke",
        direction: "south",
      },
    },
    {
      rightFoot: {
        move: "mae-geri",
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
        stance: "han-zenkutsu-dachi",
        facing: "south",
        leadingFoot: "right",
      },
      leftHand: {
        move: "soto-uke",
        direction: "south",
      },
    },
    {
      leftFoot: {
        move: "mae-geri",
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
      rightHand: {
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
        move: "morote-uke",
        direction: "south",
      },
      pause: true,
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
        facing: "northwest",
        leadingFoot: "right",
      },
      rightHand: {
        move: "age-uke",
        height: "jodan",
        direction: "northwest",
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
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "northeast",
        leadingFoot: "left",
      },
      leftHand: {
        move: "age-uke",
        height: "jodan",
        direction: "northeast",
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
