import { FootMove } from "../moves/foot.ts";
import { HandMove } from "../moves/hand.ts";
import { Stance } from "../moves/stance.ts";
import type { Direction, Range, Side } from "../moves/types.ts";

export type Move =
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
    }
  | {
      type: "stance";
      stance: Stance;
      facing: Direction;
      moving?: Direction;
      leadingFoot?: Side;
    }
  | {
      type: "move";
      foot: Side;
      moving: Direction;
      range?: Range;
    };

export type Step = {
  movements: Move[];
  pause?: boolean;
  kiai?: boolean;
};

export type Kata = {
  name: string;
  steps: Step[];
};
