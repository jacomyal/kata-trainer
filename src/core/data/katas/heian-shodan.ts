import type { Kata } from "./types.ts";

export const HEIAN_SHODAN: Kata = {
  name: "Heian Shodan",
  steps: [
    {
      movements: [
        {
          type: "stance",
          stance: "yoji-dachi",
          facing: "north",
        },
      ],
    },

    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "west",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "west",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "west",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "west",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "west",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "oi-zuki",
          direction: "west",
        },
      ],
    },

    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "east",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "east",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "gedan-barai",
          direction: "east",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "west",
          range: "short",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "east",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "tettsui-uchi",
          direction: "east",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "east",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "east",
          leadingFoot: "left",
        },
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
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "north",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "north",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "north",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "north",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "north",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "age-uke",
          direction: "north",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "north",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "north",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "age-uke",
          direction: "north",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "north",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "north",
          leadingFoot: "right",
        },
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
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "east",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "east",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "east",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "east",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "east",
          leadingFoot: "right",
        },
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
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "west",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "west",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "gedan-barai",
          direction: "west",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "west",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "west",
          leadingFoot: "left",
        },
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
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "south",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "south",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "gedan-barai",
          direction: "south",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "south",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "south",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "oi-zuki",
          direction: "south",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "south",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "south",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "oi-zuki",
          direction: "south",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "south",
        },
        {
          type: "stance",
          stance: "zenkutsu-dachi",
          facing: "south",
          leadingFoot: "right",
        },
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
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "west",
        },
        {
          type: "stance",
          stance: "kokutsu-dachi",
          facing: "west",
          leadingFoot: "left",
        },
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "west",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "northwest",
        },
        {
          type: "stance",
          stance: "kokutsu-dachi",
          facing: "northwest",
          leadingFoot: "right",
        },
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
      movements: [
        {
          type: "move",
          foot: "right",
          moving: "east",
        },
        {
          type: "stance",
          stance: "kokutsu-dachi",
          facing: "east",
          leadingFoot: "right",
        },
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "east",
        },
      ],
    },
    {
      movements: [
        {
          type: "move",
          foot: "left",
          moving: "northeast",
        },
        {
          type: "stance",
          stance: "kokutsu-dachi",
          facing: "northeast",
          leadingFoot: "left",
        },
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
      movements: [
        {
          type: "stance",
          stance: "yoji-dachi",
          facing: "north",
        },
      ],
    },
  ],
};
