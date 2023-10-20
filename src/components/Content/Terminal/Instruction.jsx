const Instruction = (props) => {
  return (
    <div className="instruction">
      <div className="instruction-num">&#123;{props.num}&#125;</div>
      <div className="instruction-title">_{props.title}</div>
      <div className="instruction-description">//&nbsp;{props.description}</div>
    </div>
  );
};

export default Instruction;
