"use client";

import { EventProps } from "@/types/types";
import EventDetails from "./EventDetails";

interface iEvents {
  events: EventProps[];
}

const Events = ({ events }: iEvents) => {
  return (
    <>
      <div className="w-full pt-[2rem] px-12 sm:px-16">
        <div className="flex flex-col sm:items-center gap-5 md:gap-7 xxl:gap-10">
          {events.map((event: EventProps) => (
            <EventDetails event={event} key={event.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
