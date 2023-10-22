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
      <div className="about-me-desc-container">
        <div>
          <div className="about-me-short-desc">
            <h5>
              ...I have over 12 years of experience in web development, with a
              strong background in both front-end and back-end technologies;
            </h5>
          </div>
        </div>
        <div>
          <div className="about-me-detailed-desc">
            <p>
              …curabitur sit amet luctus tortor, sit amet ultrices ante.
              Maecenas convallis dui arcu, et tempor felis consectetur vel.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed id velit ex. Cras ultricies nisi eget
              sem mollis, a maximus felis laoreet. Nam eget ultricies urna, vel
              ullamcorper arcu. Quisque feugiat rhoncus arcu, a tincidunt arcu
              lacinia ac. Maecenas molestie vel ante in finibus. Sed sit amet
              ligula eros. In hac habitasse platea dictumst;
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
