"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SmallCountdownTimer } from "@/components/small-countdown-timer"
import Link from "next/link"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-2 px-4 relative border-b border-purple-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-0.5 rounded">
            NEW
          </div>
          <p className="text-sm font-medium">
            <span className="hidden sm:inline">Operation Trinetra Hackathon - </span>
            <span className="font-bold">September 13, 2025</span>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-200 hidden sm:inline">Starts in:</span>
            <SmallCountdownTimer
              targetDate="2025-09-13T08:00:00+05:30"
            />
          </div>
          
          <Button
            size="sm"
            className="bg-white text-purple-800 hover:bg-gray-100 h-7 px-2.5 text-xs font-semibold"
            asChild
          >
            <Link href="/events/operation-trinetra">Register</Link>
          </Button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors p-0.5"
            aria-label="Close announcement"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}