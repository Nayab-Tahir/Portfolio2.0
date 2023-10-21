import Section from "../../../UI/Section";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <Section styleClass="section-none">
      <div className="symbol">
        <h5>&#123;/&#125;</h5>
      </div>
      <div className="about-me-div">
        <div className="about-me-container">
          <h2 className="about-me-title">&lt;about_me&gt;</h2>
          <p className="about-me-intro">
            ...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            facilis error ducimus adipisci?
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
