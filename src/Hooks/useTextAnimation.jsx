import { useState, useEffect } from "react";

const useTextAnimation = (careerList) => {
  const [career, setCareer] = useState("");
  const [careerIndex, setCareerIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isIncreasing === 1) {
        if (charIndex === careerList[careerIndex].length) {
            setIsIncreasing(0);
            setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setCareer(
            (prevCareer) => prevCareer + careerList[careerIndex][charIndex]
          );
          setCharIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (charIndex < 0) {
          setCareerIndex((prevIndex) => (prevIndex + 1) % 3);
          setCharIndex(0);
          setIsIncreasing(1);
        } else {
          if(isIncreasing === 0) setIsIncreasing(-1);
          setCareer((prevCareer) => prevCareer.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        }
      }
    }, isIncreasing ===0 ? 1500: isIncreasing === 1 ? 150 : 80);

    return () => clearInterval(intervalId);
  }, [careerIndex, charIndex, isIncreasing]);


  return career;
};

export default useTextAnimation;