"use client";

import { useState } from "react";

import { EventProps } from "@/types/types";
import EventDetails from "./EventDetails";
import SearchEvent from "./SearchEvent";

interface iEvents {
  events: EventProps[];
}

const Events = ({ events }: iEvents) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredEvents = events.filter((event: EventProps) =>
    event.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="w-full pt-[2rem] px-12 sm:px-16">
        <SearchEvent onSearch={handleSearch} />
        <div className="flex flex-col sm:items-center gap-5 md:gap-7 xxl:gap-10">
          {filteredEvents.map((event: EventProps) => (
            <EventDetails event={event} key={event.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
