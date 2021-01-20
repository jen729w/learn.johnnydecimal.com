/* eslint-disable react/prop-types */
import React from "react"

export const BlogIndexItem = ({ title, date, summary, slug, tags }) => {
	/*
	let tagsHtml = ""
	tags.split(" ").forEach(tag => {
		tagsHtml += ` <a href="/blog/tags/${tag}/>#${tag}</a>`
	})
	*/

	return (
		<div className={`my-2 blog-index-item ${tags}`}>
			<div>
				<a href={slug}>{title}</a>
			</div>
			<div className="text-xs text-gray-700 mt-0.5">{date}</div>
			<div className="mt-1 text-base text-gray-900">{summary}</div>
		</div>
	)
}

export const BlogIndexItems = () => (
	<>
		<BlogIndexItem
			title="Ideas for posts"
			date="20th January 2021"
			summary="My public notepad for things-I-need-to-write."
			slug="/blog/20210120-ideas-for-future-posts/"
			tags="meta"
		/>
		<BlogIndexItem
			title="2021 J.D update"
			date="20th January 2021"
			summary="What's going on with J.D in 2021."
			slug="/blog/20210119-2021-jd-update/"
			tags="meta"
		/>
		<BlogIndexItem
			title="Setting up a new project"
			date="17th January 2021"
			summary="Walking through the setup of a new home project."
			slug="/blog/20210117-setting-up-a-new-project/"
			tags="new-system"
		/>
		<BlogIndexItem
			title="Finally..."
			date="15th January 2021"
			summary="I've built a blog!"
			slug="/blog/20210115-finally/"
			tags="meta"
		/>
	</>
)
