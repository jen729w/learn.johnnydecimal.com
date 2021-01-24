/* eslint-disable react/prop-types */
import React from "react"

/**
 * Footnote
 *
 * @param {Boolean} indent
 *
 * Generate a bordered 'footnote' style div.
 *
 * With no options, renders equal borders.
 *
 * With `indent` supplied, renders an indent on the left. Supply your own
 * numeral as part of {children}.
 */
export const Footnote = ({ children, indent = false }) => {
	let marginLeft = "1rem" // ml-2 equivalent
	let textIndent = "0"
	if (indent) {
		marginLeft = "1.5rem"
		textIndent = "-0.8rem"
	}

	return (
		<div className="block py-2 my-6 mr-6 text-sm italic text-gray-800 border border-b-2 border-l-4 border-gray-800 rounded shadow-md sm:mr-20">
			<p className="pr-4 footnote-content" style={{ marginLeft, textIndent }}>
				{children}
			</p>
		</div>
	)
}
