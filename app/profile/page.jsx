import Layout from "../../components/Layout";
import ProfileForm from "../../components/ProfileForm";

const ProfilePage = () => {
  return (
    <Layout>
      <section className="profile-page-wrapper">
        <ProfileForm />
      </section>
    </Layout>
  );
};
export default ProfilePage;
