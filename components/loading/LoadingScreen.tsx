const LoadingScreen = () => {
  return (
    <section className="absolute top-0 left-0 flex items-center justify-center w-full h-screen">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-mainLightBG border-t-white"></div>
    </section>
  );
};

export default LoadingScreen;
