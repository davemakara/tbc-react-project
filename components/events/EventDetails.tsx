import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full sm:w-[350px] md:w-full lg:w-4/5 xxl:w-2/3 md:flex bg-white dark:bg-[#1e1b1b] rounded-lg overflow-hidden transition-colors duration-200 ease-in-out hover:shadow-md hover:shadow-[#000]">
      <Link href={`events/${event.id}`}>
        <div className="relative w-full md:w-[260px] xxl:w-[350px] h-[250px] md:h-full">
          <Image src={event.photo} alt={event.title} fill />
        </div>
      </Link>

      <div className="w-full h-[250px] flex flex-col justify-between py-3 px-4">
        <Link href={`events/${event.id}`}>
          <h1 className="h-[40px] text-[#000] dark:text-white text-[18px] md:text-[20px] font-bold mt-4">
            {event.title}
          </h1>
        </Link>
        <p className="text-[#000] dark:text-white font-semibold">
          Check out all the details about this event
        </p>
        <span className="w-full">
          <Link href={`events/${event.id}`}>
            <p className="w-full text-center py-2 border-none rounded text-[16px] font-semibold bg-red hover:bg-[#be2727] text-[#000] dark:text-white cursor-pointer">
              SEE MORE
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default EventDetails;
