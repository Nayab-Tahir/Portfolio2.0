const SectionHead = (props) => {
  return (
    <>
      <div className="head-symbol">
        <h5>&#123;{props.symbol}&#125;</h5>
      </div>
      <div className="head-div">
        <div className="head-container">
          <h2 className="head-title">&lt;{props.title}&gt;</h2>
          <p className="head-intro">
            {props.intro}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHead;
