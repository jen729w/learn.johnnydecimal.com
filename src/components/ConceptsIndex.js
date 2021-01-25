import React from "react"
import PropTypes from "prop-types"

export const ConceptsIndexItem = ({ title, summary, slug }) => (
	<div className="my-2">
		<div>
			<a href={slug}>{title}</a>
		</div>
		<div className="text-base text-gray-900">{summary}</div>
	</div>
)

ConceptsIndexItem.propTypes = {
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
}
