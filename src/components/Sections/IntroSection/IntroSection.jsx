import useTextAnimation from "../../../Hooks/useTextAnimation";
import Section from "../../../UI/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import "./IntroSection.css";

const careerList = ["_software engineer", "_web developer", "_data scientist"];

const IntroSection = () => {
  const career = useTextAnimation(careerList);

  return (
    <Section>
      <div className="greetings">
        <h6>// hi, i'm nayab tahir, a...</h6>
      </div>
      <div className="career">
        <AnimatedHeading content={career} />
      </div>
      <div className="arrow">
        <h5>==&gt;</h5>
      </div>
    </Section>
  );
};

export default IntroSection;
