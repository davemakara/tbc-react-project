import ContactForm from "../components/ContactForm";
import ContactInfoBox from "../components/ContactInfoBox";

const ContactPage = () => {
  return (
    <section className="contactPage-wrapper">
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;
