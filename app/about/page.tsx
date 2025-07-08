import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "President",
      email: "sarah@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Computer Science student passionate about AI and women in tech.",
    },
    {
      name: "Emily Chen",
      role: "Vice President",
      email: "emily@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Electrical Engineering student focused on renewable energy systems.",
    },
    {
      name: "Maria Rodriguez",
      role: "Secretary",
      email: "maria@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Mechanical Engineering student interested in robotics and automation.",
    },
    {
      name: "Aisha Patel",
      role: "Treasurer",
      email: "aisha@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Software Engineering student with expertise in web development.",
    },
    {
      name: "Lisa Wang",
      role: "Events Coordinator",
      email: "lisa@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Biomedical Engineering student passionate about healthcare technology.",
    },
    {
      name: "Rachel Kim",
      role: "Outreach Manager",
      email: "rachel@ieee-wie-ceg.org",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Civil Engineering student focused on sustainable infrastructure.",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                About IEEE WIE CEG
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Empowering the next generation of women engineers and technologists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="w-fit">Our Mission</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inspiring Women in Engineering</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  IEEE Women in Engineering (WIE) is a global network dedicated to promoting women engineers and
                  scientists, and inspiring girls around the world to follow their academic interests in a career in
                  engineering and science.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="w-fit">Our Vision</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A World of Equality</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  We envision a world where women are equally represented in all engineering disciplines and leadership
                  positions, contributing to technological advancement and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our activities focus on professional development, networking, and community outreach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                <p className="text-muted-foreground">
                  Workshops, seminars, and training sessions to enhance technical and leadership skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Networking Events</h3>
                <p className="text-muted-foreground">
                  Connect with industry professionals, alumni, and peers in engineering fields.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
                <p className="text-muted-foreground">
                  STEM education programs for young girls and community service initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Dedicated leaders working to advance women in engineering and technology.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Join Us?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                Become part of a community that's shaping the future of engineering and technology.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">Join IEEE WIE CEG</Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
