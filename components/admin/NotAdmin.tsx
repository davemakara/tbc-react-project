import Link from "next/link";

const NotAdmin = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] h-[250px] flex flex-col items-center justify-around bg-mainLightBG bg-opacity-90 rounded-lg">
        <p className="text-[#000] text-2xl font-semibold">
          Sorry, you are not admin.
        </p>
        <Link href="/">
          <button className="w-[140px] h-[60px] flex justify-center items-center text-base font-semibold bg-red hover:bg-[#b72727]">
            Back To Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotAdmin;
