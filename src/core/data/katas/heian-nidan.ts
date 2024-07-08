import type { Kata } from "./types.ts";

export const HEIAN_NIDAN: Kata = {
  slug: "heian-nidan",
  name: "Heian Nidan",
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "jodan-tate-uke",
          direction: "west",
        },
        {
          type: "hand",
          side: "right",
          move: "ude-soete",
          direction: "west",
        },
      ],
      pause: true,
    },
    {
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "ude-uke",
          direction: "east",
        },
        {
          type: "hand",
          side: "right",
          move: "ude-soete",
          direction: "west",
        },
      ],
    },
    {
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "jodan-tettsui-uchi",
          direction: "west",
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
          side: "left",
          move: "ude-soete",
          direction: "east",
        },
        {
          type: "hand",
          side: "right",
          move: "jodan-tate-uke",
          direction: "east",
        },
      ],
      pause: true,
    },
    {
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "ude-soete",
          direction: "east",
        },
        {
          type: "hand",
          side: "right",
          move: "ude-uke",
          direction: "west",
        },
      ],
    },
    {
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "jodan-tettsui-uchi",
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
        stance: "heisoku-dachi",
        facing: "east",
      },
    },
    {
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "uraken-uchi",
          direction: "south",
        },
        {
          type: "foot",
          side: "right",
          move: "yoko-geri",
          direction: "south",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "morote-uke",
          direction: "north",
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
        facing: "north",
        leadingFoot: "right",
      },
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "north",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "north",
        },
      ],
    },
    {
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "osae-uke",
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
          move: "nukite",
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
        stance: "kokutsu-dachi",
        facing: "east",
        leadingFoot: "left",
      },
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "east",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "southeast",
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
        facing: "west",
        leadingFoot: "right",
      },
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "shuto-uke",
          direction: "west",
        },
      ],
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
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "shuto-uke",
          direction: "southwest",
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
          side: "right",
          move: "soto-uke",
          direction: "south",
        },
      ],
    },
    {
      gestures: [
        {
          type: "leg",
          side: "right",
          move: "mae-geri",
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
          side: "left",
          move: "chudan-tsuki",
          direction: "south",
        },
      ],
    },
    {
      move: {
        foot: "right",
      },
      stance: {
        stance: "renoji-dachi",
        facing: "south",
        leadingFoot: "right",
      },
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "soto-uke",
          direction: "south",
        },
      ],
    },
    {
      gestures: [
        {
          type: "leg",
          side: "left",
          move: "mae-geri",
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
          side: "right",
          move: "chudan-tsuki",
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
          move: "chudan-morote-uke",
          direction: "south",
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
        facing: "northwest",
        leadingFoot: "right",
      },
      gestures: [
        {
          type: "hand",
          side: "right",
          move: "jodan-age-uke",
          direction: "northwest",
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
        foot: "left",
      },
      stance: {
        stance: "zenkutsu-dachi",
        facing: "northeast",
        leadingFoot: "left",
      },
      gestures: [
        {
          type: "hand",
          side: "left",
          move: "jodan-age-uke",
          direction: "northeast",
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
        stance: "yohi-dachi",
        facing: "north",
      },
    },
  ],
};
