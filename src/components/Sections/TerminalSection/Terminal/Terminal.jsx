import { useState } from "react";

const commandList = ["ls", "cd"];
const listDir = ["Projects", "Resume", "About"];

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [terminalLinesList, setTerminalLinesList] = useState([]);

  const handleCommand = (e) => {
    setCommand(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCommand("");
      if (e.target.value === "ls") {
        setTerminalLinesList((prevList) => [
          ...prevList,
          { command: e.target.value, outputList: listDir },
        ]);
      }
      else if(e.target.value === "clear"){
        setTerminalLinesList([]);
      }
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-head">Terminal</div>
      {terminalLinesList.map((line) => (
        <>
          <div className="terminal-body-line">
            <div className="terminal-body-title">nayabtahir ~ %&nbsp;</div>
            <div className="terminal-executed-command">{line['command']}</div>
          </div>
          <div className="terminal-body-line">
            <div className="terminal-body-output">
              {line["outputList"].map((output) => (
                <div>{output}</div>
              ))}
            </div>
          </div>
        </>
      ))}
      <div className="terminal-body-line">
        <div className="terminal-body-title">nayabtahir ~ %&nbsp;</div>
        <div className="terminal-body-command-container">
          <input
            type="text"
            name="command"
            id="command"
            value={command}
            onChange={handleCommand}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
