"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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

  const coreMembers = [
    {
      name: "Rakshitha",
      role: "President",
      image: "/members/Rakshitha.jpg",
    },
    {
      name: "Swayamprabha",
      role: "Vice President",
      image: "/members/swayam.jpg",
    },
    {
      name: "Keerthana",
      role: "Secretary",
      image: "/members/keerthanaa.jpg",
    },
    {
      name: "Roshan",
      role: "Execom Member",
      image: "/members/Roshan Kumar.jpg",
    },
    {
      name: "Aadhisesha",
      role: "Execom Member",
      image: "/members/Aadhisesha.jpg",
    },
  ]

  const divisions = [
    {
      name: "Tech and Research",
      head: { name: "Ananyaa Sivakumar", image: "/placeholder.svg?height=100&width=100" },
      deputy: { name: "Dhanya Vikram", image: "/placeholder.svg?height=100&width=100" },
      uiux: { name: "Vijay Krishna S", image: "/placeholder.svg?height=100&width=100" },
      members: [
        { name: "Shibani Selvakumar", image: "/placeholder.svg?height=100&width=100" },
        { name: "Akhshaiya S", image: "/placeholder.svg?height=100&width=100" },
        { name: "Shannen Catherine A", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
    {
      name: "Operations and Marketing",
      head: { name: "Harshitha UR", image: "/members/Harshitha UR.jpg" },
      deputy: { name: "Ripika Sri R", image: "/placeholder.svg?height=100&width=100" },
      members: [
        { name: "Shushmita K", image: "/members/Sushmita.png" },
        { name: "Akshitha Ajaykumar", image: "/members/akshitha_ajaykumar.JPG" },
        { name: "Janis Miracline A", image: "/members/Janis.jpg" },
        { name: "Abharna Shree M", image: "/members/Abharna.jpg" },
      ],
    },
    {
      name: "Events",
      head: { name: "Swetha R Barade", image: "/members/Swetha-R-Barade.jpg" },
      deputy: { name: "Aanisa Maryam", image: "/members/Anisa Mariyam.jpg" },
      members: [
        { name: "Roshon R", image: "/members/Roshan-support-events-member.jpg" },
        { name: "Aarya Malviya", image: "/members/Aarya Malviya.jpg" },
      ],
    },
    {
      name: "Industrial Relations",
      head: { name: "Jeevitha T", image: "/members/jeevetha.jpg" },
      deputy: { name: "Veda Varshini R", image: "/members/Veda Varshini image-ieee.jpeg" },
      members: [
        { name: "K. Mega Sree", image: "/members/megasree.k_ industrial relations member.jpg" },
        { name: "Praveen S", image: "/members/praveen S .jpg" },
      ],
    },
    {
      name: "Design",
      head: { name: "Srilekha Ramkumar", image: "/members/Srilekha Ramkumar.jpeg" },
      deputy: { name: "Akshara Achuthan", image: "/members/Akshara.jpeg" },
      members: [
        { name: "Praveena", image: "/members/Praveena R.jpeg" },
        { name: "Sitheshwar", image: "/members/Sithishwar.JPG" },
      ],
    },
  ]

  function DivisionCard({ division }: { division: typeof divisions[0] }) {
    // Only include defined heads, deputies, uiux, and members
    const allMembers = ([division.head, division.deputy, division.uiux]
      .filter(Boolean) as { name: string; image: string }[])
      .concat(division.members)
    return (
      <Card className="text-center">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6">{division.name}</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {[division.head, division.deputy, division.uiux].filter(Boolean).map((person) => (
              person ? (
                <div key={person.name} className="flex flex-col items-center w-40">
                  <Avatar className="w-32 h-32 mb-2">
                    <AvatarImage src={person.image} alt={person.name} />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-base font-semibold">{person.name}</span>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {person === division.head
                      ? "Head"
                      : person === division.deputy
                      ? "Deputy Head"
                      : "UI/UX Head"}
                  </Badge>
                </div>
              ) : null
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-2">View Full Team</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{division.name} - Full Team</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                {allMembers.map((person) => (
                  person ? (
                    <div key={person.name} className="flex flex-col items-center w-40">
                      <Avatar className="w-32 h-32 mb-2">
                        <AvatarImage src={person.image} alt={person.name} />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-base font-semibold">{person.name}</span>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {person === division.head
                          ? "Head"
                          : person === division.deputy
                          ? "Deputy Head"
                          : person === division.uiux
                          ? "UI/UX Head"
                          : "Member"}
                      </Badge>
                    </div>
                  ) : null
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    )
  }

  function isPerson(obj: unknown): obj is { name: string; image: string } {
    return !!obj && typeof obj === 'object' && 'name' in obj && 'image' in obj;
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                About IEEE WIE-CEG Student Chapter
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
          {/* Core Members */}
          <div className="mx-auto max-w-5xl py-8">
            {/* Top row - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 justify-items-center">
              {coreMembers.slice(0, 3).map((member) => (
                <Card key={member.name} className="text-center w-56">
                  <CardContent className="p-6">
                    <Avatar className="w-40 h-40 mx-auto mb-3 rounded-lg">
                      <AvatarImage src={member.image} alt={member.name} className="rounded-lg" />
                      <AvatarFallback className="rounded-lg">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Bottom row - 2 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto justify-items-center">
              {coreMembers.slice(3, 5).map((member) => (
                <Card key={member.name} className="text-center w-56">
                  <CardContent className="p-6">
                    <Avatar className="w-40 h-40 mx-auto mb-3 rounded-lg">
                      <AvatarImage src={member.image} alt={member.name} className="rounded-lg" />
                      <AvatarFallback className="rounded-lg">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Divisions */}
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {divisions.map((division) => (
              <DivisionCard key={division.name} division={division} />
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
              <Button className="bg-white text-purple-600 hover:bg-gray-100">Join IEEE WIE-CEG Student Chapter</Button>
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
