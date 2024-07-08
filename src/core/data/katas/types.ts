import type { FootMove } from "../moves/foot.ts";
import type { HandMove } from "../moves/hand.ts";
import type { Stance } from "../moves/stance.ts";
import type { Direction, FeetState, Range, Side } from "../types.ts";

export type Gesture =
  | {
      type: "hand";
      side: Side;
      move: HandMove;
      direction: Direction;
    }
  | {
      type: "foot";
      side: Side;
      move: FootMove;
      direction: Direction;
    };

export type StepStance = {
  stance: Stance;
  facing: Direction;
  leadingFoot?: Side;
};

export type StepMove = {
  foot: Side;
  range?: Range;
};

export type Step = {
  move?: StepMove;
  stance: StepStance;
  gestures?: Gesture[];
  pause?: boolean;
  kiai?: boolean;
};

export type Kata = {
  slug: string;
  name: string;
  initialStance: StepStance;
  steps: Step[];
};

export type EnrichedKata = Kata & {
  states: FeetState[];
};
