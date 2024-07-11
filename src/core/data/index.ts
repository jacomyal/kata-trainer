import { cloneDeep, keyBy, mapValues } from "lodash-es";

import { mirrorBodyState } from "../utils/positions.ts";
import { moveFoot, moveHands } from "../utils/transitions.ts";
import { RAW_KATAS } from "./katas";
import type { FootMove, RawFootMoveMeta } from "./moves/foot.tsx";
import { RAW_FOOT_MOVES_META } from "./moves/foot.tsx";
import { type HandMove, RAW_HAND_MOVES_META, type RawHandMoveMeta } from "./moves/hand.tsx";
import { RAW_STANCES_META, type RawStanceMeta, type Stance } from "./moves/stance.tsx";
import type { BodyState, FootMoveMeta, HandMoveMeta, Kata, StanceMeta } from "./types.ts";
import { DEFAULT_BODY_STATE } from "./types.ts";

export { type FootMove, FOOT_MOVES } from "./moves/foot.tsx";
export { type HandMove, HAND_MOVES } from "./moves/hand.tsx";
export { type Stance, STANCES } from "./moves/stance.tsx";
export { HEIGHTS, RAW_HEIGHTS_META as HEIGHTS_META, type Height, type RawHeightMeta } from "./moves/height.ts";
export * from "./types.ts";
export * from "./katas/types.ts";

export const KATAS: Kata[] = RAW_KATAS.map((kata) => ({
  ...kata,
  stances: {},
  handMoves: {},
  footMoves: {},
  states: [],
}));
export const KATAS_INDEX = keyBy(KATAS, "slug");

export const STANCES_META = mapValues(RAW_STANCES_META, (meta: RawStanceMeta, slug: Stance) => ({
  ...meta,
  slug,
  katas: {},
})) as unknown as Record<Stance, StanceMeta>;
export const HAND_MOVES_META = mapValues(RAW_HAND_MOVES_META, (meta: RawHandMoveMeta, slug: HandMove) => ({
  ...meta,
  slug,
  katas: {},
})) as unknown as Record<HandMove, HandMoveMeta>;
export const FOOT_MOVES_META = mapValues(RAW_FOOT_MOVES_META, (meta: RawFootMoveMeta, slug: FootMove) => ({
  ...meta,
  slug,
  katas: {},
})) as unknown as Record<FootMove, FootMoveMeta>;

/**
 * This function searches all katas, and increments all "enriched" indices:
 */
function _indexData(): void {
  KATAS.forEach((kata) => {
    const slug = kata.slug;
    let lastStance = kata.initialStance;
    const initialBodyState = {
      ...DEFAULT_BODY_STATE,
      feet: RAW_STANCES_META[lastStance.stance].rightFootLeadingState,
    };

    kata.states = [lastStance.leadingFoot === "right" ? initialBodyState : mirrorBodyState(initialBodyState)];

    let state: BodyState = kata.states[0];
    for (let i = 0, l = kata.steps.length; i < l; i++) {
      const step = kata.steps[i];
      const { move, stance: stepStance, leftHand, rightHand, leftFoot, rightFoot } = step;
      const stance = stepStance || lastStance;

      state = cloneDeep(state);
      if (move) state = moveFoot(state, move, stance);
      state = moveHands(state, step, stance);

      kata.states.push(state);
      lastStance = stance;

      if (stepStance) {
        kata.stances[stepStance.stance] = (kata.stances[stepStance.stance] || 0) + 1;
        STANCES_META[stepStance.stance].katas[slug] = (STANCES_META[stepStance.stance].katas[slug] || 0) + 1;
      }
      if (leftHand) {
        kata.handMoves[leftHand.move] = (kata.handMoves[leftHand.move] || 0) + 1;
        HAND_MOVES_META[leftHand.move].katas[slug] = (HAND_MOVES_META[leftHand.move].katas[slug] || 0) + 1;
      }
      if (rightHand) {
        kata.handMoves[rightHand.move] = (kata.handMoves[rightHand.move] || 0) + 1;
        HAND_MOVES_META[rightHand.move].katas[slug] = (HAND_MOVES_META[rightHand.move].katas[slug] || 0) + 1;
      }
      if (leftFoot) {
        kata.footMoves[leftFoot.move] = (kata.footMoves[leftFoot.move] || 0) + 1;
        FOOT_MOVES_META[leftFoot.move].katas[slug] = (FOOT_MOVES_META[leftFoot.move].katas[slug] || 0) + 1;
      }
      if (rightFoot) {
        kata.footMoves[rightFoot.move] = (kata.footMoves[rightFoot.move] || 0) + 1;
        FOOT_MOVES_META[rightFoot.move].katas[slug] = (FOOT_MOVES_META[rightFoot.move].katas[slug] || 0) + 1;
      }
    }
  });
}

_indexData();
