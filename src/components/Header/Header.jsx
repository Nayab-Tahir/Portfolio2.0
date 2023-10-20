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
              <div className="career">web_dev</div>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
