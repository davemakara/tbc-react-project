"use client";

import { getEvents } from "@/app/api";
import { EventProps } from "@/types/types";
import { useEffect, useState } from "react";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const blogsData = await getEvents();
        setEvents(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Events
      </p>
      <table className="w-full">
        <thead>
          <tr className="w-full h-20 flex justify-between bg-red border-b border-b-white">
            <th className="w-[100px] h-20 flex justify-center items-center">
              id
            </th>
            <th className="w-[250px] h-20 flex justify-center items-center">
              Title
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Artist
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Venue
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {events.length !== 0 &&
            events.map((event: EventProps) => (
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
        </tbody>
      </table>
    </div>
  );
};

export default AllEvents;
