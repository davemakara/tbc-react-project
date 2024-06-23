import Link from "next/link";
import Image from "next/image";

import DeleteBlogBtn from "@/components/UI/DeleteBlogBtn";
import { getEventDetail } from "@/app/api";

interface PageParams {
  params: {
    id: number;
    locale: string;
  };
}

// const formatDate = (dateString: string): string => {
//   const date = new Date(dateString);

//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
//   const year = date.getFullYear();

//   return `${day}-${month}-${year}`;
// };

const EventDetail = async ({ params }: PageParams) => {
  const event = await getEventDetail(params.id);

  //   const formattedDate = formatDate(blog.createdat);

  return (
    <section className="w-full min-h-screen py-36 lg:py-40 flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center lg:flex-row lg:items-start gap-5 lg:gap-10">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          <Image src={event.photo} alt={event.title} fill />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 bg-mainLightBG p-5 rounded-lg">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {event.title}
          </h2>
          <div className="text-[14px] py-10">
            <p className="font-semibold">{event.description}</p>
          </div>

          <div>
            <p className="py-3">{event.venue}</p>
            <p className="py-3">{event.artist}</p>
          </div>
          <p className="my-8">Date: {event.date}</p>
          <p className="my-8">
            You can find more info about it here:{" "}
            <a
              href="https://www.ticketmaster.com/discover/concerts"
              target="_blank"
              className="text-[#2d4f98] font-semibold"
            >
              Click
            </a>
          </p>
          <div className="w-full flex justify-between">
            <Link href="/events">
              <button className="bg-red text-white text-[16px] mt-[30px] border-none rounded px-2 py-1">
                {"<"} Back to Events
              </button>
            </Link>
            <DeleteBlogBtn id={Number(params.id)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;