import type { RawKata } from "./katas/types.ts";
import type { FootMove, RawFootMoveMeta } from "./moves/foot.tsx";
import type { HandMove, Palm, RawHandMoveMeta } from "./moves/hand.tsx";
import type { RawStanceMeta, Stance } from "./moves/stance.tsx";

export type Direction = "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest";

export const DIRECTION_ANGLES: Record<Direction, number> = {
  north: 0,
  south: Math.PI,
  east: -Math.PI / 2,
  west: Math.PI / 2,
  northeast: -Math.PI / 4,
  northwest: Math.PI / 4,
  southeast: -(Math.PI / 4) * 3,
  southwest: (Math.PI / 4) * 3,
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
  // Head angle is relatively to the north:
  head: Pick<AngledPosition, "angle">;
  // Pelvis and feet are positioned relatively to the dojo's origin:
  pelvis: AngledPosition;
  feet: Record<Side, AngledPosition>;
  // Hands X and Y are positioned relatively to the pelvis (and angle to the north):
  hands: Record<Side, AngledPosition & { closedFist: boolean; palm: Palm }>;
};

export type FeetState = BodyState["feet"];
export type HandsState = BodyState["hands"];

export const DEFAULT_HANDS_POSITION: BodyState["hands"] = {
  left: {
    x: -20,
    y: 10,
    angle: -Math.PI / 10,
    closedFist: true,
    palm: "ground",
  },
  right: {
    x: 20,
    y: 10,
    angle: Math.PI / 10,
    closedFist: true,
    palm: "ground",
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
  head: { angle: 0 },
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
