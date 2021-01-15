const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	const specMdxTemplate = require.resolve(`./src/templates/specMdxTemplate.js`)

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

	// Handle errors
	if (mdxResult.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	mdxResult.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: specMdxTemplate,
			context: { id: node.id, slug: node.frontmatter.slug },
		})
	})
}
