import "./Content.css";
import Terminal from "./Terminal/Terminal";
import IntroSection from "./IntroSection";

const Content = () => {
  return (
      <div className="content-page">
        <div className="content-div">
          <IntroSection />
          <Terminal />
        </div>
      </div>
  );
};

export default Content;
