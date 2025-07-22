import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Shield,
  Target,
  Zap,
  Users,
  Award,
  CheckCircle,
  Globe,
  Lightbulb,
  Star,
  Heart,
  Briefcase,
  Network,
  Eye,
  Monitor,
  ChevronRight,
  ExternalLink
} from "lucide-react"

export default function OperationTrinetraPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Professional Background Pattern */}
      <div className="fixed inset-0 bg-slate-950 -z-10"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 -z-10"></div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center border-b border-slate-800">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Organization Header */}
            <div className="mb-8">
              <Badge variant="outline" className="border-slate-600 text-slate-300 px-4 py-1 text-sm font-medium">
                IEEE WIE-CEG Student Chapter
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              OPERATION
              <span className="block text-red-500 mt-2">
                TRINETRA
              </span>
            </h1>

            {/* Mission Statement */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-slate-300 font-semibold mb-4 tracking-wide">
                DETECT • DEFEND • DISMANTLE
              </p>
              <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                A 24-hour defense-focused hackathon challenging students to develop innovative cybersecurity solutions for India's digital defense infrastructure.
              </p>
            </div>

            {/* Event Specifications */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-400">Date</div>
                    <div className="text-white font-medium">Third week of August</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-400">Format</div>
                    <div className="text-white font-medium">Online</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-400">Duration</div>
                    <div className="text-white font-medium">24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 font-semibold">
                Contact Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              About Operation Trinetra
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Operation Trinetra is a <span className="text-red-400 font-semibold">24-hour defense-focused hackathon</span> conducted by <span className="text-slate-200 font-semibold">IEEE WIE-CEG Student Chapter</span>. The event challenges students to develop innovative cybersecurity solutions that directly support India's defense ecosystem in combating digital threats and securing mission-critical infrastructure.
                  </p>

                  <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <Target className="h-5 w-5 text-red-500" />
                      Mission Framework
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      <span className="text-red-400 font-semibold">DETECT</span> vulnerabilities in defense systems • <span className="text-blue-400 font-semibold">DEFEND</span> against cyber threats • <span className="text-green-400 font-semibold">DISMANTLE</span> attack vectors through innovative solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center">
                    <Clock className="h-6 w-6 text-slate-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">24</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide">Hours</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center">
                    <Monitor className="h-6 w-6 text-slate-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">Online</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide">Format</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center">
                    <Trophy className="h-6 w-6 text-slate-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">₹20K+</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide">Prize Pool</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center">
                    <Users className="h-6 w-6 text-slate-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">Open</div>
                    <div className="text-slate-400 text-xs uppercase tracking-wide">Eligibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Participation Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-white text-lg">National Security Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Address real-world vulnerabilities in defense systems and contribute to India's cybersecurity infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Industry Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Guidance from accomplished alumni and industry professionals with defense sector experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Recognition & Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Prize pool of ₹20,000+ with certificates and potential internship opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-600/20 border border-purple-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Professional Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Connect with defense-tech innovators and cybersecurity professionals across India.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600/20 border border-orange-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Career Advancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Access to internships, job opportunities, and career guidance from industry leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 border border-yellow-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Professional Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Official certification and recognition for contributing to India's digital defense mission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Event Timeline
            </h2>

            <div className="space-y-4">
              {[
                { time: "08:00", event: "Opening Ceremony & Technical Briefing", phase: "Day 1" },
                { time: "09:00", event: "Problem Statements Released", phase: "Day 1" },
                { time: "13:00", event: "First Mentor Checkpoint", phase: "Day 1" },
                { time: "18:00", event: "Second Mentor Checkpoint", phase: "Day 1" },
                { time: "22:00", event: "Final Mentor Review Session", phase: "Day 1" },
                { time: "08:00", event: "Submission Deadline", phase: "Day 2" },
                { time: "11:00", event: "Team Presentations to Judging Panel", phase: "Day 2" },
                { time: "16:00", event: "Results Announcement & Closing", phase: "Day 2" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
                  <div className="w-16 text-center">
                    <div className="text-sm text-slate-400 font-mono">{item.time}</div>
                    <div className="text-xs text-slate-500">{item.phase}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{item.event}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Submission Platform</h3>
                <p className="text-slate-400 text-sm mb-4">All project submissions must be completed through the designated platform.</p>
                <Badge variant="outline" className="border-blue-600 text-blue-400">Unstop Platform</Badge>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Presentation Format</h3>
                <p className="text-slate-400 text-sm mb-4">Final presentations will be conducted via video conference.</p>
                <Badge variant="outline" className="border-green-600 text-green-400">Google Meet</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Assessment Framework
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Innovation & Originality", icon: Lightbulb, desc: "Novel approaches and creative problem-solving methodologies" },
                { title: "Technical Implementation", icon: Zap, desc: "Code quality, architecture design, and technical sophistication" },
                { title: "Defense Sector Relevance", icon: Shield, desc: "Applicability to Indian defense and cybersecurity challenges" },
                { title: "Scalability & Feasibility", icon: Target, desc: "Real-world implementation potential and growth capacity" },
                { title: "Security Architecture", icon: Eye, desc: "Robustness of security measures and threat mitigation" },
                { title: "Presentation Quality", icon: Award, desc: "Communication clarity and demonstration effectiveness" }
              ].map((criteria, index) => {
                const IconComponent = criteria.icon;
                return (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-slate-400" />
                      </div>
                      <CardTitle className="text-white text-lg">{criteria.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm leading-relaxed">{criteria.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 bg-slate-900/50 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 text-center">
                Solutions will be evaluated by industry professionals and defense sector experts across these comprehensive criteria to identify the most impactful cybersecurity innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Mentorship Program
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-500" />
                  Industry Guidance
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Mentor Support</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>• Accomplished alumni with defense sector experience</li>
                      <li>• Industry professionals from cybersecurity domain</li>
                      <li>• Technical and strategic guidance throughout the event</li>
                      <li>• Real-world application insights and feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Checkpoint Reviews</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>• Regular progress assessments and direction</li>
                      <li>• Technical architecture review and optimization</li>
                      <li>• Market viability and implementation feasibility</li>
                      <li>• Presentation preparation and pitch refinement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Target className="h-6 w-6 text-green-500" />
                  Professional Development
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Knowledge Transfer</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Mentors bridge the gap between academic concepts and industry applications, providing insights into defense sector requirements and cybersecurity best practices.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Career Guidance</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Beyond technical support, mentors provide career counseling, industry networking opportunities, and pathways into defense technology and cybersecurity careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Partnership Opportunities
            </h2>

            <div className="mb-12 bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partnership Benefits</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Partner with Operation Trinetra to support national cybersecurity initiatives while gaining access to India's emerging defense technology talent pool.
              </p>
              <p className="text-slate-400 text-sm">
                Align your organization with national defense priorities and contribute to India's digital security infrastructure development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Brand Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Comprehensive brand exposure across event promotions, digital platforms, and participant communications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-600/20 border border-purple-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Talent Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Direct access to skilled cybersecurity professionals and defense technology innovators.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-white text-lg">Recruitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Opportunity to offer internships, full-time positions, and collaborative projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-white text-lg">CSR Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Meaningful contribution to national security and cybersecurity education initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Organizing Committee
            </h2>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-500" />
                  IEEE WIE-CEG Student Chapter
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  The <span className="text-white font-semibold">IEEE Women in Engineering-CEG Student Chapter</span> is dedicated to advancing inclusive STEM education and empowering the next generation of technology leaders through innovative programs and industry partnerships.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Mission
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Building inclusive STEM communities that foster innovation, leadership development, and technical excellence while addressing critical national challenges through student-led initiatives.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Vision
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Empowering students to develop innovative solutions for real-world problems, with particular focus on national security, cybersecurity, and defense technology advancement.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm text-center">
                  Through events like Operation Trinetra, we bridge the gap between academic learning and industry application, creating pathways for students to contribute meaningfully to India's technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Registration Information
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              Join Operation Trinetra and contribute to India's cybersecurity infrastructure through innovative defense technology solutions.
            </p>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">24</div>
                  <div className="text-slate-400 text-sm">Hour Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">₹20,000+</div>
                  <div className="text-slate-400 text-sm">Prize Pool</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">Online</div>
                  <div className="text-slate-400 text-sm">Format</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold">
                  Register Now
                </Button>
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 font-semibold">
                  Contact Information
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-sm mb-4">
                Organized by IEEE WIE-CEG Student Chapter • Supporting India's Digital Defense Mission
              </p>
              <Badge variant="outline" className="border-slate-600 text-slate-400 px-4 py-1">
                IEEE WIE-CEG Student Chapter
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}