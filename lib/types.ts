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

export const categories = [
  "All",
  "Fitness & Sports",
  "Arts & Culture",
  "Food & Drink",
  "Technology",
  "Business & Networking",
  "Music & Entertainment",
]
