import Carousel from "@/components/carousel/Carousel";

const Homepage = async () => {
  return (
    <main className="w-full min-h-screen pt-[2rem] md:pt-[5rem] pb-[3rem] bg-[#DDDDDD] dark:bg-[#2C3333]">
      <div className="text-center mb-10">HOME CONTENT</div>
      <Carousel />
    </main>
  );
};

export default Homepage;
