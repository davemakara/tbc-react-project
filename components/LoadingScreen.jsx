const LoadingScreen = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-mainLightBG dark:bg-mainDarkBG">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-mainLightBG border-t-white"></div>
    </section>
  );
};

export default LoadingScreen;
