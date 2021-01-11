import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
	// The whole header
	// Style needs to be pixel-perfect here otherwise the red and gray don't overlap
	<header className="mt-2 mb-4 text-base text-gray-800 border-b-2 border-gray-400 sm:mb-6">
		<span
			className="inline px-2 mb-1 mr-8 text-base font-semibold text-blue-900 border-b-2 border-blue-800 sm:px-4"
			style={{ paddingBottom: "3px" }}
		>
			<Link to="/">Johnny&bull;Decimal</Link>
		</span>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
