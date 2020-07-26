const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/jdSpecTemplate.js`)
  const specMdxTemplate = require.resolve(`./src/templates/specMdxTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  const mdxResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  mdxResult.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: specMdxTemplate,
      context: { id: node.id, slug: node.frontmatter.slug },
    })
  })
}

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
// }
