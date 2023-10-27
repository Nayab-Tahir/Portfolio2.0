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
  const [parentDir, setParentDir] = useState(["root"]);

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
            setParentDir((prevDir) => [...prevDir, dir]);
            setDir(paramDir);
            setTerminalLinesList((prevList) => [
              ...prevList,
              { command: currCmd + " " + paramDir, path: dir, outputList: [] },
            ]);
          }
          else if (paramDir === "..") {
            var parDir;
            if (parentDir.length > 1) {
              parDir = parentDir[parentDir.length - 1];
              setParentDir((prevDir) => prevDir.slice(0, -1));
            }
            else {
              parDir = "root";
            }
            setTerminalLinesList((prevList) => [
              ...prevList,
              { command: currCmd + " " + paramDir, path: dir, outputList: [] },
            ]);
            setDir(parDir);
          }
          else {
            setTerminalLinesList((prevList) => [
              ...prevList,
              { command: currCmd + " " + paramDir, path: dir, outputList: [paramDir + ' is not a valid directory'] },
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
      <div className="terminal-head">&lt; Terminal /&gt;</div>
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
