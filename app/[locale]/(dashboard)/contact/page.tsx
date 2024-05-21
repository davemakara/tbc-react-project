import ContactForm from "../../../../components/contact/ContactForm";
import ContactInfoBox from "../../../../components/contact/ContactInfoBox";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40 block md:flex md:justify-around">
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;
