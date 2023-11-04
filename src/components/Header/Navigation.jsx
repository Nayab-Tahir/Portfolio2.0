import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items-list">
        <li className="selected">_home</li>
        <li>_about</li>
        <li>_portfolio</li>
        <li>_services</li>
        <li>_resume</li>
        <li>_contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
