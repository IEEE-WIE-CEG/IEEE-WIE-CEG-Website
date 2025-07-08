import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, title: "AI Workshop 2024", category: "Workshop", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, title: "Robotics Competition", category: "Competition", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "Career Fair", category: "Networking", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, title: "Panel Discussion", category: "Panel", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, title: "Coding Bootcamp", category: "Workshop", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, title: "Tech Talk", category: "Seminar", image: "/placeholder.svg?height=300&width=400" },
    { id: 7, title: "Networking Event", category: "Networking", image: "/placeholder.svg?height=300&width=400" },
    { id: 8, title: "Innovation Showcase", category: "Exhibition", image: "/placeholder.svg?height=300&width=400" },
    { id: 9, title: "Leadership Summit", category: "Conference", image: "/placeholder.svg?height=300&width=400" },
    { id: 10, title: "STEM Outreach", category: "Outreach", image: "/placeholder.svg?height=300&width=400" },
    { id: 11, title: "Mentorship Program", category: "Program", image: "/placeholder.svg?height=300&width=400" },
    { id: 12, title: "Awards Ceremony", category: "Ceremony", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Event Gallery
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Capturing moments from our events, workshops, and community activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
