import styles from "./ContactInfoBox.module.css";

const ContactInfoBox = () => {
  return (
    <div className={styles["contact-info-box"]}>
      <h1>CONTACT US</h1>
      <ul>
        <li>Email: companyinfo@gmail.com</li>
        <li>Address: Company Street 10 </li>
        <li>Phone: +995 555123123</li>
      </ul>
    </div>
  );
};
export default ContactInfoBox;
