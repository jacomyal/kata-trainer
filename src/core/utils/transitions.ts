import { mean } from "lodash-es";

import {
  type BodyState,
  DEFAULT_BODY_STATE,
  DIRECTION_ANGLES,
  type Easing,
  HAND_MOVES_META,
  STANCES_META,
  type Side,
  type Step,
  type StepMove,
  type StepStance,
} from "../data";
import { getOtherSide, mirrorAngle, mirrorPositions, moveBodyState } from "./positions.ts";

export const DEFAULT_DURATION = 700;
export const DEFAULT_EASING: Easing = "easeOutCubic";

export function moveFoot(bodyState: BodyState, move: StepMove, target: StepStance): BodyState {
  // The strategy here is the following:
  // - We determine the target FeetState assuming one foot does not move
  // - Once we have the initial and final FeetStates, we determine the foot transition
  const fixedFoot = getOtherSide(move.foot);
  const stance = STANCES_META[target.stance];
  const stanceBodyState = {
    ...DEFAULT_BODY_STATE,
    feet: target.leadingFoot === "right" ? stance.rightFootLeadingState : mirrorPositions(stance.rightFootLeadingState),
  };
  return moveBodyState(stanceBodyState, {
    side: fixedFoot,
    position: bodyState.feet[fixedFoot],
    direction: target.facing,
  });
}

export function moveHands(
  bodyState: BodyState,
  { leftHand, rightHand }: Pick<Step, "leftHand" | "rightHand">,
  { leadingFoot, stance, facing }: StepStance,
): BodyState {
  const handsCount: number = +!!leftHand + +!!rightHand;

  // The strategy here is the following:
  // - We determine the hips orientation
  // - We actually move each hand
  const { rightFootBodyAngle } = STANCES_META[stance];
  let pelvisOrientation = leadingFoot === "right" ? rightFootBodyAngle : mirrorAngle(rightFootBodyAngle);

  const onlyHand: Side | null = handsCount === 1 ? (leftHand ? "left" : "right") : null;
  const opposedHand = onlyHand && onlyHand !== leadingFoot;
  if (opposedHand) pelvisOrientation = pelvisOrientation / 3;

  const leadingHand = onlyHand
    ? onlyHand === "left"
      ? leftHand
      : rightHand
    : leadingFoot === "left"
      ? leftHand
      : rightHand;
  if (leadingHand && leadingHand.direction === facing) {
    const handMove = HAND_MOVES_META[leadingHand.move];
    let bodyAngle = handMove.bodyAngle || 0;
    bodyAngle = leadingFoot === "left" ? mirrorAngle(bodyAngle) : bodyAngle;
    pelvisOrientation = mean([pelvisOrientation, bodyAngle]);
  }

  return {
    ...bodyState,
    pelvis: {
      ...bodyState.pelvis,
      angle: DIRECTION_ANGLES[facing] + pelvisOrientation,
    },
  };
}
