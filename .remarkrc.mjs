import remarkFrontmatter from 'remark-frontmatter'
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema'

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    [
      remarkLintFrontmatterSchema,
      {
        schemas: {
          './schemas/post.yaml': ['./content/hello-world.md', './_posts/*.md']
        }
      }
    ]
  ]
}

export default remarkConfig
