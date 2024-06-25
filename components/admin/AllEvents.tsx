import { getEvents } from "@/app/api";
import { EventProps } from "@/types/types";

const AllEvents = async () => {
  const events = await getEvents();

  return (
    <div className="w-11/12 mx-auto my-20">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Events
      </p>
      <table className="w-full">
        <th className="w-full h-20 flex justify-between bg-red border-b border-b-white">
          <td className="w-[100px] h-20 flex justify-center items-center">
            id
          </td>
          <td className="w-[250px] h-20 flex justify-center items-center">
            Title
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Artist
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Venue
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Date
          </td>
        </th>
        {events?.map((event: EventProps) => (
          <tr
            key={event.id}
            className="w-full flex justify-between border-b border-b-white"
          >
            <td className="w-[100px] h-32 flex justify-center items-center">
              {event.id}
            </td>
            <td className="w-[250px] h-32 flex justify-center items-center">
              {event.title}
            </td>
            <td className="w-[150px] h-32 flex justify-center items-center">
              {event.artist}
            </td>
            <td className="w-[150px] h-32 flex justify-center items-center">
              {event.venue}
            </td>
            <td className="w-[150px] h-32 flex justify-center items-center">
              {event.date}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllEvents;
