import type { RawKata } from "./katas/types.ts";
import type { FootMove, RawFootMoveMeta } from "./moves/foot.tsx";
import type { HandMove, RawHandMoveMeta } from "./moves/hand.tsx";
import type { RawStanceMeta, Stance } from "./moves/stance.tsx";

export type Direction = "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest";

export const DIRECTION_ANGLES: Record<Direction, number> = {
  north: Math.PI / 2,
  south: (Math.PI / 2) * 3,
  east: 0,
  west: Math.PI,
  northeast: Math.PI / 4,
  northwest: (Math.PI / 4) * 3,
  southeast: (Math.PI / 4) * 7,
  southwest: (Math.PI / 4) * 5,
};

export type Side = "left" | "right";

export type Range = "short" | "full-step";

export type Position = {
  x: number; // in meters, compared to dojo origin
  y: number; // in meters, compared to dojo origin
};

export type AngledPosition = Position & {
  angle: number; // in radian, compared to north (i.e. north is 0, south is PI...)
};

export type BodyState = {
  // Pelvis and feet are positioned relatively to the dojo's origin:
  pelvis: AngledPosition;
  feet: Record<Side, AngledPosition>;
  // Hands are positioned relatively to the pelvis
  hands: Record<Side, AngledPosition & { closedFist: boolean }>;
};

export type FeetState = BodyState["feet"];
export type HandsState = BodyState["hands"];

export const DEFAULT_HANDS_POSITION: BodyState["hands"] = {
  left: {
    x: -10,
    y: 0,
    angle: Math.PI / 2,
    closedFist: true,
  },
  right: {
    x: 10,
    y: 0,
    angle: -Math.PI / 2,
    closedFist: true,
  },
};

export const DEFAULT_FEET_POSITION: BodyState["feet"] = {
  left: {
    x: -15,
    y: 0,
    angle: 0,
  },
  right: {
    x: 15,
    y: 0,
    angle: 0,
  },
};

export const DEFAULT_BODY_STATE: BodyState = {
  hands: DEFAULT_HANDS_POSITION,
  feet: DEFAULT_FEET_POSITION,
  pelvis: {
    x: 0,
    y: 0,
    angle: 0,
  },
};

export const EASINGS = {
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
} as const;

export type EasingFunction = (t: number) => number;
export type EasingName = keyof typeof EASINGS;
export type Easing = EasingName | EasingFunction;

export type Transition<T> = {
  duration: number; // in ms
  from: T;
  to: T;
  easing: Easing;
};

// Enriched data types:
export type Kata = RawKata & {
  states: BodyState[];
  stances: Partial<Record<Stance, number>>;
  handMoves: Partial<Record<HandMove, number>>;
  footMoves: Partial<Record<FootMove, number>>;
};

export type StanceMeta = RawStanceMeta & {
  slug: Stance;
  katas: Partial<Record<string, number>>;
};
export type HandMoveMeta = RawHandMoveMeta & {
  slug: HandMove;
  katas: Partial<Record<string, number>>;
};
export type FootMoveMeta = RawFootMoveMeta & {
  slug: FootMove;
  katas: Partial<Record<string, number>>;
};
