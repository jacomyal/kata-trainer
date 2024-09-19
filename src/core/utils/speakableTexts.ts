import { lowerCase } from "lodash-es";

import type { Direction, FootGesture, HandGesture, Side, Step, StepMove, StepStance } from "../data";

export function speakableSide(side: Side, fem?: boolean): string {
  return side === "left" ? "gauche" : fem ? "droite" : "droit";
}

const SPEAKABLE_DIRECTIONS: Record<Direction, string> = {
  north: "nord",
  south: "sud",
  east: "est",
  west: "ouest",
  northeast: "nord-est",
  northwest: "nord-ouest",
  southeast: "sud-est",
  southwest: "sud-ouest",
};
export function speakableDirection(direction: Direction): string {
  return SPEAKABLE_DIRECTIONS[direction];
}

export function speakableJapaneseItem(item: string): string {
  return `"${lowerCase(item)}"`;
}

export function speakableMove(move: StepMove): string {
  return `Déplacer jambe ${speakableSide(move.foot, true)}`;
}

export function speakableStance(stance: StepStance): string {
  return `${speakableJapaneseItem(stance.stance)} face ${speakableDirection(stance.facing)}${stance.leadingFoot ? `, jambe ${speakableSide(stance.leadingFoot, true)}` : ""}`;
}

export function speakableHandGesture(gesture: HandGesture, side: Side): string {
  return `${speakableJapaneseItem(gesture.move)} bras ${speakableSide(side)}`;
}

export function speakableFootGesture(gesture: FootGesture, side: Side): string {
  return `${speakableJapaneseItem(gesture.move)} pied ${speakableSide(side)}`;
}

export function stepToSentence(step: Step): string {
  return [
    step.move && speakableMove(step.move),
    step.stance && speakableStance(step.stance),
    step.leftHand && speakableHandGesture(step.leftHand, "left"),
    step.rightHand && speakableHandGesture(step.rightHand, "right"),
    step.leftFoot && speakableFootGesture(step.leftFoot, "left"),
    step.rightFoot && speakableFootGesture(step.rightFoot, "right"),
  ]
    .filter((str) => !!str)
    .join("  ");
}
