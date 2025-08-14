import { createClient as createServerClient } from "@/lib/supabase/server"
import { createClient as createClientClient } from "@/lib/supabase/client"
import { sampleEvents } from "./sample-data"

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  category: string
  image_url: string | null
  rsvp_url: string
  location: {
    venue: string
    address: string
    city: string
  }
  host: {
    name: string
    bio: string
    experience: string
    avatar: string | null
  }
  map_embed_url: string
  created_at: string
}

export interface CreateEventData {
  title: string
  description: string
  date: string
  time: string
  category: string
  venue: string
  address: string
  city: string
  image_url?: string
  rsvp_url: string
  map_embed_url: string
  host_id: string
}

export interface RSVP {
  id: string
  event_id: string
  user_id: string
  status: "attending" | "maybe" | "not_attending"
  created_at: string
}

function convertSampleEvents(): Event[] {
  return sampleEvents.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    category: event.category,
    image_url: event.imageUrl,
    rsvp_url: event.rsvpUrl,
    location: {
      venue: event.location.venue,
      address: event.location.address,
      city: event.location.city,
    },
    host: {
      name: event.host.name,
      bio: event.host.bio,
      experience: event.host.experience,
      avatar: event.host.avatar,
    },
    map_embed_url: event.mapEmbedUrl,
    created_at: new Date().toISOString(),
  }))
}

export async function getEvents(): Promise<Event[]> {
  try {
    const supabase = createServerClient()

    const { data: events, error } = await supabase
      .from("events")
      .select(`
        *,
        profiles!events_host_id_fkey (
          full_name,
          bio,
          experience,
          avatar_url
        )
      `)
      .order("date", { ascending: true })

    if (error) {
      throw error
    }

    return events.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      category: event.category,
      image_url: event.image_url,
      rsvp_url: event.rsvp_url,
      location: {
        venue: event.venue,
        address: event.address,
        city: event.city,
      },
      host: {
        name: event.profiles?.full_name || "Unknown Host",
        bio: event.profiles?.bio || "No bio available",
        experience: event.profiles?.experience || "Community member",
        avatar: event.profiles?.avatar_url,
      },
      map_embed_url: event.map_embed_url,
      created_at: event.created_at,
    }))
  } catch (error) {
    console.error("Error fetching events:", error)
    console.log("Falling back to sample data. Please run the database migration script.")
    return convertSampleEvents()
  }
}

export async function getEventById(id: string): Promise<Event | null> {
  try {
    const supabase = createServerClient()

    const { data: event, error } = await supabase
      .from("events")
      .select(`
        *,
        profiles!events_host_id_fkey (
          full_name,
          bio,
          experience,
          avatar_url
        )
      `)
      .eq("id", id)
      .single()

    if (error) {
      throw error
    }

    return {
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      category: event.category,
      image_url: event.image_url,
      rsvp_url: event.rsvp_url,
      location: {
        venue: event.venue,
        address: event.address,
        city: event.city,
      },
      host: {
        name: event.profiles?.full_name || "Unknown Host",
        bio: event.profiles?.bio || "No bio available",
        experience: event.profiles?.experience || "Community member",
        avatar: event.profiles?.avatar_url,
      },
      map_embed_url: event.map_embed_url,
      created_at: event.created_at,
    }
  } catch (error) {
    console.error("Error fetching event:", error)
    console.log("Falling back to sample data. Please run the database migration script.")
    const sampleEventsConverted = convertSampleEvents()
    return sampleEventsConverted.find((e) => e.id === id) || null
  }
}

export async function createEvent(
  eventData: CreateEventData,
): Promise<{ success: boolean; event?: Event; error?: string }> {
  const supabase = createServerClient()

  const { data: event, error } = await supabase
    .from("events")
    .insert([
      {
        title: eventData.title,
        description: eventData.description,
        date: eventData.date,
        time: eventData.time,
        category: eventData.category,
        venue: eventData.venue,
        address: eventData.address,
        city: eventData.city,
        image_url: eventData.image_url,
        rsvp_url: eventData.rsvp_url,
        map_embed_url: eventData.map_embed_url,
        host_id: eventData.host_id,
      },
    ])
    .select(`
      *,
      profiles!events_host_id_fkey (
        full_name,
        bio,
        experience,
        avatar_url
      )
    `)
    .single()

  if (error) {
    console.error("Error creating event:", error)
    return { success: false, error: error.message }
  }

  const formattedEvent: Event = {
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    category: event.category,
    image_url: event.image_url,
    rsvp_url: event.rsvp_url,
    location: {
      venue: event.venue,
      address: event.address,
      city: event.city,
    },
    host: {
      name: event.profiles?.full_name || "Unknown Host",
      bio: event.profiles?.bio || "No bio available",
      experience: event.profiles?.experience || "Community member",
      avatar: event.profiles?.avatar_url,
    },
    map_embed_url: event.map_embed_url,
    created_at: event.created_at,
  }

  return { success: true, event: formattedEvent }
}

