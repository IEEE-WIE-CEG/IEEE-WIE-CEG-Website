import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { EventsCalendar } from "@/components/events-calendar"
import { events as allEvents, EventData } from "@/lib/events-data"
import Link from "next/link"

export default function EventsPage() {
  // Helper to filter events by date
  const today = new Date()
  const toDate = (dateStr: string) => new Date(dateStr)
  const isUpcoming = (event: EventData) => toDate(event.date) > today
  const isCurrent = (event: EventData) => toDate(event.date).toDateString() === today.toDateString()
  const isPast = (event: EventData) => toDate(event.date) < today

  const upcomingEvents = allEvents.filter(isUpcoming)
  const currentEvents = allEvents.filter(isCurrent)
  const pastEvents = allEvents.filter(isPast)

  const EventCard = ({ event }: { event: any }) => (
    <Card className="mb-4">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {event.poster && (
          <div className="md:w-1/3 w-full flex-shrink-0 flex items-center justify-center">
            <img src={event.poster} alt={event.title + " poster"} className="rounded-lg object-cover w-full h-48 md:h-full" />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-between p-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <Badge variant="secondary">{event.category}</Badge>
            </div>
            <div className="flex flex-wrap gap-4 mb-2 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
            {event.description && <p className="text-muted-foreground mb-4">{event.description}</p>}
          </div>
          <div className="mt-2 flex gap-2">
            <Link href={`/events/${event.id}`}>
              <Button>View Details</Button>
            </Link>
            {event.registrationLink && (
              <Link href={event.registrationLink} target="_blank">
                <Button variant="outline">Register</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <main className="flex-1">
      {/* Hero Section */}
       <section
        className="w-full bg-cover bg-center relative min-h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/banners/events_bg.png')" }} 
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Events & Activities
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join us for workshops, seminars, networking events, and more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="current">Current Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Events Calendar</h2>
                <EventsCalendar />
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                {upcomingEvents.length === 0 ? (
                  <p className="text-muted-foreground">No upcoming events at the moment.</p>
                ) : (
                  upcomingEvents.map((event, index) => (
                    <EventCard key={event.id || index} event={event} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="current" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Current Events</h2>
                {currentEvents.length === 0 ? (
                  <p className="text-muted-foreground">No current events at the moment.</p>
                ) : (
                  currentEvents.map((event, index) => (
                    <EventCard key={event.id || index} event={event} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Past Events</h2>
                {pastEvents.length === 0 ? (
                  <p className="text-muted-foreground">No past events to display.</p>
                ) : (
                  pastEvents.map((event, index) => (
                    <EventCard key={event.id || index} event={event} />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
