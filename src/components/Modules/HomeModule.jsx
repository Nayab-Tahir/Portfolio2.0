import Module from "../../UI/Module";
import IntroSection from "../Sections/IntroSection/IntroSection";
import TerminalSection from "../Sections/TerminalSection/TerminalSection";

const HomeModule = () => {
  return (
    <Module>
      <IntroSection />
      <TerminalSection />
    </Module>
  );
};

export default HomeModule;
