import { generateSEO, generateStructuredData, parseTags } from '@/lib/SEO';
import BlogPosts from "@/components/pages/company/blog/BlogPosts";

export const metadata = generateSEO({
  title: 'Web Development Blog - Latest Trends & Insights',
  description: 'Stay updated with the latest web development trends, mobile app insights, and digital marketing strategies from RealNet Web Solutions.',
  keywords: 'web development blog, technology insights, mobile app trends, digital marketing tips, Johannesburg tech news',
  path: '/updates/blogs',
  type: 'website',
});

export default function BlogsPage() {
  return <BlogPosts />;
}