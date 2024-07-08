import { mirrorFeetState } from "../../utils/positions.ts";
import { moveFoot } from "../../utils/transitions.ts";
import { STANCES_META } from "../moves/stance.tsx";
import type { FeetState } from "../types.ts";
import type { EnrichedKata, Kata } from "./types.ts";

export function enrichKata(kata: Kata): EnrichedKata {
  const { initialStance } = kata;
  const states: FeetState[] = [
    initialStance.leadingFoot === "right"
      ? STANCES_META[initialStance.stance].rightFootLeadingState
      : mirrorFeetState(STANCES_META[initialStance.stance].rightFootLeadingState),
  ];

  let state: FeetState = states[0];
  let lastStance = initialStance;
  for (let i = 0, l = kata.steps.length; i < l; i++) {
    const { move } = kata.steps[i];
    const stance = kata.steps[i].stance || lastStance;

    state = move ? moveFoot(state, move, stance).to : state;
    states.push(state);
    lastStance = stance;
  }

  return {
    ...kata,
    states,
  };
}
