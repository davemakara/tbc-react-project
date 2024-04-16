"use client";

import ContactForm from "../../components/ContactForm";
import ContactInfoBox from "../../components/ContactInfoBox";
import Layout from "../../components/Layout";

import styles from "../../components/ContactPage.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <section className={styles["contactPage-wrapper"]}>
        <ContactInfoBox />
        <ContactForm />
      </section>
    </Layout>
  );
};
export default ContactPage;
