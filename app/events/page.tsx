import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { EventsCalendar } from "@/components/events-calendar"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Room 101",
      attendees: 45,
      description: "Hands-on workshop covering fundamentals of AI and ML with practical exercises.",
      category: "Workshop",
    },
    {
      title: "Women in Tech Panel Discussion",
      date: "March 22, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Main Auditorium",
      attendees: 120,
      description: "Panel discussion with industry leaders sharing their experiences and insights.",
      category: "Panel",
    },
    {
      title: "Coding Bootcamp",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Computer Lab A",
      attendees: 30,
      description: "Intensive coding bootcamp covering web development fundamentals.",
      category: "Bootcamp",
    },
    {
      title: "Robotics Workshop",
      date: "April 12, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Robotics Lab",
      attendees: 25,
      description: "Build and program your own robot in this hands-on workshop.",
      category: "Workshop",
    },
    {
      title: "Career Networking Event",
      date: "April 18, 2024",
      time: "5:00 PM - 8:00 PM",
      location: "Student Center",
      attendees: 80,
      description: "Network with industry professionals and explore career opportunities.",
      category: "Networking",
    },
  ]

  const currentEvents = [
    {
      title: "IEEE WIE Membership Drive",
      date: "March 1-31, 2024",
      time: "All Day",
      location: "Campus Wide",
      attendees: 200,
      description: "Join IEEE WIE and become part of our growing community.",
      category: "Campaign",
    },
  ]

  const pastEvents = [
    {
      title: "Robotics Competition",
      date: "February 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Engineering Lab",
      attendees: 80,
      description: "Annual robotics competition showcasing student innovations.",
      category: "Competition",
    },
    {
      title: "Career Fair",
      date: "February 10, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "Student Center",
      attendees: 300,
      description: "Connect with top employers and explore career opportunities.",
      category: "Career",
    },
  ]

  const EventCard = ({ event }: { event: any }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <Badge variant="secondary">{event.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>
        <div className="mt-4">
          <Button>Learn More</Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
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
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="current" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Current Events</h2>
                {currentEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Past Events</h2>
                {pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
