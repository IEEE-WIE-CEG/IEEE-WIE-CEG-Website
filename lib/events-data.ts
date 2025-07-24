// Centralized event data for both Events page and EventsCalendar
export interface EventData {
  id: string
  title: string
  date: string // ISO format for easier parsing
  time: string
  location?: string
  attendees?: number
  description?: string
  category: string
  color?: string
  tagline?: string
  context?: string
  poster?: string
  registrationLink?: string
}

import operationTrinetra from "@/lib/events-data/operation-trinetra"

export const events: EventData[] = [
  {
    id: operationTrinetra.id,
    title: operationTrinetra.title,
    date: operationTrinetra.date,
    time: operationTrinetra.time,
    category: operationTrinetra.category,
    poster: operationTrinetra.poster,
    registrationLink: operationTrinetra.registrationLink,
    description: operationTrinetra.description,
    // Add more summary fields as needed
  },
  // Add more events here as you create more files
]

export { operationTrinetra } 