const AnimatedHeading = (props) => {
  const customColor = props.color || "";
  const customSize = props.size || "";

  return (
    <>
      <span className="heading-braces" style={{fontSize: customSize}}>&#123;"&nbsp;</span>
      <span className="heading-content" style={{color: customColor, fontSize: customSize}}>
        {props.content}
        <span className="heading-cursor" style={{color: customColor, fontSize: customSize}}>|</span>
      </span>
      <span className="heading-braces" style={{fontSize: customSize}}>&nbsp;"&#125;</span>
    </>
  );
};

export default AnimatedHeading;
