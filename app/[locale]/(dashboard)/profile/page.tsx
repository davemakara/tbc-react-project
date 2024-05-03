import ProfileForm from "../../../../components/profile-page/ProfileForm";

const ProfilePage = () => {
  return (
    <section className="bg-mainLightBG dark:bg-mainDarkBG w-full min-h-screen flex flex-col items-center py-[3rem] px-[3rem] text-[#000] md:px-0 md:py-[4rem]">
      <ProfileForm />
    </section>
  );
};
export default ProfilePage;
