export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: {
    city: string
    venue: string
    address: string
  }
  category: string
  description: string
  mapEmbedUrl: string
  imageUrl: string
  host: {
    name: string
    bio: string
    avatar: string
    experience: string
  }
  rsvpUrl: string
}

export const sampleEvents: Event[] = [
  // Mumbai-based Run Club data
{
  id: "1",
  title: "Sunday Community Runs – SGNP",
  date: "2025-04-13",
  time: "06:00",
  location: {
    city: "Mumbai",
    venue: "Sanjay Gandhi National Park Entrance",
    address: "Borivali, Mumbai, Maharashtra",
  },
  category: "Community Run",
  description:
    "Join the Fitpage Sunday Community Runs at the tranquil entrance of SGNP. A 10K group run every Sunday morning—open to everyone regardless of fitness level. Refresh with chai or coffee after the run, connect with fellow runners, and soak in nature before the city's hustle.",
  mapEmbedUrl:
    "https://maps.google.com/?q=Sanjay+Gandhi+National+Park+Entrance,+Mumbai",
  imageUrl: "/golden-gate-park-runners.png",
  host: {
    name: "Fitpage Organizers",
    bio: "A community-focused wellness group organizing inclusive **Sunday 10K runs** across Mumbai amidst nature and good company.",
    avatar: "/fitpage-host-avatar.png",
    experience: "Organizing weekly community runs city-wide",
  },
  rsvpUrl: "https://www.indiarunning.com/events/sundaycommunityruns-48917",
}
,
  {
    id: "2",
    title: "Watercolor Painting Workshop",
    date: "2024-01-18",
    time: "14:00",
    location: {
      city: "New York",
      venue: "Brooklyn Art Studio",
      address: "123 Creative Ave, Brooklyn, NY 11201",
    },
    category: "Art",
    description:
      "Discover the beauty of watercolor painting in this hands-on workshop. Whether you're a complete beginner or looking to refine your technique, our experienced instructor will guide you through fundamental techniques including wet-on-wet, wet-on-dry, and color mixing. All materials provided.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.0!2d-73.9857!3d40.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzIxLjEiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567891",
    imageUrl: "/placeholder-7rhs7.png",
    host: {
      name: "Marcus Rodriguez",
      bio: "Professional watercolor artist and instructor who has exhibited in galleries across New York. Passionate about teaching traditional painting techniques.",
      avatar: "/smiling-hispanic-artist.png",
      experience: "15+ years professional artist",
    },
    rsvpUrl: "https://eventbrite.com/watercolor-workshop-brooklyn",
  },
  {
    id: "3",
    title: "Italian Cooking Masterclass",
    date: "2024-01-20",
    time: "18:30",
    location: {
      city: "Los Angeles",
      venue: "Culinary Institute LA",
      address: "456 Flavor Street, Los Angeles, CA 90028",
    },
    category: "Cooking",
    description:
      "Learn to create authentic Italian dishes from scratch in this immersive cooking experience. We'll prepare fresh pasta, classic marinara sauce, and tiramisu while exploring traditional techniques passed down through generations. Enjoy the fruits of your labor with wine pairings.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d-118.3269!3d34.0928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzM0LjEiTiAxMTjCsDE5JzM2LjgiVw!5e0!3m2!1sen!2sus!4v1234567892",
    imageUrl: "/pasta-making-hands.png",
    host: {
      name: "Chef Isabella Romano",
      bio: "Born in Naples, Chef Isabella brings authentic Italian culinary traditions to Los Angeles. She trained under master chefs in Italy before opening her own restaurant.",
      avatar: "/italian-woman-chef-smiling-kitchen.png",
      experience: "20+ years culinary expertise",
    },
    rsvpUrl: "https://forms.google.com/italian-cooking-masterclass",
  },
  {
    id: "4",
    title: "Tech Networking Mixer",
    date: "2024-01-22",
    time: "19:00",
    location: {
      city: "Austin",
      venue: "Innovation Hub",
      address: "789 Tech Boulevard, Austin, TX 78701",
    },
    category: "Networking",
    description:
      "Connect with fellow tech professionals, entrepreneurs, and innovators in Austin's thriving tech scene. This casual networking event features guest speakers from leading startups, interactive demos, and plenty of opportunities to make meaningful professional connections.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAyLjAiTiA5N8KwNDQnMzUuMiJX!5e0!3m2!1sen!2sus!4v1234567893",
    imageUrl: "/tech-networking-event.png",
    host: {
      name: "David Kim",
      bio: "Startup founder and tech community organizer who has been building Austin's tech ecosystem for over a decade. Previously founded two successful startups.",
      avatar: "/asian-tech-entrepreneur.png",
      experience: "12+ years in tech industry",
    },
    rsvpUrl: "https://meetup.com/austin-tech-networking-mixer",
  },
  {
    id: "5",
    title: "Sunset Yoga Session",
    date: "2024-01-25",
    time: "17:30",
    location: {
      city: "Miami",
      venue: "South Beach",
      address: "Ocean Drive, Miami Beach, FL 33139",
    },
    category: "Wellness",
    description:
      "Unwind and find your center with a peaceful yoga session as the sun sets over the ocean. This all-levels class focuses on gentle flows, breathing techniques, and meditation. Bring your own mat or rent one on-site. Experience the perfect blend of fitness and mindfulness.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-80.1300!3d25.7907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzI2LjUiTiA4MMKwMDcnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567894",
    imageUrl: "/sunset-yoga-beach-meditation.png",
    host: {
      name: "Luna Martinez",
      bio: "Certified yoga instructor specializing in vinyasa and meditation practices. She has been teaching for over 6 years and believes in making yoga accessible to everyone.",
      avatar: "/latina-yoga-instructor.png",
      experience: "6+ years certified instructor",
    },
    rsvpUrl: "https://forms.google.com/sunset-yoga-miami",
  },
  {
    id: "6",
    title: "Photography Walk",
    date: "2024-01-28",
    time: "10:00",
    location: {
      city: "Seattle",
      venue: "Pike Place Market",
      address: "85 Pike St, Seattle, WA 98101",
    },
    category: "Art",
    description:
      "Explore Seattle's iconic Pike Place Market through the lens of your camera. This guided photography walk will teach you composition techniques, lighting tips, and how to capture the energy of this bustling marketplace. Suitable for all camera types and skill levels.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.0!2d-122.3421!3d47.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzM0LjkiTiAxMjLCsDIwJzMxLjYiVw!5e0!3m2!1sen!2sus!4v1234567895",
    imageUrl: "/placeholder.svg?height=200&width=400",
    host: {
      name: "Alex Thompson",
      bio: "Professional photographer and educator with a passion for street photography. Alex has been capturing Seattle's urban life for over 10 years and loves sharing photography techniques.",
      avatar: "/placeholder.svg?height=80&width=80",
      experience: "10+ years professional photographer",
    },
    rsvpUrl: "https://eventbrite.com/photography-walk-seattle",
  },
]

export const categories = ["All", "Run Club", "Art", "Cooking", "Networking", "Wellness"]
export const cities = ["All", "San Francisco", "New York", "Los Angeles", "Austin", "Miami", "Seattle"]
