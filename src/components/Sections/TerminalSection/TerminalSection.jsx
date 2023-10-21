import Terminal from "./Terminal/Terminal";
import TerminalInstructions from "./TerminalInstructions/TerminalInstructions";
import Section from "../../../UI/Section";
import "./TerminalSection.css";

const TerminalSection = () => {
  return (
    <Section>
      <div className="terminal-div">
        <Terminal />
        <TerminalInstructions/>
      </div>
    </Section>
  );
};

export default TerminalSection;
