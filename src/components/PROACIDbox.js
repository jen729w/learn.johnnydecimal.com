import React from "react"
import PropTypes from "prop-types"

export const PROACIDbox = ({ children, classes }) => (
	<div className="text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
		<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
			J•D
		</div>
		<div className="p-2">{children}</div>
	</div>
)

export const Project = ({ children, classes }) => (
	<div
		className={`font-bold underline ${classes}`}
		style={{ marginLeft: "4ch", textIndent: "-4ch" }}
	>
		{children}
	</div>
)

export const Area = ({ children, classes }) => (
	<div
		className={`font-bold ${classes}`}
		style={{ marginLeft: "10ch", textIndent: "-6ch" }}
	>
		{children}
	</div>
)

export const Category = ({ children, classes }) => (
	<div
		className={`${classes}`}
		style={{ marginLeft: "10ch", textIndent: "-3ch" }}
	>
		{children}
	</div>
)

export const ID = ({ children, classes }) => (
	<div
		className={`${classes}`}
		style={{ marginLeft: "13ch", textIndent: "-6ch" }}
	>
		{children}
	</div>
)

PROACIDbox.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.string,
}
Project.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.string,
}
Area.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.string,
}
Category.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.string,
}
ID.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.string,
}
