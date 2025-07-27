// Centralized research articles data
export interface ArticleData {
  id: string
  title: string
  author: string
  authorRole?: string
  publishDate: string // ISO format for easier parsing
  readTime: string
  excerpt: string
  tags: string[]
  featuredImage?: string
  content?: string
  abstract?: string
}

export const articles: ArticleData[] = [
  // Your real research articles will be added here
]