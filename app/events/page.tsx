import { getEvents } from "@/lib/database"
import { EventsClient } from "./events-client"

export default async function EventsPage() {
  const events = await getEvents()
  return <EventsClient events={events} />
}
