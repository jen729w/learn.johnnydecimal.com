/**
 * Layout: wraps the entire site.
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import TOC from "./toc"

const Layout = ({ children, type = "spec" }) => {
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
			 * The main flexbox for nav + content. Moved the main content above to
			 * preserve proper movement of focus on tab.
			 * - Mobile-first: flex-col, content at top, TOC below
			 * - sm+:          flex-row-reverse, TOC on left, content to the right
			 */}
			<div className="flex flex-col sm:flex-row-reverse">
				<main className="flex-grow mb-8 sm:w-3/4">{children}</main>
				{/* Needs pixel-perfect margin to line up the header lines */}
				<div
					className="mb-8 sm:w-1/4 print:hidden"
					style={{ marginTop: "0.5rem" }}
				>
					{type === "spec" ? <TOC /> : <div>Blog!</div>}
				</div>
			</div>
			{/*
			<footer className="pt-2 mt-6 text-sm text-gray-400 border-t-2 border-gray-400">
				&copy; {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
			*/}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
}

export default Layout
