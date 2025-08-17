import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
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
  ChevronRight} from "lucide-react"

export default function OperationTrinetraPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Deep Dark Blue Background with Purple Accents */}
      <div className="fixed inset-0 bg-slate-950 -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-950/40 via-slate-950 to-purple-950/25 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.08),transparent_70%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.06),transparent_65%)] -z-10"></div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center border-b border-purple-800/15">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Organization Header */}
            <div className="mb-8">
              <Badge variant="outline" className="border-purple-700/30 text-purple-300 px-4 py-1 text-sm font-medium">
                IEEE WIE-CEG Student Chapter
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              OPERATION
              <span className="block text-purple-400 mt-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                TRINETRA
              </span>
            </h1>

            {/* Mission Statement */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-4 tracking-wide">
                DETECT • DEFEND • DISMANTLE
              </p>
              <p className="text-lg text-purple-400 max-w-3xl leading-relaxed">
                A 24-hour defense-focused hackathon challenging students to develop innovative tech solutions that directly aid the nation's defense ecosystem in fighting digital threats and securing mission-critical infrastructure.
              </p>
              <p className="text-base text-purple-300 max-w-3xl leading-relaxed mt-4">
                In today's digital battlefield, cyber threats are as dangerous as physical attacks. Trinetra focuses on crafting solutions that protect our armed forces' digital infrastructure, fortify national cybersecurity, and build tech that serves our soldiers and citizens on and off the field.
              </p>
            </div>

            {/* Event Specifications */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-4 hover:bg-purple-900/40 hover:border-purple-600/60 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="text-sm text-purple-400">Date</div>
                    <div className="text-purple-100 font-medium">September 13, 2025</div>
                  </div>
                </div>
              </div>
              <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-4 hover:bg-purple-900/40 hover:border-purple-600/60 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="text-sm text-purple-400">Format</div>
                    <div className="text-purple-100 font-medium">Online</div>
                  </div>
                </div>
              </div>
              <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-4 hover:bg-purple-900/40 hover:border-purple-600/60 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <div>
                    <div className="text-sm text-purple-400">Duration</div>
                    <div className="text-purple-100 font-medium">24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <div className="relative bg-gradient-to-br from-purple-950/40 via-slate-950/60 to-blue-950/40 border border-purple-500/30 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
                <CountdownTimer
                  targetDate="2025-09-13T08:00:00+05:30"
                  className="relative z-10"
                />
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 rounded-2xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)] rounded-2xl"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" disabled className="bg-gray-600 text-gray-400 px-8 py-3 font-semibold cursor-not-allowed">
                Registration Opens Soon
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-purple-400 text-purple-800 hover:bg-purple-900/30 hover:border-purple-300 hover:text-purple-100 px-8 py-3 font-semibold">
                  Contact Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              About Operation Trinetra
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-8">
                  <p className="text-purple-200 leading-relaxed mb-6">
                    Operation Trinetra is a <span className="text-purple-400 font-semibold drop-shadow-[0_0_5px_rgba(168,85,247,0.6)]">24-hour defense-focused hackathon</span> conducted by <span className="text-purple-300 font-semibold">IEEE WIE-CEG Student Chapter</span>. The event challenges students to develop innovative cybersecurity solutions that directly support India's defense ecosystem in combating digital threats and securing mission-critical infrastructure.
                  </p>

                  <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-100 mb-4 flex items-center gap-3">
                      <Target className="h-5 w-5 text-purple-400" />
                      Mission Framework
                    </h3>
                    <p className="text-purple-300 leading-relaxed text-sm">
                      <span className="text-purple-400 font-semibold">DETECT</span> vulnerabilities in defense systems • <span className="text-purple-300 font-semibold">DEFEND</span> against cyber threats • <span className="text-purple-200 font-semibold">DISMANTLE</span> attack vectors through innovative solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6 text-center">
                    <Clock className="h-6 w-6 text-purple-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-purple-100">24</div>
                    <div className="text-purple-300 text-xs uppercase tracking-wide">Hours</div>
                  </div>
                  <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6 text-center">
                    <Monitor className="h-6 w-6 text-purple-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-purple-100">Online</div>
                    <div className="text-purple-300 text-xs uppercase tracking-wide">Format</div>
                  </div>
                  <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6 text-center">
                    <Trophy className="h-6 w-6 text-purple-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-purple-100">₹20K+</div>
                    <div className="text-purple-300 text-xs uppercase tracking-wide">Prize Pool</div>
                  </div>
                  <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6 text-center">
                    <Users className="h-6 w-6 text-purple-400 mx-auto mb-3" />
                    <div className="text-xl font-bold text-purple-100">Open</div>
                    <div className="text-purple-300 text-xs uppercase tracking-wide">Eligibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Why Participate?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-red-950/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <Shield className="h-6 w-6 text-red-500 group-hover:text-red-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Tackle Real-World Vulnerabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-pink-200 transition-colors">
                    Work on problem tracks that matter to national security and defense systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-blue-950/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-all duration-300">
                    <Users className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Mentorship from Alumni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-blue-200 transition-colors">
                    Gain insights from accomplished alumni with industry experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-yellow-950/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 border border-yellow-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 group-hover:border-yellow-500/50 transition-all duration-300">
                    <Trophy className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Prize Pool Worth ₹20,000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-yellow-200 transition-colors">
                    Win exciting cash prizes and recognition for your innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 group-hover:border-emerald-500/50 transition-all duration-300">
                    <Network className="h-6 w-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Network with Innovators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-emerald-200 transition-colors">
                    Collaborate with like-minded peers solving real-world problems in defense-tech space.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-violet-950/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 group cursor-pointer lg:col-span-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-violet-600/20 border border-violet-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600/30 group-hover:border-violet-500/50 transition-all duration-300">
                    <Award className="h-6 w-6 text-violet-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Certificate of Participation for All</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-violet-200 transition-colors">
                    Get recognized for contributing to India's digital defense mission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Event Timeline
            </h2>

            <div className="space-y-8">
              {/* Day 1 Timeline */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-200">Day 1 - September 13, 2025</h3>
                </div>
                
                <div className="ml-6 border-l-2 border-purple-700/30 pl-8 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-emerald-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-emerald-500/30 rounded-lg p-4 hover:bg-emerald-950/20 hover:border-emerald-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-emerald-400 font-mono text-lg font-bold">08:00 AM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Opening Ceremony & Technical Briefing</div>
                          <div className="text-purple-300 text-sm mt-1">Kickoff event with problem statement overview</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-blue-500/30 rounded-lg p-4 hover:bg-blue-950/20 hover:border-blue-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-blue-400 font-mono text-lg font-bold">09:00 AM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Problem Statements Released</div>
                          <div className="text-purple-300 text-sm mt-1">Teams begin working on their solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-orange-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-orange-500/30 rounded-lg p-4 hover:bg-orange-950/20 hover:border-orange-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-orange-400 font-mono text-lg font-bold">01:00 PM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">First Mentor Checkpoint</div>
                          <div className="text-purple-300 text-sm mt-1">Progress review and guidance session</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-pink-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-pink-500/30 rounded-lg p-4 hover:bg-pink-950/20 hover:border-pink-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-pink-400 font-mono text-lg font-bold">06:00 PM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Second Mentor Checkpoint</div>
                          <div className="text-purple-300 text-sm mt-1">Technical architecture review</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-violet-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-violet-500/30 rounded-lg p-4 hover:bg-violet-950/20 hover:border-violet-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-violet-400 font-mono text-lg font-bold">10:00 PM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Final Mentor Review Session</div>
                          <div className="text-purple-300 text-sm mt-1">Last guidance before submission</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 Timeline */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center">
                    <span className="text-red-400 font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-200">Day 2 - September 14, 2025</h3>
                </div>
                
                <div className="ml-6 border-l-2 border-purple-700/30 pl-8 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-red-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-red-500/30 rounded-lg p-4 hover:bg-red-950/20 hover:border-red-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-red-400 font-mono text-lg font-bold">08:00 AM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Submission Deadline</div>
                          <div className="text-purple-300 text-sm mt-1">Final project submissions due</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-yellow-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-yellow-500/30 rounded-lg p-4 hover:bg-yellow-950/20 hover:border-yellow-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-yellow-400 font-mono text-lg font-bold">11:00 AM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Team Presentations</div>
                          <div className="text-purple-300 text-sm mt-1">Present solutions to judging panel</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 w-4 h-4 bg-indigo-500 rounded-full border-2 border-purple-950"></div>
                    <div className="bg-purple-950/30 border border-indigo-500/30 rounded-lg p-4 hover:bg-indigo-950/20 hover:border-indigo-500/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-indigo-400 font-mono text-lg font-bold">04:00 PM</div>
                          <div className="text-pink-200 font-semibold group-hover:text-white transition-colors">Results Announcement & Closing</div>
                          <div className="text-purple-300 text-sm mt-1">Winner announcement and ceremony</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-100 mb-3">Submission Platform</h3>
                <p className="text-purple-300 text-sm mb-4">All project submissions must be completed through the designated platform.</p>
                <Badge variant="outline" className="border-purple-500 text-purple-400">Unstop Platform</Badge>
              </div>
              <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-100 mb-3">Presentation Format</h3>
                <p className="text-purple-300 text-sm mb-4">Final presentations will be conducted via video conference.</p>
                <Badge variant="outline" className="border-purple-500 text-purple-400">Google Meet</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Evaluation Snapshot
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-yellow-950/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 border border-yellow-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 group-hover:border-yellow-500/50 transition-all duration-300">
                    <Lightbulb className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Innovation & Originality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-yellow-200 transition-colors">Novel approaches and creative problem-solving methodologies</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-blue-950/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-all duration-300">
                    <Zap className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-blue-200 transition-colors">Code quality, architecture design, and technical sophistication</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-red-950/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <Shield className="h-6 w-6 text-red-500 group-hover:text-red-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Relevance to Indian Defense</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-red-200 transition-colors">Applicability to Indian defense and cybersecurity challenges</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 group-hover:border-emerald-500/50 transition-all duration-300">
                    <Target className="h-6 w-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Feasibility & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-emerald-200 transition-colors">Real-world implementation potential and growth capacity</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-orange-950/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600/20 border border-orange-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/30 group-hover:border-orange-500/50 transition-all duration-300">
                    <Eye className="h-6 w-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Security Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-orange-200 transition-colors">Robustness of security measures and threat mitigation</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-violet-950/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-violet-600/20 border border-violet-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600/30 group-hover:border-violet-500/50 transition-all duration-300">
                    <Award className="h-6 w-6 text-violet-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Presentation & Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-violet-200 transition-colors">Communication clarity and demonstration effectiveness</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-purple-950/30 border border-purple-700/50 rounded-lg p-6">
              <p className="text-purple-200 text-center">
                Solutions will be evaluated by industry professionals and defense sector experts across these comprehensive criteria to identify the most impactful cybersecurity innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Mentorship
            </h2>

            <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-8">
              <p className="text-purple-200 leading-relaxed mb-6 text-center">
                Participants will receive guidance from alumni mentors, who will help shape, refine, and ground ideas in practical defense applications.
              </p>
              <p className="text-purple-300 leading-relaxed text-center">
                These mentors serve as bridges between ideas and real-world use-cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Sponsorship Opportunities
            </h2>

            <div className="mb-12 bg-purple-950/30 border border-purple-700/50 rounded-lg p-8">
              <p className="text-purple-200 leading-relaxed mb-4 text-center">
                Support a national cause while gaining access to India's top tech talent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-blue-950/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-all duration-300">
                    <Globe className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Brand Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-blue-200 transition-colors">
                    Brand visibility across promotions and event collaterals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 group-hover:border-emerald-500/50 transition-all duration-300">
                    <Users className="h-6 w-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Curated Talent Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-emerald-200 transition-colors">
                    Access to a curated pool of cybersecurity innovators.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-orange-950/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600/20 border border-orange-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/30 group-hover:border-orange-500/50 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Engagement Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-orange-200 transition-colors">
                    Opportunity to offer internships, goodies, or prizes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-pink-950/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-pink-600/20 border border-pink-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600/30 group-hover:border-pink-500/50 transition-all duration-300">
                    <Heart className="h-6 w-6 text-pink-500 group-hover:text-pink-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Strategic CSR Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-pink-200 transition-colors">
                    Strategic CSR alignment with national defense and digital safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-20 border-b border-purple-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Organizing Committee
            </h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-blue-950/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group cursor-pointer lg:col-span-3">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-all duration-300">
                      <Award className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <CardTitle className="text-pink-200 text-xl group-hover:text-white transition-colors">IEEE WIE-CEG Student Chapter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 leading-relaxed mb-6 group-hover:text-blue-200 transition-colors">
                    The <span className="text-pink-200 font-semibold">IEEE Women in Engineering-CEG Student Chapter</span> is dedicated to advancing inclusive STEM education and empowering the next generation of technology leaders through innovative programs and industry partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 group-hover:border-emerald-500/50 transition-all duration-300">
                    <Target className="h-6 w-6 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-emerald-200 transition-colors">
                    Building inclusive STEM communities that foster innovation, leadership development, and technical excellence while addressing critical national challenges through student-led initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-yellow-950/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 border border-yellow-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 group-hover:border-yellow-500/50 transition-all duration-300">
                    <Lightbulb className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-yellow-200 transition-colors">
                    Empowering students to develop innovative solutions for real-world problems, with particular focus on national security, cybersecurity, and defense technology advancement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-950/30 border-purple-700/50 hover:bg-violet-950/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-violet-600/20 border border-violet-600/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600/30 group-hover:border-violet-500/50 transition-all duration-300">
                    <Star className="h-6 w-6 text-violet-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <CardTitle className="text-pink-200 text-lg group-hover:text-white transition-colors">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 text-sm leading-relaxed group-hover:text-violet-200 transition-colors">
                    Through events like Operation Trinetra, we bridge the gap between academic learning and industry application, creating pathways for students to contribute meaningfully to India's technological advancement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Registration Information
            </h2>
            <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto">
              Join Operation Trinetra and contribute to India's cybersecurity infrastructure through innovative defense technology solutions.
            </p>

            <div className="bg-purple-950/30 border border-purple-700/50 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-100 mb-2">24</div>
                  <div className="text-purple-300 text-sm">Hour Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-100 mb-2">₹20,000+</div>
                  <div className="text-purple-300 text-sm">Prize Pool</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-100 mb-2">Online</div>
                  <div className="text-purple-300 text-sm">Format</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" disabled className="bg-gray-600 text-gray-400 px-8 py-3 font-semibold cursor-not-allowed">
                  Registration Opens Soon
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-purple-400 text-purple-800 hover:bg-purple-900/30 hover:border-purple-300 hover:text-purple-100 px-8 py-3 font-semibold">
                    Contact Information
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-purple-300 text-sm mb-4">
                Organized by IEEE WIE-CEG Student Chapter • Supporting India's Digital Defense Mission
              </p>
              <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-1">
                IEEE WIE-CEG Student Chapter
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}