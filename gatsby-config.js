module.exports = {
	siteMetadata: {
		title: `Johnny•Decimal`,
		description: `A system to organise projects.`,
		author: `@johnnydecimal`,
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
		// {
		// 	resolve: `gatsby-transformer-remark`,
		// 	options: {
		// 		plugins: [
		// 			{
		// 				resolve: "gatsby-remark-smartypants",
		// 				options: {
		// 					backticks: false,
		// 					dashes: "oldschool",
		// 				},
		// 			},
		// 		],
		// 	},
		// },
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
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
