import type { Gesture, StepMove, StepStance } from "../data/katas/types.ts";
import { STANCES_META } from "../data/moves/stance.ts";
import type { Easing, FeetState, Transition } from "../data/types.ts";
import { getOtherSide, mirrorFeetState, transformFeetState } from "./positions.ts";

export const DEFAULT_DURATION = 700;
export const DEFAULT_EASING: Easing = "easeOutCubic";

export function moveFoot(feetState: FeetState, move: StepMove, target: StepStance): Transition<FeetState> {
  // The strategy here is the following:
  // - We determine the target FeetState assuming one foot does not move
  // - Once we have the initial and final FeetStates, we determine the foot transition
  const fixedFoot = getOtherSide(move.foot);
  const stance = STANCES_META[target.stance];
  const stanceFeetState =
    target.leadingFoot === "right" ? stance.rightFootLeadingState : mirrorFeetState(stance.rightFootLeadingState);
  const targetState = transformFeetState(stanceFeetState, {
    side: fixedFoot,
    position: feetState[fixedFoot].heel,
    direction: move.moving,
  });

  return {
    duration: DEFAULT_DURATION,
    easing: DEFAULT_EASING,
    from: feetState,
    to: targetState,
  };
}
