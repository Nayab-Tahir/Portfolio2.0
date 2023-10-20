import "./Content.css";
import Terminal from "./Terminal/Terminal";

const Content = () => {
  return (
      <div className="content-page">
        <div className="content-div">
          <div className="section">
            <div className="greetings">
              <h6>// hi, i'm nayab tahir, a...</h6>
            </div>
            <div className="career">
              <span className="career-braces">&#123;"&nbsp;</span>
              <span className="career-content">_web developer|</span>
              <span className="career-braces">&nbsp;"&#125;</span>
            </div>
            <div className="arrow">
              <h5>==&gt;</h5>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
  );
};

export default Content;
