/* eslint-disable react/prop-types */
import React from "react"

export const ConceptsIndexItem = ({ title, summary, url }) => (
	<div class="my-2">
		<div>
			<a href={url}>{title}</a>
		</div>
		<div className="text-base text-gray-900">{summary}</div>
	</div>
)
