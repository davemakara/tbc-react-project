import { getEvents } from "@/app/api";
import Events from "@/components/events/Events";

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40">
      <Events events={events} />
    </section>
  );
};

export default EventsPage;
