import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, BookOpen } from "lucide-react"
import { articles as allArticles, ArticleData } from "@/lib/articles-data"
import Link from "next/link"

export default function ResearchPage() {
  // Helper to format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Sort articles by publish date (newest first)
  const sortedArticles = [...allArticles].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )

  // Get all articles except the featured one
  const otherArticles = sortedArticles.slice(1)

  const ArticleCard = ({ article }: { article: ArticleData }) => (
    <Card className="mb-6 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
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
        
        <CardTitle className="text-xl mb-3 line-clamp-2">
          <Link href={`/research/${article.id}`} className="hover:text-purple-600 transition-colors">
            {article.title}
          </Link>
        </CardTitle>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium">{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
        </div>
        
        {article.authorRole && (
          <p className="text-sm text-purple-600 mb-4">{article.authorRole}</p>
        )}
        
        <Link href={`/research/${article.id}`}>
          <Button>Read Article</Button>
        </Link>
      </div>
    </Card>
  )

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center relative min-h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/banners/research_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Research Articles
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Explore cutting-edge research and insights from our talented club members
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <BookOpen className="h-5 w-5" />
              <span>{allArticles.length} Articles Published</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {sortedArticles.length > 0 && (
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Badge className="mb-4">Featured Article</Badge>
              <h2 className="text-3xl font-bold mb-6">Latest Research</h2>
            </div>
            <ArticleCard article={sortedArticles[0]} />
          </div>
        </section>
      )}

      {/* All Other Articles */}
      {otherArticles.length > 0 && (
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              More Articles
            </h2>
            <div className="space-y-6">
              {otherArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}


    </main>
  )
}