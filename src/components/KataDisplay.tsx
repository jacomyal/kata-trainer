import cx from "classnames";
import type { FC } from "react";
import { useCallback, useMemo, useState } from "react";

import type { BodyState, Kata, Palm } from "../core/data";

const PALM_CLASSES: Record<Palm, string> = {
  back: "side",
  front: "side",
  ground: "ground",
  side: "side",
  sky: "sky",
};

export const BodyStateDisplay: FC<{ state: BodyState }> = ({ state: { feet, hands, pelvis, head } }) => {
  return (
    <>
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
          className="body-wrapper"
          style={{
            top: -pelvis.y + "cm",
            left: pelvis.x + "cm",
          }}
        >
          <div className="hands">
            <div
              className={cx(
                "hand hand-left",
                hands.left.closedFist ? "closed" : "opened",
                PALM_CLASSES[hands.left.palm],
              )}
              style={{
                top: -hands.left.y + "cm",
                left: hands.left.x + "cm",
                transform: `rotate(${-hands.left.angle - Math.PI / 2}rad)`,
              }}
            />
            <div
              className={cx(
                "hand hand-right",
                hands.right.closedFist ? "closed" : "opened",
                PALM_CLASSES[hands.right.palm],
              )}
              style={{
                top: -hands.right.y + "cm",
                left: hands.right.x + "cm",
                transform: `rotate(${-hands.right.angle - Math.PI / 2}rad)`,
              }}
            />
          </div>

          <div
            className="body"
            style={{
              transform: `rotate(${-pelvis.angle - Math.PI / 2}rad)`,
            }}
          />

          <div
            className="head"
            style={{
              transform: `rotate(${-head.angle - Math.PI / 2}rad)`,
            }}
          />
        </div>
      </div>
    </>
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
      <div className="dojo">
        <BodyStateDisplay state={feetState} />
      </div>

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
