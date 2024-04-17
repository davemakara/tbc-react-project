import ProfileForm from "../../../components/ProfileForm";

import styles from "../../../components/ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <section className={styles["profile-page-wrapper"]}>
      <ProfileForm />
    </section>
  );
};
export default ProfilePage;
