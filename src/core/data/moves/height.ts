export const HEIGHTS = ["jodan", "chudan", "gedan"] as const;

export type Height = (typeof HEIGHTS)[number];

export type RawHeightMeta = {
  name: string;
  kanji: string;
  romaji: string;
  description: string;
};

export const RAW_HEIGHTS_META: Record<Height, RawHeightMeta> = {
  jodan: {
    name: "Upper Level",
    kanji: "上段",
    romaji: "Jodan",
    description: "Strikes aimed at the head and neck",
  },
  chudan: {
    name: "Middle Level",
    kanji: "中段",
    romaji: "Chudan",
    description: "Strikes aimed at the torso",
  },
  gedan: {
    name: "Lower Level",
    kanji: "下段",
    romaji: "Gedan",
    description: "Strikes aimed at the lower body, primarily the legs",
  },
};
