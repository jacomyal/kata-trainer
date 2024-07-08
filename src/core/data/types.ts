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
  x: number;
  y: number;
};

export type FootState = {
  heel: Position; // in meters
  angle: number; // in radian
};

export type FeetState = Record<Side, FootState>;

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
