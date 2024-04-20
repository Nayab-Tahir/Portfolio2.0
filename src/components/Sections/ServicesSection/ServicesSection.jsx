import Section from "../../../UI/Section";
import SectionHead from "../../../UI/SectionHead";
import useAnimateText from "../../../Hooks/useAnimateText";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import Button from "../../../UI/Button";
import "./ServicesSection.css";

const ServicesSection = () => {
  const service_1 = useAnimateText("_data scientist");
  const service_2 = useAnimateText("_ml engineer");
  const service_3 = useAnimateText("_ai specialist");

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="#"
        title="services"
        intro="...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        withPaddingBottom={true}
      />
      <div className="services">
        <div>
          <AnimatedHeading content={service_1} color="#2fcbef" size="7vw" />
        </div>
        <div>
          <AnimatedHeading content={service_2} size="7vw" />
        </div>
        <div>
          <AnimatedHeading content={service_3} color="#9a99ff" size="7vw" />
        </div>
      </div>
      <Button text="all_services" />
    </Section>
  );
};

export default ServicesSection;
