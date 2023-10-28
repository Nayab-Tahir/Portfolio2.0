import { useCallback, useEffect, useState } from "react";
import useAnimateText from "./useAnimateText";

const useAnimateTextList = (textList) => {
  const [textIndex, setTextIndex] = useState(0);

  const getNextText = useCallback(() => {
    setTextIndex(prevIndex => (prevIndex + 1) % textList.length);
  }, []);

  const animatedText = useAnimateText(textList[textIndex], true, getNextText);

  return animatedText;
};

export default useAnimateTextList;
