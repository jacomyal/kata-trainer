import type { ReactNode } from "react";

import type { FootMove } from "../moves/foot.tsx";
import type { HandMove } from "../moves/hand.tsx";
import type { Height } from "../moves/height.ts";
import type { Stance } from "../moves/stance.tsx";
import type { Direction, Range, Side } from "../types.ts";

export type StepStance = {
  stance: Stance;
  facing: Direction;
  leadingFoot?: Side;
};

export type StepMove = {
  foot: Side;
  range?: Range;
};

export type HandGesture = {
  move: HandMove;
  direction: Direction;
  height?: Height;
};

export type FootGesture = {
  move: FootMove;
  direction: Direction;
  height?: Height;
};

export type Step = {
  move?: StepMove;
  stance?: StepStance;
  // Gestures:
  leftHand?: HandGesture;
  rightHand?: HandGesture;
  leftFoot?: FootGesture;
  rightFoot?: FootGesture;
  // Additional information:
  pause?: boolean;
  kiai?: boolean;
};

export type RawKata = {
  slug: string;
  name: string;
  japaneseName: string;
  description: ReactNode;
  initialStance: StepStance;
  steps: Step[];
};
