import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { events as allEvents } from "@/lib/events-data"
import { articles as allArticles } from "@/lib/articles-data"

export default function Home() {
  // Find the latest upcoming event
  const today = new Date()
  const toDate = (dateStr: string) => new Date(dateStr)
  const upcomingEvents = allEvents.filter(e => toDate(e.date) > today)
  const nextEvent = upcomingEvents.sort((a, b) => toDate(a.date).getTime() - toDate(b.date).getTime())[0]

  // Get latest research articles (sorted by publish date)
  const latestArticles = [...allArticles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3)

  // Helper to format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/banners/anna_university.webp')" }}
      >
        <div className="container px-4 md:px-6 bg-black/50 rounded-xl py-20 min-h-[200px] flex items-center justify-center">

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                IEEE WIE-CEG Student Affinity Group
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

      {/* Featured Event - Only show if there are upcoming events */}
      {nextEvent && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
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
          </div>
        </section>
      )}

      {/* Latest Research Articles - Always shown, but positioned right after hero if no events */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Research Articles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover cutting-edge research and insights from our talented club members
              </p>
            </div>
          </div>
          
          {latestArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {latestArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 mb-3">
                      <Link href={`/research/${article.id}`} className="hover:text-purple-600 transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-4 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span className="font-medium">{article.author}</span>
                        <span>•</span>
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={`/research/${article.id}`}>Read Article</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">No research articles available at the moment.</div>
          )}
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Button asChild>
              <Link href="/research">View All Research Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore IEEE WIE-CEG Student Affinity Group</h2>
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
                <CardTitle>Get Involved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ready to join our community? Connect with us and become part of our mission to empower women in engineering.
                </p>
                <Button variant="link" className="mt-4 p-0" asChild>
                  <Link href="/contact">Contact Us →</Link>
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
