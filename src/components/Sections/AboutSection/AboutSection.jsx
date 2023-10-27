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
            ...Driven software engineer and data science enthusiast crafting web
            magic with React. Up for it?
          </p>
        </div>
      </div>
      <div className="about-me-desc-container">
        <div>
          <div className="about-me-short-desc">
            <h5>
              ...Aspiring software engineer adept in C++, Java, Python, React,
              and data science. Proven project developer, eager collaborator,
              and lifelong learner;
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
              I've also enhanced my skills through Coursera courses. I'm a
              problem solver, creative thinker, and eager collaborator, always
              seeking new challenges and innovations;
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
