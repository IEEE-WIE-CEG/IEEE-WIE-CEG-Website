"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { events as eventsData, EventData } from "@/lib/events-data"

export function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ]

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const getEventsForDate = (date: Date | null) => {
    if (!date) return []
    return eventsData.filter((event) => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6 bg-purple-700 text-white p-4 rounded-t-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth("prev")}
          className="text-white hover:bg-gray-800"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-center">
          <h2 className="text-2xl font-bold">{monthNames[currentDate.getMonth()]}</h2>
          <p className="text-sm text-gray-300">{currentDate.getFullYear()}</p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateMonth("next")}
          className="text-white hover:bg-gray-800"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="p-3 text-center font-semibold text-sm bg-gray-100">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 bg-gray-200 p-1 rounded-b-lg">
        {days.map((date, index) => {
          const dayEvents = getEventsForDate(date)
          const isToday = date && date.toDateString() === new Date().toDateString()

          return (
            <Card
              key={index}
              className={`min-h-[120px] p-2 border border-gray-300 bg-white ${
                !date ? "bg-gray-50" : ""
              } ${isToday ? "ring-2 ring-purple-500" : ""}`}
            >
              {date && (
                <>
                  {/* Date Number */}
                  <div
                    className={`text-sm font-semibold mb-1 ${
                      isToday ? "text-purple-600" : "text-gray-900"
                    }`}
                  >
                    {date.getDate()}
                  </div>

                  {/* Events */}
                  <div className="space-y-1">
                    {dayEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className="text-xs p-1 bg-gray-100 rounded text-gray-900 truncate"
                        title={`${event.title} - ${event.time}`}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        <div className="text-gray-500 text-[10px]">{event.time}</div>
                      </div>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-xs text-gray-500">+{dayEvents.length - 3} more</div>
                    )}
                  </div>
                </>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
