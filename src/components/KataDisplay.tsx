import cx from "classnames";
import { FC, KeyboardEvent, useCallback, useMemo, useState } from "react";

import type { BodyState, Kata, Palm } from "../core/data";

const PALM_CLASSES: Record<Palm, string> = {
  back: "side",
  front: "side",
  ground: "ground",
  side: "side",
  sky: "sky",
};

const ANGLE_OFFSET = -Math.PI / 2;

const BASE_TIME = 1200;
const PAUSE_TIME = 1000;

export const BodyStateDisplay: FC<{ state: BodyState }> = ({ state: { feet, hands, pelvis, head } }) => {
  return (
    <>
      <div className="feet">
        <div
          className="foot foot-left"
          style={{
            top: -feet.left.y + "cm",
            left: feet.left.x + "cm",
            transform: `rotate(${-feet.left.angle + ANGLE_OFFSET}rad)`,
          }}
        />
        <div
          className="foot foot-right"
          style={{
            top: -feet.right.y + "cm",
            left: feet.right.x + "cm",
            transform: `rotate(${-feet.right.angle + ANGLE_OFFSET}rad)`,
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
                transform: `rotate(${-hands.left.angle + ANGLE_OFFSET}rad)`,
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
                transform: `rotate(${-hands.right.angle + ANGLE_OFFSET}rad)`,
              }}
            />
          </div>

          <div
            className="body"
            style={{
              transform: `rotate(${-pelvis.angle + ANGLE_OFFSET}rad)`,
            }}
          />

          <div
            className="head"
            style={{
              transform: `rotate(${-head.angle + ANGLE_OFFSET}rad)`,
            }}
          />
        </div>
      </div>
    </>
  );
};

const KataDisplay: FC<{ kata: Kata }> = ({ kata }) => {
  const [state, setState] = useState<{
    step: number;
    timeout?: number;
  }>({ step: 0 });

  const feetState = useMemo(() => kata.states[state.step], [kata, state.step]);
  const cleanStep = useCallback(
    (step: number) => {
      const l = kata.steps.length;
      return ((step % l) + l) % l;
    },
    [kata],
  );
  const setStep = useCallback(
    (step: number) => {
      setState({
        ...state,
        step: cleanStep(step),
      });
    },
    [cleanStep, state],
  );
  const start = useCallback(() => {
    setState(({ step }) => {
      const newStep = cleanStep(step + 1);

      if (newStep < kata.steps.length - 1) {
        const hasPause = kata.steps[step].pause;
        const time = BASE_TIME + (hasPause ? PAUSE_TIME : 0);
        return {
          step: newStep,
          timeout: setTimeout(() => start(), time),
        };
      } else {
        return {
          step: newStep,
        };
      }
    });
  }, [cleanStep, kata.steps]);
  const stop = useCallback(() => {
    if (state.timeout) {
      clearTimeout(state.timeout);
      setState({
        ...state,
        timeout: undefined,
      });
    }
  }, [state]);
  const toggleAutoPlay = useCallback(() => {
    state.timeout ? stop() : start();
  }, [start, state.timeout, stop]);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      switch (e.key) {
        case "ArrowLeft":
          setStep(state.step - 1);
          break;
        case "ArrowRight":
          setStep(state.step + 1);
          break;
        case " ":
          toggleAutoPlay();
          break;
      }
    },
    [setStep, state.step, toggleAutoPlay],
  );

  return (
    <section className="row p-3" onKeyDown={handleKeyDown} tabIndex={1}>
      <div className="dojo">
        <BodyStateDisplay state={feetState} />
      </div>

      <div className="text-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => setStep(state.step - 1)}>
          ←
        </button>
        <span className="mx-2">
          {state.step + 1} / {kata.steps.length}
        </span>
        <button className="btn btn-outline-primary" onClick={() => setStep(state.step + 1)}>
          →
        </button>
      </div>

      <div className="text-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => toggleAutoPlay()}>
          {state.timeout ? "■" : "▶"}
        </button>
      </div>
    </section>
  );
};

export default KataDisplay;
