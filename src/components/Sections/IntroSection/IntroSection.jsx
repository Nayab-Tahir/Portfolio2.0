import Section from "../../../UI/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import "./IntroSection.css";

const myCareerList = ["_software engineer", "_web developer", "_data scientist"];

const IntroSection = () => {
  const career = useAnimateTextList(myCareerList);

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
