import { useState, useEffect } from "react";

const useAnimateText = (inputText, isList=false, getNextText=null) => {
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [isIncreasing, setIsIncreasing] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (isIncreasing === 1) {
            if (charIndex === inputText.length) {
                setIsIncreasing(0);
                setCharIndex((prevIndex) => prevIndex - 1);
            } else {
              setText(
                (prevText) => prevText + inputText[charIndex]
              );
              setCharIndex((prevIndex) => prevIndex + 1);
            }
          } else {
            if (charIndex < 0) {
              if(isList){
                getNextText();
              }
              setCharIndex(0);
              setIsIncreasing(1);
            } else {
              if(isIncreasing === 0) setIsIncreasing(-1);
              setText((prevText) => prevText.slice(0, -1));
              setCharIndex((prevIndex) => prevIndex - 1);
            }
          }
        }, isIncreasing ===0 ? 1500: isIncreasing === 1 ? 150 : 80);
    
        return () => clearInterval(intervalId);
      }, [charIndex, isIncreasing]);
    
    
      return text;
};

export default useAnimateText;