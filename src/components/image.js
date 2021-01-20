/* eslint-disable react/prop-types */
import React from "react"

export const Image = ({ src, alt, caption = null }) => (
	<div className="max-w-md p-2 mx-auto my-4 border border-gray-500 rounded-sm shadow-md">
		<img src={src} alt={alt} />
		{caption ? (
			<div className="mt-2 text-xs italic text-center text-gray-600">
				{caption}
			</div>
		) : null}
	</div>
)
