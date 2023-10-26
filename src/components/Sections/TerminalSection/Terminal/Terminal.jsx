import { useState } from "react";

const listDir = {
  "root": ["Projects", "Resume", "About"],
  "Projects": ["ByteInsight", "QuranApp"]
};

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [terminalLinesList, setTerminalLinesList] = useState([]);
  const [dir, setDir] = useState("root");

  const handleCommand = (e) => {
    setCommand(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      var currCmd = e.target.value.split(" ")[0];
      setCommand("");
      switch (currCmd) {
        case "ls":
          setTerminalLinesList((prevList) => [
            ...prevList,
            { command: currCmd, path: dir, outputList: listDir[dir] },
          ]);
          break;
        case "clear":
          setTerminalLinesList([]);
          break;
        case "cd":
          var paramDir = e.target.value.split(" ")[1];
          if (paramDir in listDir) {
            setDir(paramDir);
            setTerminalLinesList((prevList) => [
              ...prevList,
              { command: currCmd + " " + paramDir, path: dir, outputList: [] },
            ]);
          }
          break;
        case "":
          setTerminalLinesList((prevList) => [
            ...prevList,
            { command: currCmd, path: dir, outputList: [] },
          ]);
          break;
        default:
          setTerminalLinesList((prevList) => [
            ...prevList,
            { command: currCmd, path: dir, outputList: ["\'" + currCmd + "\' is not a valid command"] },
          ]);
          break;
      }
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-head">Terminal</div>
      {terminalLinesList.map((line) => (
        <>
          <div className="terminal-body-line">
            <div className="terminal-body-title">nayabtahir ~ {line["path"]} %&nbsp;</div>
            <div className="terminal-executed-command">{line['command']}</div>
          </div>
          <div className="terminal-body-line">
            <div className="terminal-body-output">
              {line["outputList"] && line["outputList"].map((output) => (
                <div>{output}</div>
              ))}
            </div>
          </div>
        </>
      ))}
      <div className="terminal-body-line">
        <div className="terminal-body-title">nayabtahir ~ {dir} %&nbsp;</div>
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
