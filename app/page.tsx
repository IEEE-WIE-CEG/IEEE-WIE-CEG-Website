import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { events as allEvents } from "@/lib/events-data"

export default function Home() {
  // Find the latest upcoming event
  const today = new Date()
  const toDate = (dateStr: string) => new Date(dateStr)
  const upcomingEvents = allEvents.filter(e => toDate(e.date) > today)
  const nextEvent = upcomingEvents.sort((a, b) => toDate(a.date).getTime() - toDate(b.date).getTime())[0]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                IEEE WIE-CEG Student Chapter
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Empowering women in engineering and technology. Join our community of innovators, leaders, and
                changemakers.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <Link href="/contact">Join Us</Link>
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          {nextEvent ? (
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="w-fit">Upcoming Event</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{nextEvent.title}</h2>
                  {nextEvent.tagline && <p className="text-lg text-purple-700 font-semibold">{nextEvent.tagline}</p>}
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {nextEvent.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{nextEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>{nextEvent.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {nextEvent.registrationLink && (
                    <Button asChild>
                      <Link href={nextEvent.registrationLink} target="_blank">Register Now</Link>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <Link href={`/events/${nextEvent.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <Image
                  src={nextEvent.poster || "/placeholder.jpg"}
                  alt={nextEvent.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">No upcoming events at the moment.</div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore IEEE WIE-CEG Student Chapter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover what makes our community special and how you can be part of it.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about our mission, vision, and the impact we're making in the engineering community.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/about">Read More →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Why Join IEEE WIE?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover the benefits of joining our network and how it can advance your career.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/contact">Explore Benefits →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Event Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Check out photos and highlights from our past events and activities.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/gallery">View Gallery →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join IEEE WiE Global Community Section */}
      <section className="w-full py-12 md:py-20 bg-white border-t">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Join IEEE WiE Global Community</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            IEEE Women in Engineering (WIE) is one of the largest international professional organisations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests to a career in engineering. The WIE student membership is free if you are already an IEEE member. If not, take IEEE membership <a href="https://www.ieee.org/membership/join/index.html" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">here</a> and join the WIE affinity group for free. If you are interested in promoting women, both within the IEEE and in the engineering industry, WIE is for you. Get the benefits of the IEEE membership and participate in our activities.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/contact">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
