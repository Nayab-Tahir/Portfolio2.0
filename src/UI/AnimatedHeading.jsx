const AnimatedHeading = (props) => {
  return (
    <>
      <span className="heading-braces">&#123;"&nbsp;</span>
      <span className="heading-content">{props.content}<span className="heading-cursor">|</span></span>
      <span className="heading-braces">&nbsp;"&#125;</span>
    </>
  );
};

export default AnimatedHeading;
