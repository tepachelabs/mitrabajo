import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

const contentDirectory = join(process.cwd(), '_posts')
const fileExclusions = [
  'landing.md',
  'articulos.md',
  'ley-federal-del-trabajo.md',
  'test.md',
  'contribuir.md',
  'contacto-inicial.md',
]

function getPostSlugs () {
  const slugs = fs.readdirSync(contentDirectory)

  return slugs.filter((slug) => !fileExclusions.includes(slug))
}

type PostField = keyof Post

export function getPostBySlug (slug: string, fields: PostField[] = []) {
  const cleanSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory, `${ cleanSlug }.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  const post: Post = {
    slug: cleanSlug,
  }

  fields.forEach((field: PostField) => {
    if (field === 'content') {
      post.content = content
    }
    if (data[field]) {
      post[field] = data[field]
    }
  })

  return post
}

export function getAllPosts (fields: PostField[] = []) {
  const slugs = getPostSlugs()

  return slugs.map((slug) => getPostBySlug(slug, fields))
}
