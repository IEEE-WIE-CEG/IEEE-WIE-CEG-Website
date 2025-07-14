import { notFound } from "next/navigation"
import { operationTrinetra } from "@/lib/events-data"
import Image from "next/image"
import Link from "next/link"

const eventMap: Record<string, any> = {
  "operation-trinetra": operationTrinetra,
  // Add more events here as you create them
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventMap[params.slug]
  if (!event) return notFound()

  return (
    <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
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
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        {event.tagline && <h2 className="text-xl text-purple-700 mb-4">{event.tagline}</h2>}
        <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
          <span><b>Date:</b> {event.date}</span>
          {event.time && <span><b>Time:</b> {event.time}</span>}
          {event.location && <span><b>Location:</b> {event.location}</span>}
        </div>
        {event.registrationLink && (
          <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Register Now</button>
          </Link>
        )}
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">About the Event</h3>
        {event.description && <p className="text-lg mb-2">{event.description}</p>}
        <p className="text-lg whitespace-pre-line">{event.context}</p>
      </div>
    </main>
  )
} 