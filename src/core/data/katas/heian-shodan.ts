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
        moving: "west",
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
        moving: "west",
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
          move: "oi-zuki",
          direction: "west",
        },
      ],
    },

    {
      move: {
        foot: "right",
        moving: "east",
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
        moving: "west",
        range: "short",
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
          move: "tettsui-uchi",
          direction: "east",
        },
      ],
    },
    {
      move: {
        foot: "left",
        moving: "east",
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
          move: "oi-zuki",
          direction: "east",
        },
      ],
      pause: true,
    },

    {
      move: {
        foot: "left",
        moving: "north",
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
        moving: "north",
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
          move: "age-uke",
          direction: "north",
        },
      ],
    },
    {
      move: {
        foot: "left",
        moving: "north",
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
          move: "age-uke",
          direction: "north",
        },
      ],
    },
    {
      move: {
        foot: "right",
        moving: "north",
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
          move: "age-uke",
          direction: "north",
        },
      ],
      kiai: true,
      pause: true,
    },

    {
      move: {
        foot: "left",
        moving: "east",
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
        moving: "east",
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
          move: "oi-zuki",
          direction: "east",
        },
      ],
      pause: true,
    },

    {
      move: {
        foot: "right",
        moving: "west",
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
        moving: "west",
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
          move: "oi-zuki",
          direction: "west",
        },
      ],
      pause: true,
    },

    {
      move: {
        foot: "left",
        moving: "south",
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
        moving: "south",
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
          move: "oi-zuki",
          direction: "south",
        },
      ],
    },
    {
      move: {
        foot: "left",
        moving: "south",
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
          move: "oi-zuki",
          direction: "south",
        },
      ],
    },
    {
      move: {
        foot: "right",
        moving: "south",
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
          move: "oi-zuki",
          direction: "south",
        },
      ],
      kiai: true,
      pause: true,
    },

    {
      move: {
        foot: "left",
        moving: "west",
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
        moving: "northwest",
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
        moving: "east",
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
        moving: "northeast",
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
        moving: "southwest",
      },
      stance: {
        stance: "yohi-dachi",
        facing: "north",
      },
    },
  ],
};