export async function updateEvent(
  id: string,
  eventData: Partial<CreateEventData>,
): Promise<{ success: boolean; event?: Event; error?: string }> {
  const supabase = createServerClient()

  const { data: event, error } = await supabase
    .from("events")
    .update(eventData)
    .eq("id", id)
    .select(`
      *,
      profiles!events_host_id_fkey (
        full_name,
        bio,
        experience,
        avatar_url
      )
    `)
    .single()

  if (error) {
    console.error("Error updating event:", error)
    return { success: false, error: error.message }
  }

  const formattedEvent: Event = {
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    category: event.category,
    image_url: event.image_url,
    rsvp_url: event.rsvp_url,
    location: {
      venue: event.venue,
      address: event.address,
      city: event.city,
    },
    host: {
      name: event.profiles?.full_name || "Unknown Host",
      bio: event.profiles?.bio || "No bio available",
      experience: event.profiles?.experience || "Community member",
      avatar: event.profiles?.avatar_url,
    },
    map_embed_url: event.map_embed_url,
    created_at: event.created_at,
  }

  return { success: true, event: formattedEvent }
}

export async function deleteEvent(id: string): Promise<{ success: boolean; error?: string }> {
  const supabase = createServerClient()

  const { error } = await supabase.from("events").delete().eq("id", id)

  if (error) {
    console.error("Error deleting event:", error)
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function getEventsByHost(hostId: string): Promise<Event[]> {
  const supabase = createServerClient()

  const { data: events, error } = await supabase
    .from("events")
    .select(`
      *,
      profiles!events_host_id_fkey (
        full_name,
        bio,
        experience,
        avatar_url
      )
    `)
    .eq("host_id", hostId)
    .order("date", { ascending: true })

  if (error) {
    console.error("Error fetching host events:", error)
    console.log("Falling back to sample data. Please run the database migration script.")
    return convertSampleEvents()
  }

  return events.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    category: event.category,
    image_url: event.image_url,
    rsvp_url: event.rsvp_url,
    location: {
      venue: event.venue,
      address: event.address,
      city: event.city,
    },
    host: {
      name: event.profiles?.full_name || "Unknown Host",
      bio: event.profiles?.bio || "No bio available",
      experience: event.profiles?.experience || "Community member",
      avatar: event.profiles?.avatar_url,
    },
    map_embed_url: event.map_embed_url,
    created_at: event.created_at,
  }))
}

export async function createRSVP(
  eventId: string,
  userId: string,
  status: "attending" | "maybe" | "not_attending",
): Promise<{ success: boolean; error?: string }> {
  const supabase = createServerClient()

  const { error } = await supabase.from("rsvps").upsert([
    {
      event_id: eventId,
      user_id: userId,
      status: status,
    },
  ])

  if (error) {
    console.error("Error creating RSVP:", error)
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function getEventRSVPs(eventId: string): Promise<RSVP[]> {
  const supabase = createServerClient()

  const { data: rsvps, error } = await supabase.from("rsvps").select("*").eq("event_id", eventId)

  if (error) {
    console.error("Error fetching RSVPs:", error)
    return []
  }

  return rsvps || []
}

export async function getUserRSVPs(userId: string): Promise<RSVP[]> {
  const supabase = createServerClient()

  const { data: rsvps, error } = await supabase.from("rsvps").select("*").eq("user_id", userId)

  if (error) {
    console.error("Error fetching user RSVPs:", error)
    return []
  }

  return rsvps || []
}

export async function getEventsClient(): Promise<Event[]> {
  try {
    const supabase = createClientClient()

    const { data: events, error } = await supabase
      .from("events")
      .select(`
        *,
        profiles!events_host_id_fkey (
          full_name,
          bio,
          experience,
          avatar_url
        )
      `)
      .order("date", { ascending: true })

    if (error) {
      throw error
    }

    return events.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      category: event.category,
      image_url: event.image_url,
      rsvp_url: event.rsvp_url,
      location: {
        venue: event.venue,
        address: event.address,
        city: event.city,
      },
      host: {
        name: event.profiles?.full_name || "Unknown Host",
        bio: event.profiles?.bio || "No bio available",
        experience: event.profiles?.experience || "Community member",
        avatar: event.profiles?.avatar_url,
      },
      map_embed_url: event.map_embed_url,
      created_at: event.created_at,
    }))
  } catch (error) {
    console.error("Error fetching events:", error)
    console.log("Falling back to sample data. Please run the database migration script.")
    return convertSampleEvents()
  }
}

export const categories = [
  "All",
  "Fitness & Sports",
  "Arts & Culture",
  "Food & Drink",
  "Technology",
  "Business & Networking",
  "Music & Entertainment",
]
