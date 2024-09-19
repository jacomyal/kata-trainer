import { FC, KeyboardEvent, useCallback, useEffect, useMemo, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Select from "react-select";

import type { Kata } from "../core/data";
import { stepToSentence } from "../core/utils/speakableTexts.ts";
import { SpeechOption, useSpeech } from "../core/utils/useSpeech.ts";
import { BodyStateDisplay } from "./BodyStateDisplay.tsx";

const BASE_TIME = 1200;
const PAUSE_TIME = 1000;

const KataDisplay: FC<{ kata: Kata }> = ({ kata }) => {
  const { speak, options, voice, setVoice, cancelSpeak } = useSpeech();
  const [state, setState] = useState<{
    step: number;
    timeout?: number;
  }>({ step: 0 });

  const feetState = useMemo(() => kata.states[state.step], [kata, state.step]);
  const kataStep = useMemo(
    () => kata.steps[(state.step - 1 + kata.steps.length) % kata.steps.length],
    [kata, state.step],
  );
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

  useEffect(() => {
    cancelSpeak();
    speak(state.step ? stepToSentence(kataStep) : "Position initiale");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kataStep, state.step]);

  return (
    <section className="row p-3" onKeyDown={handleKeyDown} tabIndex={1}>
      <div className="dojo">
        <BodyStateDisplay state={feetState} />
      </div>

      <div className="text-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => setStep(state.step - 1)}>
          <GrFormPrevious />
        </button>
        <span className="mx-2">
          {state.step + 1} / {kata.steps.length}
        </span>
        <button className="btn btn-outline-primary" onClick={() => setStep(state.step + 1)}>
          <GrFormNext />
        </button>
      </div>

      <div className="text-center mt-2">
        <button className="btn btn-outline-primary me-2" onClick={() => toggleAutoPlay()}>
          {state.timeout ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
        <Select<SpeechOption>
          className="d-inline-block"
          options={options}
          value={voice}
          onChange={(opt) => opt && setVoice(opt)}
          id="voice-input"
        />
      </div>
    </section>
  );
};

export default KataDisplay;
