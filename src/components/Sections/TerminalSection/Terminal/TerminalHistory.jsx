import TerminalLine from './TerminalLine';

const TerminalHistory = (props) => {
  return (
    props.terminalLinesList.map((line) => (
      <TerminalLine
        isActive={false}
        outputList={line["outputList"]}
        dir={line["path"]}
        command={line["command"]} />
    ))
  )
};

export default TerminalHistory;