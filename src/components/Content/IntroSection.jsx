import useTextAnimation from "../../Hooks/useTextAnimation";
import "./IntroSection.css";

const careerList = ["_software engineer", "_web developer", "_data scientist"];

const IntroSection = () => {
  const career = useTextAnimation(careerList);

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
