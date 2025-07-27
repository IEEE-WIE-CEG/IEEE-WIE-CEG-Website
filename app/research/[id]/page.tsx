import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { articles, arvrArticle, llmsBiasArticle } from "@/lib/articles-data"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// Map of article IDs to their full data
const articleMap = {
  "beyond-screens-into-reality": arvrArticle,
  "bias-toward-simplicity-llms": llmsBiasArticle,
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articleMap[params.id as keyof typeof articleMap]

  if (!article) {
    notFound()
  }

  // Helper to format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Get related articles (excluding current)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 2)

  return (
    <main className="flex-1">
      {/* Back Navigation */}
      <section className="w-full py-6 border-b">
        <div className="container px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/research" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Research Articles
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="space-y-6">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {article.authorRole && (
              <p className="text-purple-600 font-medium">{article.authorRole}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featuredImage && (
        <section className="w-full">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Abstract */}
      {article.abstract && (
        <section className="w-full py-8 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Abstract</h2>
            <p className="text-muted-foreground leading-relaxed">
              {article.abstract}
            </p>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                hr: () => <hr className="my-8 border-gray-300 dark:border-gray-600" />,
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="bg-white dark:bg-gray-900">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold bg-gray-100 dark:bg-gray-700">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    {children}
                  </td>
                ),
              }}
            >
              {article.content?.trim() || ''}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="w-full py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{article.author}</h3>
              {article.authorRole && (
                <p className="text-purple-600 mb-2">{article.authorRole}</p>
              )}
              <p className="text-muted-foreground">
                Passionate about technology and research, contributing valuable insights to the IEEE WIE-CEG community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      {relatedArticles.length > 0 && (
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">More Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {relatedArticle.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    <Link href={`/research/${relatedArticle.id}`} className="hover:text-purple-600 transition-colors">
                      {relatedArticle.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{relatedArticle.author}</span>
                    <span>•</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="w-full py-12 md:py-16 bg-purple-50 dark:bg-purple-900/20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More Research</h2>
          <p className="text-muted-foreground mb-6">
            Discover more cutting-edge research and insights from our talented club members.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/research">View All Articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Join Our Research Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}