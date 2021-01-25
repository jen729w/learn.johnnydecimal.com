import React from "react"
import PropTypes from "prop-types"

const JD = ({ children, yellow = false }) => {
	let colour = "blue"
	if (yellow) {
		colour = "yellow"
	}
	return (
		<span
			// https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
			className={
				"px-1 whitespace-pre break-words border rounded-sm font-jdmono " +
				(colour === "blue"
					? "border-blue-700 bg-blue-50"
					: "border-yellow-700 bg-yellow-50")
			}
		>
			{children}
		</span>
	)
}

JD.propTypes = {
	children: PropTypes.node.isRequired,
	yellow: PropTypes.bool,
}

export default JD
