import Image from "next/image";

import { getI18n } from "../../locales/server";

import MusicPhoto from "../../public/tape.png";
import StorePhoto from "../../public/shopping.jpg";
import NewsPhoto from "../../public/article-pic.jpg";
import ConcertPhoto from "../../public/concert-pic.png";

const InfoCards = async () => {
  const t = await getI18n();

  return (
    <div className="w-full px-5 lg:px-10 py-32 mt-12 bg-mainLightBG bg-opacity-50 flex flex-col items-center gap-10">
      <div className="w-4/5 md:w-10/12 xl:w-4/5 h-[600px] md:h-[300px] md:flex bg-mainLightBG rounded-xl overflow-hidden shadow-lg shadow-mainDarkBG">
        <Image
          src={MusicPhoto}
          alt="music tape"
          width={200}
          height={200}
          className="w-full md:w-[250px] lg:w-[300px] xxl:w-[400px]"
        />
        <div className="text-[#000] flex flex-col justify-center px-4 py-4 xl:px-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left py-4">
            {t("exploreMusic")}
          </h2>
          <p className="text-md lg:text-lg xxl:text-xl italic text-center md:text-left py-4">
            {t("exploreMusicSubtitle")}
          </p>
        </div>
      </div>

      <div className="w-4/5 md:w-10/12 xl:w-4/5 h-[600px] md:h-[300px] md:flex bg-mainLightBG rounded-xl overflow-hidden shadow-lg shadow-mainDarkBG">
        <Image
          src={StorePhoto}
          alt="store"
          width={200}
          height={200}
          className="w-full md:w-[250px] lg:w-[300px] xxl:w-[400px]"
        />
        <div className="text-[#000] flex flex-col justify-center px-4 py-4 xl:px-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left py-4">
            {t("browseStore")}
          </h2>
          <p className="text-md lg:text-lg xxl:text-xl italic text-center md:text-left py-4">
            {t("browseStoreSubtitle")}
          </p>
        </div>
      </div>

      <div className="w-4/5 md:w-10/12 xl:w-4/5 h-[600px] md:h-[300px] md:flex bg-mainLightBG rounded-xl overflow-hidden shadow-lg shadow-mainDarkBG">
        <Image
          src={NewsPhoto}
          alt="newspaper"
          width={200}
          height={200}
          className="w-full md:w-[250px] lg:w-[300px] xxl:w-[400px]"
        />
        <div className="text-[#000] flex flex-col justify-center px-4 py-4 xl:px-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left py-4">
            {t("latestNews")}
          </h2>
          <p className="text-md lg:text-lg xxl:text-xl italic text-center md:text-left py-4">
            {t("latestNewsSubtitle")}
          </p>
        </div>
      </div>

      <div className="w-4/5 md:w-10/12 xl:w-4/5 h-[600px] md:h-[300px] md:flex bg-mainLightBG rounded-xl overflow-hidden shadow-lg shadow-mainDarkBG">
        <Image
          src={ConcertPhoto}
          alt="concert"
          width={200}
          height={200}
          className="w-full md:w-[250px] lg:w-[300px] xxl:w-[400px]"
        />
        <div className="text-[#000] flex flex-col justify-center px-4 py-4 xl:px-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left py-4">
            {t("upcomingEvents")}
          </h2>
          <p className="text-md lg:text-lg xxl:text-xl italic text-center md:text-left py-4">
            {t("upcomingEventsSubtitle")}
          </p>
        </div>
      </div>

      {/* 
      {HomepageInfoCard.map((card) => (
        <div
          key={card.id}
          className="w-4/5 md:w-10/12 xl:w-4/5 h-[600px] md:h-[300px] md:flex bg-mainLightBG rounded-xl overflow-hidden shadow-lg shadow-mainDarkBG"
        >
          <Image
            src={card.photo}
            alt={card.title}
            width={200}
            height={200}
            className="w-full md:w-[250px] lg:w-[300px] xxl:w-[400px]"
          />
          <div className="text-[#000] flex flex-col justify-center px-4 py-4 xl:px-10">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center md:text-left py-4">
              {card.title}
            </h2>
            <p className="text-md lg:text-lg xxl:text-xl italic text-center md:text-left py-4">
              {card.description}
            </p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default InfoCards;
