import "./Terminal.css";
import Instruction from "./Instruction";

const Terminal = () => {
  const instructions = [
    {
      num: 1,
      title: "clear",
      description: "It will clear the terminal",
    },
    {
      num: 2,
      title: "cd",
      description: "Changes directory to specified directory",
    },
    {
      num: 3,
      title: "ls",
      description: "List files and directories",
    },
    {
      num: 4,
      title: "mkdir",
      description: "Create a new directory",
    },
    {
      num: 5,
      title: "rm",
      description: "Remove a file or directory",
    },
    {
      num: 6,
      title: "mv",
      description: "Move or rename a file or directory",
    },
    {
      num: 7,
      title: "cp",
      description: "Copy a file or directory",
    },
    {
      num: 8,
      title: "cat",
      description: "Display the contents of a file",
    },
  ];

  return (
    <div className="section">
      <div className="terminal-div">
        <div className="terminal">
          <div className="terminal-head">Terminal</div>
          <div className="terminal-body">nayabtahir ~ %&nbsp;|</div>
        </div>
        <div className="terminal-instructions">
          {instructions.map((inst) => (
            <Instruction
              num={inst.num}
              title={inst.title}
              description={inst.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
