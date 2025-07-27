import { notFound } from "next/navigation"
import { operationTrinetra, webDevelopmentWorkshop } from "@/lib/events-data"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const eventMap: Record<string, any> = {
  "operation-trinetra": operationTrinetra,
  "web-development-workshop": webDevelopmentWorkshop,
  // Add more events here as you create them
}

// Events that have custom pages (will redirect to their custom routes)
const customPageEvents = ["operation-trinetra"]

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventMap[params.slug]
  if (!event) return notFound()

  // This page only handles normal events, custom events have their own routes
  if (customPageEvents.includes(params.slug)) {
    return notFound() // Let the custom page handle it
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        {event.poster && (
          <Image
            src={event.poster}
            alt={event.title + " poster"}
            width={800}
            height={400}
            className="rounded-lg w-full object-cover mb-6"
          />
        )}
        
        <div className="mb-4">
          <Badge variant="secondary" className="mb-2">{event.category}</Badge>
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          {event.tagline && <h2 className="text-xl text-purple-700 mb-4">{event.tagline}</h2>}
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="font-semibold">{event.date}</p>
            </div>
          </div>
          
          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-semibold">{event.time}</p>
              </div>
            </div>
          )}
          
          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>
          )}
          
          {event.attendees && (
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Capacity</p>
                <p className="font-semibold">{event.attendees} people</p>
              </div>
            </div>
          )}
        </div>

        {/* Registration Button */}
        {event.registrationLink && (
          <div className="mb-8">
            <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Register Now
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Event Description */}
      <div className="prose max-w-none">
        <h3 className="text-2xl font-semibold mb-4">About the Event</h3>
        {event.description && (
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">{event.description}</p>
        )}
        {event.context && (
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-800 whitespace-pre-line leading-relaxed">{event.context}</p>
          </div>
        )}
      </div>
    </main>
  )
} 