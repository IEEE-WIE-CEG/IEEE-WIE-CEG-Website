import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                IEEE WIE CEG
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Empowering women in engineering and technology. Join our community of innovators, leaders, and
                changemakers.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">Join Us</Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Workshops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="w-fit">Featured Event</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI & Machine Learning Workshop</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for an exciting hands-on workshop exploring the fundamentals of AI and Machine Learning. Learn
                  to build your own models and discover real-world applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Register Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Workshop"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore IEEE WIE CEG</h2>
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
                <Button variant="link" className="mt-4 p-0">
                  Read More →
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
                <Button variant="link" className="mt-4 p-0">
                  Explore Benefits →
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
                <Button variant="link" className="mt-4 p-0">
                  View Gallery →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
