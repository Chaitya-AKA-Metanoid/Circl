"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, Search } from "lucide-react"
import { categories, type Event } from "@/lib/database"

export function EventsClient({ events }: { events: Event[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedDate, setSelectedDate] = useState("All")

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(events.map((event) => event.location.city)))
    return ["All", ...uniqueCities.sort()]
  }, [events])

  const uniqueDates = useMemo(() => {
    const dates = events.map((event) => event.date)
    return ["All", ...Array.from(new Set(dates)).sort()]
  }, [events])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const nameMatch =
        searchQuery === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      const categoryMatch = selectedCategory === "All" || event.category === selectedCategory
      const cityMatch = selectedCity === "All" || event.location.city === selectedCity
      const dateMatch = selectedDate === "All" || event.date === selectedDate

      return nameMatch && categoryMatch && cityMatch && dateMatch
    })
  }, [searchQuery, selectedCategory, selectedCity, selectedDate, events])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-muted-foreground">Discover amazing events happening near you</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search events by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Choose an event category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger>
              <SelectValue placeholder="Pick a date" />
            </SelectTrigger>
            <SelectContent>
              {uniqueDates.map((date) => (
                <SelectItem key={date} value={date}>
                  {date === "All" ? "All Dates" : formatDate(date)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="h-full hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <Link href={`/events/${event.id}`} className="flex-1">
                <div className="relative h-48 w-full">
                  <Image src={event.image_url || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold line-clamp-2">{event.title}</CardTitle>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      {formatDate(event.date)} at {event.time}
                    </p>
                    <p>
                      {event.location.city} • {event.location.venue}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                </CardContent>
              </Link>
              <CardContent className="pt-0">
                <Button asChild className="w-full" onClick={(e) => e.stopPropagation()}>
                  <a href={event.rsvp_url} target="_blank" rel="noopener noreferrer">
                    RSVP Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery
                ? `No events found matching "${searchQuery}". Try a different search term or adjust your filters!`
                : "No community events found matching your filters. Try adjusting your search!"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
