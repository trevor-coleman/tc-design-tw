import frontmatter, { FrontMatterResult } from 'front-matter'
import fs from 'fs'
import marked from 'marked'

const regex = /^(.+?)(\.[^.]*$|$)/

const posts = fs.readdirSync('src/content/projects')
                .filter(elem => elem.endsWith('.md') || elem.endsWith('.svx'))
                .map(postFileName => {
                  const postContent = fs.readFileSync(`src/content/projects/${postFileName}`,
                    {
                      encoding: 'utf-8'
                    })

                  const postFrontMatter:FrontMatterResult<any> = frontmatter(postContent)

                  const html = marked(postFrontMatter.body)

                  return {
                    ...postFrontMatter.attributes,
                    slug: postFileName.match(regex)[1],
                    html: marked(html)
                  }
                })

const modifiedPosts = posts
  .filter((post) => !post.hidden)
  .reduce((prev, curr) => {
    return {
      ...prev,
      [curr.slug]: curr
    }
  }, {})

export default modifiedPosts

