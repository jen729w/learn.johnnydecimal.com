/* eslint-disable react/prop-types */
import React from "react"

// const JD = ({ children }) => <span className="jd-inline">{children}</span>

const JD = ({ children, yellow = false }) => {
	let colour = "blue"
	if (yellow) {
		colour = "yellow"
	}
	return (
		<span
			// className={`px-1 whitespace-pre break-words border border-${colour}-700 rounded-sm bg-${colour}-50 font-jdmono`}
			// https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
			className={
				"px-1 whitespace-pre break-words border rounded-sm font-jdmono " +
				(colour === "blue"
					? "border-blue-700 bg-blue-50"
					: "border-yellow-700 bg-yellow-50")
			}
			// className={`bg-pink-800 ` + `px-8` + (colour === "blue" ? " py-8" : null)}
		>
			{children}
		</span>
	)
}

export default JD
