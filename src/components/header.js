import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
	// The whole header
	<header className="pb-1 mt-4 mb-4 font-sans text-base text-gray-800 border-b-2 border-gray-400 sm:mb-6 sm:text-lg">
		<span className="px-2 pb-2 mr-8 font-semibold text-red-700 border-b-2 border-red-700 sm:px-4">
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
