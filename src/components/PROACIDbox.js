import React from "react"
import PropTypes from "prop-types"

/* What do the margins and indents mean?
 *
 * marginLeft: how many characters in the hanging indent will start
 * textIndent: how many characters *to the left of that* will the number start
 *  */

const Basebox = ({ children }) => (
	<div className="mb-4 text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
		<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
			J•D
		</div>
		<div className="p-2 sm:px-4">{children}</div>
	</div>
)

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

	// return (
	// 	<div className="text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
	// 		<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
	// 			J•D
	// 		</div>
	// 		<div className="p-2">{childrenWithProps}</div>
	// 	</div>
	// )
	return <Basebox>{childrenWithProps}</Basebox>
}

export const ACIDbox = ({ children, classes }) => {
	const AREA_MARGINLEFT = "6ch"
	const AREA_TEXTINDENT = "-6ch"

	const CATEGORY_MARGINLEFT = "6ch"
	const CATEGORY_TEXTINDENT = "-3ch"

	const ID_MARGINLEFT = "12ch"
	const ID_TEXTINDENT = "-6ch"

	const MARGINSINDENTS = {
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

	// return (
	// 	<div className="text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
	// 		<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
	// 			J•D
	// 		</div>
	// 		<div className="p-2">{childrenWithProps}</div>
	// 	</div>
	// )
	return <Basebox>{childrenWithProps}</Basebox>
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

export const Category = ({ children, classes, MARGINSINDENTS }) => {
	const { CATEGORY_MARGINLEFT, CATEGORY_TEXTINDENT } = MARGINSINDENTS
	if (
		typeof CATEGORY_MARGINLEFT === "undefined" ||
		typeof CATEGORY_TEXTINDENT === "undefined"
	) {
		throw new Error("The Category component was not passed the relevant props.")
	}

	return (
		<div
			className={`${classes}`}
			style={{
				marginLeft: CATEGORY_MARGINLEFT,
				textIndent: CATEGORY_TEXTINDENT,
			}}
		>
			{children}
		</div>
	)
}

export const ID = ({ children, classes, MARGINSINDENTS }) => {
	const { ID_MARGINLEFT, ID_TEXTINDENT } = MARGINSINDENTS
	if (
		typeof ID_MARGINLEFT === "undefined" ||
		typeof ID_TEXTINDENT === "undefined"
	) {
		throw new Error("The ID component was not passed the relevant props.")
	}

	return (
		<div
			className={`${classes}`}
			style={{ marginLeft: ID_MARGINLEFT, textIndent: ID_TEXTINDENT }}
		>
			{children}
		</div>
	)
}

/* Hmm we shouldn't need this if our margins are all correct? */
export const BlankRow = () => <div>&nbsp;</div>

PROACIDbox.propTypes = {
	children: PropTypes.array,
	classes: PropTypes.string,
}
ACIDbox.propTypes = {
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
	MARGINSINDENTS: PropTypes.object,
}
ID.propTypes = {
	children: PropTypes.string,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.object,
}
