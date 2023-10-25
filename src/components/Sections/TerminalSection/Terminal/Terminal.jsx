const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-head">Terminal</div>
      <div className="terminal-body">
        <div className="terminal-body-title">nayabtahir ~ %&nbsp;</div>
        <div className="terminal-body-command-container">
          <input type="text" name="command" id="command" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
