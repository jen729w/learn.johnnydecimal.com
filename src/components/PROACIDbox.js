import React from "react"
import PropTypes from "prop-types"

export const PROACIDbox = ({ children, classes }) => {
	const PROJECT_MARGINLEFT = "4ch"
	const PROJECT_TEXTINDENT = "-4ch"

	const childrenWithProps = React.Children.map(children, child =>
		React.cloneElement(child, {
			project_marginLeft: PROJECT_MARGINLEFT,
			project_textIndent: PROJECT_TEXTINDENT,
		})
	)

	return (
		<div className="text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
			<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
				J•D
			</div>
			<div className="p-2">{childrenWithProps}</div>
		</div>
	)
}

export const Project = ({ children, classes, ...rest }) => {
	const { project_marginLeft, project_textIndent } = rest
	if (
		typeof project_marginLeft === "undefined" ||
		typeof project_textIndent === "undefined"
	) {
		throw new Error("The Project component was not passed the relevant props.")
	}

	return (
		<div
			className={`font-bold underline ${classes}`}
			style={{ marginLeft: project_marginLeft, textIndent: project_textIndent }}
		>
			{children}
		</div>
	)
}

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
	children: PropTypes.array,
	classes: PropTypes.string,
}
Project.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
Area.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
Category.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
ID.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
