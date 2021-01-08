import React from "react"
import PropTypes from "prop-types"

export const PROACIDbox = ({ children, classes }) => {
	const PROJECT_MARGINLEFT = "4ch"
	const PROJECT_TEXTINDENT = "-4ch"

	const AREA_MARGINLEFT = "10ch"
	const AREA_TEXTINDENT = "-6ch"

	const CATEGORY_MARGINLEFT = "10ch"
	const CATEGORY_TEXTINDENT = "-3ch"

	const ID_MARGINLEFT = "13ch"
	const ID_TEXTINDENT = "-6ch"

	const MARGINSINDENTS = {
		PROJECT_MARGINLEFT,
		PROJECT_TEXTINDENT,
		AREA_MARGINLEFT,
		AREA_TEXTINDENT,
		CATEGORY_MARGINLEFT,
		CATEGORY_TEXTINDENT,
		ID_MARGINLEFT,
		ID_TEXTINDENT,
	}

	const childrenWithProps = React.Children.map(children, child =>
		React.cloneElement(child, { MARGINSINDENTS: MARGINSINDENTS })
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

export const Project = ({ children, classes, MARGINSINDENTS }) => {
	const { PROJECT_MARGINLEFT, PROJECT_TEXTINDENT } = MARGINSINDENTS
	if (
		typeof PROJECT_MARGINLEFT === "undefined" ||
		typeof PROJECT_TEXTINDENT === "undefined"
	) {
		throw new Error("The Project component was not passed the relevant props.")
	}

	return (
		<div
			className={`font-bold underline ${classes}`}
			style={{ marginLeft: PROJECT_MARGINLEFT, textIndent: PROJECT_TEXTINDENT }}
		>
			{children}
		</div>
	)
}

export const Area = ({ children, classes, MARGINSINDENTS }) => {
	const { AREA_MARGINLEFT, AREA_TEXTINDENT } = MARGINSINDENTS
	if (
		typeof AREA_MARGINLEFT === "undefined" ||
		typeof AREA_TEXTINDENT === "undefined"
	) {
		throw new Error("The Area component was not passed the relevant props.")
	}
	return (
		<div
			className={`font-bold ${classes}`}
			style={{ marginLeft: AREA_MARGINLEFT, textIndent: AREA_TEXTINDENT }}
		>
			{children}
		</div>
	)
}

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
	MARGINSINDENTS: PropTypes.object,
}
Area.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.object,
}
Category.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
ID.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
}
