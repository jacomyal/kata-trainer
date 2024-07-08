import { mirrorFeetState } from "../../utils/positions.ts";
import { moveFoot } from "../../utils/transitions.ts";
import { STANCES_META } from "../moves/stance.ts";
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
  for (let i = 0, l = kata.steps.length; i < l; i++) {
    const { move, stance } = kata.steps[i];

    state = move ? moveFoot(state, move, stance).to : state;
    states.push(state);
  }

  return {
    ...kata,
    states,
  };
}
