import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navigation = ({ backURL, backTitle, nextURL, nextTitle }) => (
	<nav className="flex justify-between pt-2 mt-8 border-t border-gray-400">
		{backURL ? (
			<div className="">
				<Link to={backURL} className="text-md">
					← {backTitle}
				</Link>
			</div>
		) : (
			<div />
		)}
		{nextURL ? (
			<div className="text-right">
				<Link to={nextURL} className="text-md">
					{nextTitle} →
				</Link>
			</div>
		) : (
			<div />
		)}
	</nav>
)

Navigation.propTypes = {
	backURL: PropTypes.string,
	backTitle: PropTypes.string,
	nextURL: PropTypes.string,
	nextTitle: PropTypes.string,
}

export default Navigation
