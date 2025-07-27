import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Best Student Branch Award 2023",
      description:
        "Recognized as the outstanding IEEE WIE student branch for exceptional programming and member engagement.",
      year: "2023",
      category: "Branch Excellence",
      icon: Trophy,
    },
    {
      title: "Outstanding Community Outreach",
      description: "Awarded for our STEM education programs reaching over 500 young girls in local schools.",
      year: "2023",
      category: "Community Impact",
      icon: Star,
    },
    {
      title: "Innovation in Programming",
      description:
        "Recognized for creative and impactful events including our AI workshop series and mentorship program.",
      year: "2022",
      category: "Programming",
      icon: Award,
    },
    {
      title: "Membership Growth Excellence",
      description: "Achieved 150% membership growth, expanding from 200 to 500+ active members.",
      year: "2022",
      category: "Growth",
      icon: Medal,
    },
    {
      title: "Regional Leadership Award",
      description: "Our president received recognition for outstanding leadership in promoting women in engineering.",
      year: "2022",
      category: "Leadership",
      icon: Trophy,
    },
    {
      title: "Best Technical Workshop Series",
      description: "Our robotics and AI workshop series was recognized as the most comprehensive in the region.",
      year: "2021",
      category: "Education",
      icon: Star,
    },
  ]

  const stats = [
    { label: "Awards Won", value: "15+", icon: Trophy },
    { label: "Recognition Letters", value: "25+", icon: Award },
    { label: "Years of Excellence", value: "5+", icon: Star },
    { label: "Community Impact", value: "1000+", icon: Medal },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Our Achievements
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Celebrating our milestones and recognition in advancing women in engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <IconComponent className="h-8 w-8 text-purple-600" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recognition & Awards</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our commitment to excellence has been recognized at local, regional, and international levels.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {achievement.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Making a Difference</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Our achievements reflect our commitment to empowering women in engineering and creating positive
                  change in our community and beyond.
                </p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mentored 200+ women engineering students</li>
                <li>• Organized 50+ technical workshops and seminars</li>
                <li>• Reached 1000+ young girls through STEM outreach</li>
                <li>• Facilitated 100+ industry connections</li>
                <li>• Awarded $50,000+ in scholarships</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
                <p className="text-muted-foreground">
                  As we continue to grow and evolve, we remain committed to our mission of advancing women in
                  engineering. Our achievements motivate us to reach even greater heights and create more opportunities
                  for the next generation of women engineers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
