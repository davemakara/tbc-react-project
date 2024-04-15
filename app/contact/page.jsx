"use client";

import ContactForm from "../../components/ContactForm";
import ContactInfoBox from "../../components/ContactInfoBox";
import Layout from "../../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <section className="contactPage-wrapper">
        <ContactInfoBox />
        <ContactForm />
      </section>
    </Layout>
  );
};
export default ContactPage;
