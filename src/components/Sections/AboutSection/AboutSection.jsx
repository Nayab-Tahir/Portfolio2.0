import Section from "../../../UI/Section";
import SectionHead from "../../../UI/SectionHead";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="/"
        title="about_me"
        intro="...Driven software engineer and data science enthusiast crafting web
            magic with React. Up for it?"
      />
      <div className="about-me-desc-container">
        <div>
          <div className="about-me-short-desc">
            <h5>
              ...Aspiring software engineer adept in [C++, Java, Python, React,
              data science].var codeSage = 'Pro_dev' + 'eager_collab' +
              'lifelong_learner';
            </h5>
          </div>
        </div>
        <div>
          <div className="about-me-detailed-desc">
            <p>
              …I'm an aspiring software engineer with a strong foundation in
              C++, Java, Python, React, and a deep passion for data science.
              I've contributed to diverse projects, including a Java-based
              DocAppointmentPortal, an Android app called QuranApp, and a
              comprehensive MERN stack project, Tameer.pk, for my final year.
              I've enhanced my skills through Coursera. I'm a
              problem solver, creative thinker, and eager collaborator, always
              seeking innovations;
            </p>
          </div>
        </div>
      </div>
      <div className="about-me-btn">
        <a href="#">&#123;read_more&#125;</a>
      </div>
    </Section>
  );
};

export default AboutSection;
