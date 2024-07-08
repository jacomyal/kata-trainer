import type { Kata } from "./types.ts";

export const HEIAN_SHODAN: Kata = {
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "oizuki",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "gedan-barai",
          direction: "east",
        },
      ],
    },
    {
      move: {
        foot: "right",
        range: "short",
      },
      stance: {
        stance: "renoji-dachi",
        facing: "east",
        leadingFoot: "right",
      },
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "tettsui-uchi",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "oizuki",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "north",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "jodan-age-uke",
          direction: "north",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "jodan-age-uke",
          direction: "north",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "jodan-age-uke",
          direction: "north",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "oizuki",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "gedan-barai",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "oizuki",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "south",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "oizuki",
          direction: "south",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "oizuki",
          direction: "south",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "oizuki",
          direction: "south",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "northwest",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "northeast",
        },
      ],
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
