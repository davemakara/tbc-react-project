import Layout from "../../components/Layout";
import ProfileForm from "../../components/ProfileForm";

import styles from "../../components/ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <Layout>
      <section className={styles["profile-page-wrapper"]}>
        <ProfileForm />
      </section>
    </Layout>
  );
};
export default ProfilePage;
