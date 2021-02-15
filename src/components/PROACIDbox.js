import React from "react"
import PropTypes from "prop-types"

/* What do the margins and indents mean?
 *
 * marginLeft: how many characters in the hanging indent will start
 * textIndent: how many characters *to the left of that* will the number start
 *
 */

/**
 * # `<Basebox>`
 *
 * This component supplies the base outer box - the main blue thing with the
 * tinted header across the top. It is used by the other components on this
 * page and is not exported.
 *
 * `{children}` is rendered in the main lower area.
 *
 * @param {Boolean} guide - If `true`, a guide (0123...) is printed at the top.
 *
 */
const Basebox = ({ children, guide = false }) => (
	<div className="mb-4 text-base bg-blue-900 rounded-md font-jdmono text-offwhite">
		<div className="py-1 pr-2 text-sm text-right text-white bg-blue-600 rounded-t-md">
			J•D
		</div>
		{guide ? (
			<div className="px-2 sm:px-4">
				123456789012345678901234567890123456789012345678901234567890
			</div>
		) : null}
		<div className="p-2 text-sm sm:px-4 sm:text-base">{children}</div>
	</div>
)
Basebox.propTypes = {
	children: PropTypes.node.isRequired,
	guide: PropTypes.bool,
}

/**
 * # `<PROACIDbox>`
 *
 * This component supplies a full PRO.AC.ID box within which you can add
 * Projects, Areas, etc.
 *
 * It differs from `<ACIDbox>` in the margins and indents it applies.
 *
 * @param {Boolean} guide - If `true`, a guide (0123...) is printed at the top.
 *                          This is passed through to `<Basebox>`.
 */
export const PROACIDbox = ({ children, guide }) => {
	const PROJECT_MARGINLEFT = "4ch"
	const PROJECT_TEXTINDENT = "-4ch"

	const AREA_MARGINLEFT = "10ch"
	const AREA_TEXTINDENT = "-6ch"

	const CATEGORY_MARGINLEFT = "10ch"
	const CATEGORY_TEXTINDENT = "-3ch"

	const ID_MARGINLEFT = "16ch"
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

	return <Basebox guide={guide}>{childrenWithProps}</Basebox>
}
PROACIDbox.propTypes = {
	children: PropTypes.node.isRequired,
	guide: PropTypes.bool,
}

/**
 * # `<ACIDbox>`
 *
 * This component supplies an AC.ID box within which you can add
 * Areas, Categories, etc.
 *
 * It differs from `<PROACIDbox>` in the margins and indents it applies.
 *
 * @param {Boolean} guide - If `true`, a guide (0123...) is printed at the top.
 *                          This is passed through to `<Basebox>`.
 */
export const ACIDbox = ({ children, guide }) => {
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

	return <Basebox guide={guide}>{childrenWithProps}</Basebox>
}
ACIDbox.propTypes = {
	children: PropTypes.node.isRequired,
	guide: PropTypes.bool,
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
Project.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.shape({
		PROJECT_MARGINLEFT: PropTypes.string.isRequired,
		PROJECT_TEXTINDENT: PropTypes.string.isRequired,
	}),
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
Area.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.shape({
		AREA_MARGINLEFT: PropTypes.string.isRequired,
		AREA_TEXTINDENT: PropTypes.string.isRequired,
	}),
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
Category.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.shape({
		CATEGORY_MARGINLEFT: PropTypes.string.isRequired,
		CATEGORY_TEXTINDENT: PropTypes.string.isRequired,
	}),
}

export const ID = ({ children, classes, MARGINSINDENTS }) => {
	const { ID_MARGINLEFT, ID_TEXTINDENT } = MARGINSINDENTS
	if (
		typeof ID_MARGINLEFT === "undefined" ||
		typeof ID_TEXTINDENT === "undefined"
	) {
		throw new Error("The ID component was not passed the relevant props.")
	}

	// If `children` is a single string, it's just an ID and we can render it.
	if (typeof children === "string") {
		return (
			<div
				className={`${classes}`}
				style={{ marginLeft: ID_MARGINLEFT, textIndent: ID_TEXTINDENT }}
			>
				<span className="px-1 font-medium bg-blue-700 rounded-sm">
					{children}
				</span>
			</div>
		)
	} else {
		// Otherwise it's an ID with a <Comment>, so render that differently
		return (
			<div
				className={`${classes}`}
				style={{ marginLeft: ID_MARGINLEFT, textIndent: ID_TEXTINDENT }}
			>
				<span className="px-1 font-medium bg-blue-700 rounded-sm">
					{/* To make composing these easier, trim the space here... */}
					{children[0].trim()}
					{/* ...and pop it back on here. */}
				</span>{" "}
				{children[1]}
			</div>
		)
	}
}
ID.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	MARGINSINDENTS: PropTypes.shape({
		ID_MARGINLEFT: PropTypes.string.isRequired,
		ID_TEXTINDENT: PropTypes.string.isRequired,
	}),
}

export const Comment = ({ children, classes, indent = 0 }) => (
	<span
		className={`text-gray-500 font-light ${classes}`}
		style={{
			display: "inline-block",
			textDecoration: "none",
			marginLeft: `${indent}ch`,
			textIndent: "0px",
		}}
	>
		{children}
	</span>
)
Comment.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.string,
	indent: PropTypes.number,
}

export const BlankRow = () => <div>&nbsp;</div>
