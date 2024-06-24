import { getProducts } from "@/app/api";
import Carousel from "@/components/carousel/Carousel";
import HomepageCard from "@/components/homepage/HomepageCard";
import SocialBox from "@/components/homepage/SocialBox";

// import LOGO from "../../../public/music_note.png";

import WeeklyCharts from "@/components/homepage/WeeklyCharts";
import { HomepageInfoCard } from "@/constants";
import Image from "next/image";

const Homepage = async () => {
  const storeProducts = await getProducts();

  return (
    <section className="w-full min-h-screen pt-36">
      <SocialBox />
      <div className="w-full py-4 md:px-10 flex flex-col items-center xl:items-start xl:justify-around xl:flex-row mb-10">
        <HomepageCard />
        <WeeklyCharts />
      </div>
      <Carousel storeProducts={storeProducts} />
      <div className="w-full px-5 lg:px-10 py-32 mt-12 bg-mainLightBG bg-opacity-50 flex flex-col items-center gap-10">
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
        ))}
      </div>
    </section>
  );
};

export default Homepage;
