import ProfileForm from "../../../components/ProfileForm";

const ProfilePage = () => {
  return (
    <section className="bg-mainLightBG w-full min-h-screen flex flex-col justify-center items-center py-[6rem] px-[3rem] text-[#000] md:px-0 pt-[9rem] pb-[6rem]">
      <ProfileForm />
    </section>
  );
};
export default ProfilePage;
