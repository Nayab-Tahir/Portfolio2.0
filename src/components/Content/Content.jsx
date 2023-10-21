import Terminal from "./TerminalSection/Terminal";
import IntroSection from "./IntroSection/IntroSection";
import Module from "../../UI/Module";
import AboutSection from "./AboutSection/AboutSection";
import "./Content.css";

const Content = () => {
  return (
      <div className="content-page">
        <Module>
          <IntroSection />
          <Terminal />
        </Module>
        <Module styleClass="about-module">
          <AboutSection />
        </Module>
      </div>
  );
};

export default Content;
