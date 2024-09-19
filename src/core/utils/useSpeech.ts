import { useCallback, useEffect, useMemo, useState } from "react";

type SpeechSynthesisVoice = ReturnType<typeof speechSynthesis.getVoices>[number];
export type SpeechOption =
  | { value: "disabled"; label: string }
  | { value: `voice-${string}`; label: string; voice: SpeechSynthesisVoice };

const DEFAULT_OPTION: SpeechOption = { value: "disabled", label: "Lecture automatique désactivée" };
const IS_CLIENT = typeof speechSynthesis !== "undefined";

export function useSpeech() {
  const [options, setOptions] = useState<SpeechOption[]>([DEFAULT_OPTION]);
  const [voiceOption, setVoiceOption] = useState(options[0]);
  const voice = useMemo(() => (voiceOption.value === "disabled" ? null : voiceOption.voice), [voiceOption]);

  const speak = useCallback(
    (sentence: string) => {
      if (!voice || !IS_CLIENT) return;

      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.voice = voice;
      // utterance.rate = 1.2;
      speechSynthesis.speak(utterance);
    },
    [voice],
  );

  const cancelSpeak = useCallback(() => {
    if (!IS_CLIENT || !speechSynthesis.speaking) return;

    speechSynthesis.cancel();
  }, []);

  useEffect(() => {
    if (IS_CLIENT)
      setTimeout(
        () =>
          setOptions(
            [DEFAULT_OPTION].concat(
              speechSynthesis
                .getVoices()
                .filter((voice) => voice.lang === "fr-FR")
                .map((voice) => ({ value: `voice-${voice.name}`, label: voice.name, voice })),
            ),
          ),
        0,
      );
  }, []);

  return {
    speak,
    options,
    voice: voiceOption,
    setVoice: setVoiceOption,
    isSpeaking: IS_CLIENT ? speechSynthesis.speaking : false,
    cancelSpeak: cancelSpeak,
  };
}
