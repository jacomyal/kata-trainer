import type { FC } from "react";
import { useCallback, useMemo, useState } from "react";

import type { BodyState, Kata } from "../core/data";

export const BodyStateDisplay: FC<{ state: BodyState }> = ({ state: { feet, pelvis } }) => {
  return (
    <div className="body-state border">
      <div className="feet">
        <div
          className="foot foot-left"
          style={{
            top: -feet.left.y + "cm",
            left: feet.left.x + "cm",
            transform: `rotate(${-feet.left.angle - Math.PI / 2}rad)`,
          }}
        />
        <div
          className="foot foot-right"
          style={{
            top: -feet.right.y + "cm",
            left: feet.right.x + "cm",
            transform: `rotate(${-feet.right.angle - Math.PI / 2}rad)`,
          }}
        />
      </div>
      <div>
        <div
          className="body"
          style={{
            top: -pelvis.y + "cm",
            left: pelvis.x + "cm",
            transform: `rotate(${-pelvis.angle - Math.PI / 2}rad)`,
          }}
        />
      </div>
    </div>
  );
};

const KataDisplay: FC<{ kata: Kata }> = ({ kata }) => {
  const [step, setStep] = useState(0);
  const feetState = useMemo(() => kata.states[step], [kata, step]);
  const checkStep = useCallback(
    (step: number) => {
      const l = kata.steps.length;
      return ((step % l) + l) % l;
    },
    [kata],
  );

  return (
    <section className="row">
      <BodyStateDisplay state={feetState} />

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
