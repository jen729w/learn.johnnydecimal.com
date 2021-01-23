import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isMainSite = ({ location }) => {
	// If we're on the home page or in /concepts, make the bottom border blue
	if (
		location.pathname === "/" ||
		location.pathname.slice(0, 9) === "/concepts"
	) {
		// Whatever you supply becomes the entire class, it's not additive
		return {
			className: "border-b-2 border-blue-800 px-3 text-blue-900 spec-header",
		}
	}
	// Otherwise just return nothing at all. Not `null`.
}

const Header = () => {
	return (
		<header
			className="grid grid-flow-row mt-2 mb-4 text-base font-medium sm:ml-4 sm:mb-6"
			style={{
				gridTemplateColumns: "auto auto 1fr",
				justifyContent: "start",
			}}
		>
			<Link
				to="/"
				className="px-3 text-blue-900 border-b-2 border-gray-400 spec-header"
				getProps={isMainSite}
				id="spec-header"
			>
				Johnny&bull;Decimal
			</Link>
			<Link
				activeClassName="border-b-2 border-yellow-700 text-yellow-700"
				className="px-3 text-yellow-700 border-b-2 border-gray-400 blog-header"
				id="blog-header"
				partiallyActive={true}
				to="/blog"
			>
				Blog
			</Link>
			<div className="px-3 border-b-2 border-gray-400"></div>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
