import ProfileForm from "../../../../components/profile-page/ProfileForm";

const ProfilePage = () => {
  return (
    <section className="bg-[#DDDDDD] dark:bg-mainDarkBG2 w-full min-h-screen flex flex-col items-center px-[3rem] md:px-0 pt-[2rem] md:pt-[5rem] text-[#000]">
      <ProfileForm />
    </section>
  );
};
export default ProfilePage;
