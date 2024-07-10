import {
  BodyState,
  DEFAULT_BODY_STATE,
  type Easing,
  STANCES_META,
  type StepMove,
  type StepStance,
  type Transition,
} from "../data";
import { getOtherSide, mirrorPositions, transformBodyState } from "./positions.ts";

export const DEFAULT_DURATION = 700;
export const DEFAULT_EASING: Easing = "easeOutCubic";

export function moveFoot(bodyState: BodyState, move: StepMove, target: StepStance): Transition<BodyState> {
  // The strategy here is the following:
  // - We determine the target FeetState assuming one foot does not move
  // - Once we have the initial and final FeetStates, we determine the foot transition
  const fixedFoot = getOtherSide(move.foot);
  const stance = STANCES_META[target.stance];
  const stanceBodyState = {
    ...DEFAULT_BODY_STATE,
    feet: target.leadingFoot === "right" ? stance.rightFootLeadingState : mirrorPositions(stance.rightFootLeadingState),
  };
  const targetState = transformBodyState(stanceBodyState, {
    side: fixedFoot,
    position: bodyState.feet[fixedFoot],
    direction: target.facing,
  });

  return {
    duration: DEFAULT_DURATION,
    easing: DEFAULT_EASING,
    from: bodyState,
    to: targetState,
  };
}
