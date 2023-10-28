import Section from "../../../UI/Section";
import SectionHead from "../../../UI/SectionHead";
import Button from "../../../UI/Button";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="*"
        title="contact_me"
        intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores praesentium veniam vero doloremque corrupti earum."
      />
      <div className="contact-container">
        <div className="form-container">
          <form className="contact-form" action="">
            <div>
              <input type="text" placeholder="_name*" />
            </div>
            <div>
              <input type="text" placeholder="_email*" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="_message*"
              ></textarea>
            </div>
            <div id="contact-btn-div">
              <Button text="send" fontSize="18px" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
