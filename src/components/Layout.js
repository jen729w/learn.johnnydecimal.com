import React from "react"
import PropTypes from "prop-types"

import BlogTOC from "./BlogTOC"
import Header from "./Header"
import TOC from "./TOC"

const Layout = ({ children, type = "spec" }) => {
	return (
		// This div wraps the entire page
		<div className="max-w-5xl px-4 mx-auto leading-relaxed text-offblack sm:px-8 font-jdbody">
			{/* TODO: Pass better metadata to <Header>, e.g. page description. */}
			<Header />
			{/**
			 * The main flexbox for nav + content. Moved the main content above to
			 * preserve proper movement of focus on tab.
			 * - Mobile-first: flex-col, content at top, TOC below
			 * - sm+:          flex-row-reverse, TOC on left, content to the right
			 */}
			<div className="flex flex-col sm:flex-row-reverse">
				<main className="flex-grow mb-8 sm:w-3/4">{children}</main>
				<div className="mb-8 sm:w-1/4 print:hidden">
					{type === "spec" ? <TOC /> : <BlogTOC />}
				</div>
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
}

export default Layout
