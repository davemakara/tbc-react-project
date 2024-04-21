import ContactForm from "../../../components/ContactForm";
import ContactInfoBox from "../../../components/ContactInfoBox";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen bg-mainLightBG pt-[10rem] px-[2rem] pb-[6rem] block md:flex md:justify-around md:items-stretch">
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;
