const LoadingScreen = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-mainLightBG dark:bg-mainDarkBG">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-mainLightBG dark:border-[#61677A] border-t-white dark:border-t-[#616779]"></div>
    </section>
  );
};

export default LoadingScreen;
