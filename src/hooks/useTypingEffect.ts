import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
  words: string[],
  typeSpeedBase = 70,
  deleteSpeed = 30,
  pauseDelay = 2500,
  startDelay = 500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  // useRef agar referensi array stabil, tidak memicu re-run useEffect
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentWordIndex = 0;

    const type = () => {
      const currentWord = wordsRef.current[currentWordIndex];
      setText(currentWord.substring(0, currentIndex));

      if (!isDeleting && currentIndex === currentWord.length) {
        // Paused at the end of word
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseDelay);
      } else if (isDeleting && currentIndex === 0) {
        // Paused at the start (deleted all)
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % wordsRef.current.length;
        setWordIndex(currentWordIndex);

        timeoutId = setTimeout(() => {
          type();
        }, startDelay);
      } else {
        currentIndex += isDeleting ? -1 : 1;
        const speed = isDeleting ? deleteSpeed : Math.random() * 50 + typeSpeedBase;
        timeoutId = setTimeout(type, speed);
      }
    };

    timeoutId = setTimeout(type, startDelay);

    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeSpeedBase, deleteSpeed, pauseDelay, startDelay]);

  return { text, wordIndex };
}
