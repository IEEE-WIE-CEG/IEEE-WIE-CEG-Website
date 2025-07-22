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
import webDevelopmentWorkshop from "@/lib/events-data/web-development-workshop"

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
  {
    id: webDevelopmentWorkshop.id,
    title: webDevelopmentWorkshop.title,
    date: webDevelopmentWorkshop.date,
    time: webDevelopmentWorkshop.time,
    location: webDevelopmentWorkshop.location,
    attendees: webDevelopmentWorkshop.attendees,
    category: webDevelopmentWorkshop.category,
    poster: webDevelopmentWorkshop.poster,
    registrationLink: webDevelopmentWorkshop.registrationLink,
    description: webDevelopmentWorkshop.description,
    context: webDevelopmentWorkshop.context,
  },
  // Add more events here as you create more files
]

export { operationTrinetra, webDevelopmentWorkshop } 