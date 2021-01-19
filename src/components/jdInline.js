/* eslint-disable react/prop-types */
import React from "react"

const JD = ({ children, yellow = false }) => {
	let colour = "blue"
	if (yellow) {
		colour = "yellow"
	}
	return (
		<span
			className={`px-1 whitespace-pre break-words border border-${colour}-700 rounded-sm bg-${colour}-50 font-jdmono`}
		>
			{children}
		</span>
	)
}

export default JD
