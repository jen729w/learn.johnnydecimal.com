import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const JDNavLink = ({ children, to }) => (
	<Link
		to={to}
		activeClassName="font-semibold sm:border-r-2 sm:border-offblack rounded-none"
		className="block px-2 py-1 ml-2 text-center sm:text-left"
		style={{ marginRight: "-2px" }}
	>
		{children}
	</Link>
)

JDNavLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
}

const BlogTOC = () => (
	<nav className="border border-gray-400 rounded-md shadow-md sm:mr-6 tableofcontents sm:shadow-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r-2 sm:rounded-none sm:text-base active:outline-none focus:outline-none">
		<JDNavLink to="/blog/index/">Blog post index</JDNavLink>
		<hr className="mx-2 my-1 border-r-2 border-gray-400" />
		<JDNavLink to="/blog/tags/meta/">#meta</JDNavLink>
		<JDNavLink to="/blog/tags/new-system/">#new-system</JDNavLink>
		<hr className="mx-2 my-1 border-r-2 border-gray-400" />
		<JDNavLink to="/contact/">Contact</JDNavLink>
		<JDNavLink to="/privacy/">Privacy</JDNavLink>
		<JDNavLink to="/licence/">Licence</JDNavLink>
		<hr className="mx-2 my-1 border-r-2 border-gray-400" />
		<div className="px-2 py-1 ml-2 text-xs text-center text-gray-600 sm:text-left">
			<a href="/rss.xml">RSS feed</a>
		</div>
		<p className="px-2 py-1 ml-2 text-xs text-center text-gray-600 sm:text-left">
			&copy;2021 John Noble 🇦🇺
		</p>
	</nav>
)

export default BlogTOC
