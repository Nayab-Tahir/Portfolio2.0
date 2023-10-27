const TerminalLine = (props) => {

  var content;
  if(props.isActive){
    content = (
      <div className="terminal-body-command-container">
        <input
          type="text"
          name="command"
          id="command"
          value={props.command}
          onChange={props.handleCommand}
          onKeyDown={props.handleEnter}
        />
      </div>
    );
  }
  else if(props.outputList.length !== 0){
    content = (
      <div className="terminal-body-line">
        <div className="terminal-body-output">
          {props.outputList.map((output) => (
            <div>{output}</div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="terminal-body-line">
        <div className="terminal-body-title">nayabtahir ~ {props.dir} %&nbsp;</div>
        {!props.isActive && <div className="terminal-executed-command">{props.command}</div>}
        {props.isActive && content}
      </div>
      {!props.isActive && content}
    </>
  );
};

export default TerminalLine;