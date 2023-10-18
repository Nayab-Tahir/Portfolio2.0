import "./Header.css";

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
          <div className="end">
              <nav>
                <ul>
                    <li>_home</li>
                    <li>_about</li>
                    <li>_portfolio</li>
                    <li>_services</li>
                    <li>_resume</li>
                    <li>_contact</li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
