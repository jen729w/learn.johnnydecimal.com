import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const xHeader = ({ siteTitle }) => (
	// The whole header
	// Style needs to be pixel-perfect here otherwise the red and gray don't overlap
	<header className="mt-2 mb-4 text-base text-gray-800 border-b-2 border-gray-400 sm:mb-6">
		<span
			className="inline px-2 mb-1 mr-8 text-base font-semibold text-blue-900 border-b-2 border-blue-800 sm:px-4"
			style={{ paddingBottom: "2.5px" }}
		>
			<Link to="/">Johnny&bull;Decimal</Link>
		</span>
	</header>
)

const isMainSite = ({ location }) => {
	if (
		location.pathname === "/" ||
		location.pathname.slice(0, 9) === "/concepts"
	) {
		return { className: "border-b-2 border-blue-800 px-3 text-blue-900" }
	}
	return {}
}

const Header = () => (
	<header
		className="grid grid-flow-row mt-2 mb-4 text-base sm:ml-4 sm:mb-6"
		style={{
			gridTemplateColumns: "auto auto 1fr",
			justifyContent: "start",
		}}
	>
		<Link
			to="/"
			className="px-3 text-blue-900 border-b-2 border-gray-300"
			getProps={isMainSite}
		>
			Johnny&bull;Decimal
		</Link>
		<Link
			activeClassName="border-b-2 border-yellow-700 text-yellow-700"
			className="px-3 text-yellow-700 border-b-2 border-gray-300"
			partiallyActive={true}
			to="/blog"
		>
			Blog
		</Link>
		<div className="border-b-2 border-gray-300"></div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
