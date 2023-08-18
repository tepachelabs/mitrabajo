import { MetadataRoute } from 'next'

import { getAllPosts } from '~/lib/api'

const staticPages = [
  '',
  'ley-federal-del-trabajo',
  'articulos',
]

export default function sitemap (): MetadataRoute.Sitemap {
  const pages = getAllPosts()

  return [
    ...staticPages.map((slug) => ({
      url: `https://eslegalmitrabajo.com/${ slug }`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'monthly' as 'monthly',
    })),
    ...pages.map(({ slug }) => ({
      url: `https://eslegalmitrabajo.com/articulos/${ slug }`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: 'monthly' as 'monthly',
    })),
  ]
}
