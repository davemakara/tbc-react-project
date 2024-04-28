import HomeContent from "../../components/home-content/HomeContent";

const Homepage = () => {
  return (
    <main className="w-full min-h-screen flex justify-center pt-[2rem] md:pt-[5rem] pb-[3rem] bg-mainLightBG dark:bg-mainDarkBG">
      <HomeContent />
    </main>
  );
};

export default Homepage;
