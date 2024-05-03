import ContactForm from "../../../../components/contact/ContactForm";
import ContactInfoBox from "../../../../components/contact/ContactInfoBox";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#DDDDDD] dark:bg-[#2C3333] pt-[10rem] px-[2rem] pb-[6rem] block md:flex md:justify-around md:items-stretch">
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;