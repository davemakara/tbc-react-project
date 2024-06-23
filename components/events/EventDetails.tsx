import Image from "next/image";
import Link from "next/link";

import { FaRegCalendarAlt } from "react-icons/fa";

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    description: string;
    photo: string;
    artist: string;
    venue: string;
    date: string;
  };
}

const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <div className="w-full sm:w-[350px] md:w-full lg:w-4/5 xxl:w-2/3 md:flex bg-white dark:bg-[#eee] rounded-lg overflow-hidden transition-colors duration-200 ease-in-out hover:shadow-md hover:shadow-[#000]">
      <Link href={`events/${event.id}`}>
        <div className="relative w-full md:w-[260px] xxl:w-[350px] h-[250px] md:h-full">
          <Image src={event.photo} alt={event.title} fill />
        </div>
      </Link>

      <div className="w-full h-[250px] flex flex-col justify-between py-3 px-4">
        <Link href={`events/${event.id}`}>
          <h1 className="h-[40px] text-[#000] text-[18px] md:text-[20px] font-bold">
            {event.title}
          </h1>
        </Link>
        <p>Check out all the details about this event</p>
        <span className="w-full flex justify-between">
          <p className="text-[14px] text-[#000] flex items-center gap-1">
            <FaRegCalendarAlt />
            {event.date}
          </p>
          <Link href={`events/${event.id}`}>
            <p className="py-2 border-none rounded text-[14px] text-[#696687] cursor-pointer">
              See more..
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default EventDetails;
