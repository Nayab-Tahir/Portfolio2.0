import { useCallback, useEffect, useState } from "react";
import "./IntroSection.css";

const careerList = ["_software engineer", "_web developer", "_data scientist"];

const IntroSection = () => {
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


  return (
    <div className="section">
      <div className="greetings">
        <h6>// hi, i'm nayab tahir, a...</h6>
      </div>
      <div className="career">
        <span className="career-braces">&#123;"&nbsp;</span>
        <span className="career-content">{career}<span className="cursor">|</span></span>
        <span className="career-braces">&nbsp;"&#125;</span>
      </div>
      <div className="arrow">
        <h5>==&gt;</h5>
      </div>
    </div>
  );
};

export default IntroSection;
