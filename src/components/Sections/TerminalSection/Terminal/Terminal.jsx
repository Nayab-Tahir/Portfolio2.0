import { useState } from "react";
import TerminalHistory from "./TerminalHistory";
import TerminalLine from "./TerminalLine";

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
      <TerminalHistory terminalLinesList={terminalLinesList} />
      <TerminalLine
        isActive={true}
        command={command}
        handleCommand={handleCommand}
        handleEnter={handleEnter}
        dir={dir} />
    </div>
  );
};

export default Terminal;
