import Image from "next/image";

import Carousel from "@/components/carousel/Carousel";
import SocialBox from "@/components/homepage/SocialBox";

// import downloadApp from "../../../public/mobileApp.png";
import playStore from "../../../public/playStore.png";
import appStore from "../../../public/appStore.png";

const Homepage = async () => {
  return (
    <section className="w-full min-h-screen pt-36">
      <SocialBox />
      <div className="w-full py-4 md:px-10 flex flex-col items-center xl:items-start mb-10">
        <div className="w-4/5 lg:w-3/5 xl:w-[500px] xxl:w-[700px] p-5 sm:p-10 lg:ml-32 bg-opacity-80 dark:bg-opacity-80 rounded-2xl flex flex-col bg-[#fff] dark:bg-[#afafaf] shadow-xl shadow-[#000]">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            Your music App
          </h1>
          <p className="text-lg md:text-xl font-semibold py-5 italic">
            Discover a world where you can not only buy and enjoy your favorite
            albums but also stay updated with the latest music news and trends.
          </p>
          <div className="flex flex-col justify-center mt-2">
            <h2 className="text-xl md:text-3xl font-bold mb-6">Download App</h2>
            <div className="flex gap-2 md:gap-4">
              <span className="flex items-center gap-2 py-2 px-3 md:px-4 bg-white dark:bg-cardsDarkBG rounded-full text-sm text-[#000] dark:text-white shadow-lg shadow-[#000] dark:shadow-white transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <p>Play Store</p>
                <Image
                  src={playStore}
                  alt="play store"
                  width={25}
                  height={25}
                />
              </span>
              <span className="flex items-center gap-2 py-2 px-3 md:px-4 bg-white dark:bg-cardsDarkBG rounded-full text-sm text-[#000] dark:text-white shadow-lg shadow-[#000] dark:shadow-white transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <p>App Store</p>
                <Image src={appStore} alt="app store" width={25} height={25} />
              </span>
            </div>
          </div>
        </div>
        {/* <div className="w-4/5 sm:w-3/5 md:w-2/5 rounded-lg flex flex-col xxl:flex-row xl:justify-between">
          <div className="relative">
            <Image src={downloadApp} alt="get app" width={300} height={300} />
          </div>
        </div> */}
      </div>
      <Carousel />
    </section>
  );
};

export default Homepage;
