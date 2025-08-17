"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface CountdownTimerProps {
  targetDate: string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
        setIsExpired(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center group">
      <div className="relative">
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/60 border border-purple-500/30 rounded-xl p-4 md:p-6 lg:p-8 mb-2 transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:-translate-y-1">
          <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-200 via-purple-100 to-white drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300 group-hover:scale-105">
            {value.toString().padStart(2, '0')}
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-sm md:text-base lg:text-lg font-semibold text-purple-300 uppercase tracking-widest transition-colors duration-300 group-hover:text-purple-200">
          {label}
        </div>
      </div>
    </div>
  )

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <Card className="bg-gradient-to-br from-red-950/30 to-red-900/40 border border-red-500/50 shadow-lg shadow-red-500/20">
          <CardContent className="p-8">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-300 mb-2">
              Event Started!
            </div>
            <div className="text-red-200">
              Operation Trinetra is now live
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={`countdown-timer ${className}`}>
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-100 mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
          Event Starts In
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mx-auto opacity-80"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
        <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-500/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400/25 rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  )
}