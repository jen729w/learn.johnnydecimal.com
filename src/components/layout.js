/**
 * Layout: wraps the entire site.
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import TOC from "./toc"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		// This div wraps the entire page
		<div className="max-w-5xl px-4 mx-auto leading-relaxed text-offblack sm:px-8 font-jdbody">
			{/* TODO: Pass better metadata to <Header>, e.g. page description. */}
			<Header siteTitle={data.site.siteMetadata.title} />
			{/**
			 * The main flexbox for nav + content:
			 * - Mobile-first: flex-col-reverse, content at top, TOC below
			 * - sm+:          flex-row, TOC on left, content to the right
			 */}
			<div className="flex flex-col-reverse sm:flex-row">
				<div className="sm:w-1/4">
					<TOC />
				</div>
				<main className="flex-grow mb-8 sm:w-3/4">{children}</main>
			</div>
			<footer className="bg-green-100">
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
