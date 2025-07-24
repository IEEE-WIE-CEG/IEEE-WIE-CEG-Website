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

import aiInHealthcare from "@/lib/articles-data/ai-in-healthcare"
import womenInTech from "@/lib/articles-data/women-in-tech-leadership"

export const articles: ArticleData[] = [
  {
    id: aiInHealthcare.id,
    title: aiInHealthcare.title,
    author: aiInHealthcare.author,
    authorRole: aiInHealthcare.authorRole,
    publishDate: aiInHealthcare.publishDate,
    readTime: aiInHealthcare.readTime,
    excerpt: aiInHealthcare.excerpt,
    tags: aiInHealthcare.tags,
    featuredImage: aiInHealthcare.featuredImage,
    abstract: aiInHealthcare.abstract,
  },
  {
    id: womenInTech.id,
    title: womenInTech.title,
    author: womenInTech.author,
    authorRole: womenInTech.authorRole,
    publishDate: womenInTech.publishDate,
    readTime: womenInTech.readTime,
    excerpt: womenInTech.excerpt,
    tags: womenInTech.tags,
    featuredImage: womenInTech.featuredImage,
    abstract: womenInTech.abstract,
  },
  // Add more articles here as you create more files
]

export { aiInHealthcare, womenInTech }