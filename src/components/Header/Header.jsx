import "./Header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <div className="header-container">
          <div className="start">
            <div className="intro">
              <div className="name">// nayabtahir</div>
              <div className="career">ai_dev</div>
            </div>
          </div>
          <div className="end">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
