"use client"

import { useState, useEffect } from "react"

interface SmallCountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function SmallCountdownTimer({ targetDate }: SmallCountdownTimerProps) {
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

  if (isExpired) {
    return (
      <div className="text-xs font-semibold text-yellow-300">
        Event Started!
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="flex items-center gap-1">
        <span className="font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="text-purple-200">d</span>
      </div>
      <span className="text-purple-300">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-purple-200">h</span>
      </div>
      <span className="text-purple-300">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-purple-200">m</span>
      </div>
      <span className="text-purple-300">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-purple-200">s</span>
      </div>
    </div>
  )
}