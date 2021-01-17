/* eslint-disable react/prop-types */
import React from "react"

export const BlogIndexItem = ({ title, date, summary, url, tags }) => (
	<div className={`my-2 blog-index-item ${tags}`}>
		<div>
			<a href={url}>{title}</a>
		</div>
		<div className="text-xs text-gray-800 mt-0.5">{date}</div>
		<div className="mt-1 text-base text-gray-900">{summary}</div>
	</div>
)

export const BlogIndexItems = () => (
	<>
		<BlogIndexItem
			title="Setting up a new project"
			date="17th January 2021"
			summary="Walking through the setup of a new home project."
			url="/blog/20210117-setting-up-a-new-project/"
			tags="new-system"
		/>
		<BlogIndexItem
			title="Finally..."
			date="15th January 2021"
			summary="I've built a blog!"
			url="/blog/20210115-finally/"
			tags=""
		/>
	</>
)
