import "./UI.css";

const Module = (props) => {
  return <div className={`module ${props.styleClass}`}>{props.children}</div>;
};

export default Module;
