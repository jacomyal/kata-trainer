import type { FC } from "react";
import { useCallback, useMemo, useState } from "react";

import type { EnrichedKata } from "../core/data/katas/types.ts";
import type { FeetState } from "../core/data/types.ts";

const FeetStateDisplay: FC<{ state: FeetState }> = ({ state: { left, right } }) => {
  return (
    <div className="feet-state border">
      <div>
        <div
          className="foot foot-left"
          style={{
            top: -left.heel.y + "cm",
            left: left.heel.x + "cm",
            transform: `rotate(${-left.angle}rad)`,
          }}
        />
        <div
          className="foot foot-right"
          style={{
            top: -right.heel.y + "cm",
            left: right.heel.x + "cm",
            transform: `rotate(${-right.angle}rad)`,
          }}
        />
      </div>
    </div>
  );
};

const KataDisplay: FC<{ kata: EnrichedKata }> = ({ kata }) => {
  const [step, setStep] = useState(0);
  const feetState = useMemo(() => kata.states[step], [kata, step]);
  const checkStep = useCallback(
    (step) => {
      const l = kata.steps.length;
      return ((step % l) + l) % l;
    },
    [kata],
  );

  return (
    <section className="row">
      <FeetStateDisplay state={feetState} />
      <div className="text-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => setStep(checkStep(step - 1))}>
          ←
        </button>
        <span className="mx-2">
          {step + 1} / {kata.steps.length}
        </span>
        <button className="btn btn-outline-primary" onClick={() => setStep(checkStep(step + 1))}>
          →
        </button>
      </div>
    </section>
  );
};

export default KataDisplay;
