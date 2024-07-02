export const HEIGHTS = ["jodan", "chudan", "gedan"] as const;

export type Height = (typeof HEIGHTS)[number];

export type HeightMeta = {
  englishName: string;
  japaneseName: string;
  description: string;
};

export const HEIGHTS_META: Record<Height, HeightMeta> = {
  jodan: {
    englishName: "Upper Level",
    japaneseName: "上段",
    description: "Strikes aimed at the head and neck",
  },
  chudan: {
    englishName: "Middle Level",
    japaneseName: "中段",
    description: "Strikes aimed at the torso",
  },
  gedan: {
    englishName: "Lower Level",
    japaneseName: "下段",
    description: "Strikes aimed at the lower body, primarily the legs",
  },
};
