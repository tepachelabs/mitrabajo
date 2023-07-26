import { MetadataRoute } from 'next'

import { getAllPosts } from '~/lib/api'

export default function sitemap (): MetadataRoute.Sitemap {
  const pages = getAllPosts()

  return pages.map(({ slug }) => ({
    url: `https://eslegalmitrabajo.com/articulos/${ slug }`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'monthly',
  }))
}
