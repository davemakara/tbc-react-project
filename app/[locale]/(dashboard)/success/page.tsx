import SuccessEmpty from "@/components/success/SuccessEmpty";

import DonePhoto from "../../../../public/done.png";
import Image from "next/image";

const SuccessPage = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <span className="flex items-center gap-2 p-8 text-white bg-mainLightBG bg-opacity-80 rounded-xl">
        <Image src={DonePhoto} alt="done photo" width={100} height={100} />
        <h1 className="text-2xl font-semibold">ORDER SUCCESSFUL!</h1>
      </span>

      <SuccessEmpty />
    </section>
  );
};

export default SuccessPage;
