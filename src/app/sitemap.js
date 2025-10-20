// app/sitemap.js
const baseUrl = 'https://realnet-web.co.za';

export default async function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/popia-act`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages = [
    {
      url: `${baseUrl}/solutions/web-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/mobile-app-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/software-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/email-and-hosting`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Quote request pages
  const quotePages = [
    {
      url: `${baseUrl}/solutions/web-development/starter-website-quote-request`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/web-development/e-commerce-quote-request`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/web-development/custom-website-quote-request`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/updates/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Fetch blog posts for dynamic sitemap entries
  let blogPosts = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/posts`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.posts) {
        blogPosts = data.posts.map(post => ({
          url: `${baseUrl}/updates/blogs/${post.slug}`,
          lastModified: new Date(post.updated_at || post.created_at || new Date()),
          changeFrequency: 'monthly',
          priority: 0.6,
        }));
      }
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return [
    ...staticPages,
    ...servicePages,
    ...quotePages,
    ...blogPages,
    ...blogPosts,
  ];
}