import { getProducts } from "@/app/api";
import Carousel from "@/components/carousel/Carousel";
import HomepageCard from "@/components/homepage/HomepageCard";
import InfoCards from "@/components/homepage/InfoCards";
import SocialBox from "@/components/homepage/SocialBox";

import WeeklyCharts from "@/components/homepage/WeeklyCharts";

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
      <InfoCards />
    </section>
  );
};

export default Homepage;
