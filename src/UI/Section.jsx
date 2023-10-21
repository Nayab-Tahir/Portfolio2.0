import "./UI.css";

const Section = (props) => {
    return <div className={`section ${props.styleClass}`}>{props.children}</div>;
  };
  
  export default Section;
  