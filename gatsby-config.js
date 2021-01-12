module.exports = {
	siteMetadata: {
		title: `Johnny•Decimal`,
		description: `A system to organise projects.`,
		author: `@johnnydecimal`,
		siteUrl: `https://johnnydecimal.com`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `spec-mdx`,
				path: `${__dirname}/src/spec-mdx`,
			},
		},
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: "gatsby-remark-smartypants",
						options: {
							backticks: false,
							dashes: "oldschool",
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Johnny•Decimal`,
				short_name: `J•D`,
				start_url: `/`,
				background_color: `#fbfbfb`,
				theme_color: `#fbfbfb`,
				display: `minimal-ui`,
				icon: `src/images/favicon-1024.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-postcss`,
		`gatsby-plugin-catch-links`, // Catches [markdown](https://yeah.com) -> <Link>
		{
			// https://bloggingfordevs.com/gatsby-mdx-rss-feed/
			resolve: `gatsby-plugin-feed-mdx`,
			options: {
				query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.frontmatter.summary,
									date: edge.node.frontmatter.date,
									url:
										site.siteMetadata.siteUrl +
										// "/" +
										edge.node.frontmatter.slug,
									// guid:
									// 	site.siteMetadata.siteUrl +
									// 	// "/" +
									// 	edge.node.frontmatter.slug,
									custom_elements: [
										{
											"content:encoded": edge.node.html,
										},
									],
								})
							})
						},
						query: `
							{
								allMdx(
									sort: { order: DESC, fields: [frontmatter___date] },
								) {
									edges {
										node {
											frontmatter {
												title
												summary
												date
												slug
											}
											html
										}
									}
								}
							}
						`,
						output: "/rss.xml",
						title: "Johnny.Decimal (blog)",
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						// match: "^/blog/",
					},
				],
			},
		},
	],
}
