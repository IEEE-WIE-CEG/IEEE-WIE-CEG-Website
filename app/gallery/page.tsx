"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Image as ImageIcon, Video, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const images = [
    {
      id: 1,
      title: "Open Call 2025",
      src: "/gallery/open_call_2025.jpg",
      alt: "IEEE WIE-CEG Open Call 2025 Event"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Open Call 2025 Highlights",
      src: "/gallery/open_call_video.mp4",
      thumbnail: "/gallery/open_call_2025.jpg"
    }
  ]

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedVideo(null)
  }

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center relative min-h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/banners/gallery_bg.png')" }} 
      >
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

      {/* Images Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Images</h2>
            <Badge variant="outline">{images.length}</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-2">{image.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold tracking-tight">Videos</h2>
            <Badge variant="outline">{videos.length}</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow us on Instagram for the latest updates, behind-the-scenes content, and more photos from our events.
          </p>
          <Button asChild>
            <a href="https://www.instagram.com/ieeewieceg/" target="_blank" rel="noopener noreferrer">
              Follow us on Instagram
            </a>
          </Button>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div 
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="max-w-full max-h-[90vh] object-contain"
                controls
                autoPlay
                muted
                poster={selectedVideo.thumbnail}
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}