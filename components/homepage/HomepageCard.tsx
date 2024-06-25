import Image from "next/image";

import playStore from "../../public/playStore.png";
import appStore from "../../public/appStore.png";

import { getI18n } from "../../locales/server";

const HomepageCard = async () => {
  const t = await getI18n();

  return (
    <div className="w-11/12 sm:w-4/5 lg:w-[700px] xl:w-[550px] xxl:w-[650px] p-5 sm:p-10 bg-opacity-80 dark:bg-opacity-80 rounded-2xl flex flex-col bg-[#fff] dark:bg-[#afafaf] shadow-xl shadow-[#000] transition-colors duration-500 ease-in-out mb-10 xl:mb-0">
      <h1 className="text-3xl lg:text-5xl xl:text-4xl xxl:text-5xl font-bold mb-5">
        FlowRecords
      </h1>

      <p className="text-lg md:text-xl xl:text-lg xxl:text-xl font-semibold py-5 italic">
        {t("homepageSubtitle")}
      </p>
      <div className="flex flex-col justify-center mt-2">
        <h2 className="text-xl md:text-3xl xl:text-2xl xxl:text-3xl font-bold mb-6">
          {t("downloadApp")}
        </h2>
        <div className="flex gap-2 md:gap-4">
          <span className="flex items-center gap-2 py-2 px-3 md:px-4 bg-white dark:bg-cardsDarkBG rounded-full text-sm text-[#000] dark:text-white shadow-lg shadow-[#000] dark:shadow-white hover:-translate-y-1 cursor-pointer">
            <p>Play Store</p>
            <Image src={playStore} alt="play store" width={25} height={25} />
          </span>
          <span className="flex items-center gap-2 py-2 px-3 md:px-4 bg-white dark:bg-cardsDarkBG rounded-full text-sm text-[#000] dark:text-white shadow-lg shadow-[#000] dark:shadow-white hover:-translate-y-1 cursor-pointer">
            <p>App Store</p>
            <Image src={appStore} alt="app store" width={25} height={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomepageCard;
