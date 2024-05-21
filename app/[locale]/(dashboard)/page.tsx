import Carousel from "@/components/carousel/Carousel";

const Homepage = async () => {
  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40">
      <div className="w-full p-4 md:p-10 md:flex md:justify-around mb-10">
        <div className="w-64 h-64 bg-green rounded-lg flex justify-center items-center">
          Box 1
        </div>
        <div className="w-64 h-64 bg-darkYellow rounded-lg flex justify-center items-center">
          Box 2
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Homepage;
