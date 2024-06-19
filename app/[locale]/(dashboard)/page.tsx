import Image from "next/image";

import Carousel from "@/components/carousel/Carousel";
import SocialBox from "@/components/homepage/SocialBox";

// import LOGO from "../../../public/music_note.png";
import playStore from "../../../public/playStore.png";
import appStore from "../../../public/appStore.png";
import WeeklyCharts from "@/components/homepage/WeeklyCharts";
// import { getSession } from "@auth0/nextjs-auth0";

const Homepage = async () => {
  // const session = await getSession();

  return (
    <section className="w-full min-h-screen pt-36">
      <SocialBox />
      <div className="w-full py-4 md:px-10 flex flex-col items-center xl:items-start xl:justify-around xl:flex-row mb-10">
        <div className="w-11/12 sm:w-4/5 lg:w-3/5 xl:w-[500px] xxl:w-[650px] p-5 sm:p-10 bg-opacity-80 dark:bg-opacity-80 rounded-2xl flex flex-col bg-[#fff] dark:bg-[#afafaf] shadow-xl shadow-[#000] transition-colors duration-500 ease-in-out">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">FlowRecords</h1>

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
        <WeeklyCharts />
      </div>
      <Carousel />
    </section>
  );
};

export default Homepage;
