import ContactForm from "../../../components/ContactForm";
import ContactInfoBox from "../../../components/ContactInfoBox";

import styles from "../../../components/ContactPage.module.css";

const ContactPage = () => {
  return (
    <section className={styles["contactPage-wrapper"]}>
      <ContactInfoBox />
      <ContactForm />
    </section>
  );
};
export default ContactPage;
