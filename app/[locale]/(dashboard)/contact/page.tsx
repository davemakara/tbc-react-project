import ContactForm from "../../../../components/contact/ContactForm";
import ContactInfoBox from "../../../../components/contact/ContactInfoBox";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#DDDDDD] dark:bg-[#2C3333] px-[3rem] md:px-0 lg:px-[5rem] pt-[2rem] md:pt-[5rem] block md:flex md:justify-around">
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;
