import React from "react"
import PropTypes from "prop-types"

export const BlogIndexItem = ({ title, date, summary, slug, tags }) => {
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
			title="Johnny.Decimal now has a forum"
			slug="/blog/20210321-johnnydecimal-now-has-a-forum/"
			date="21st March 2021"
			summary="Johnny.Decimal now has a forum."
			tags="meta"
		/>
		<BlogIndexItem
			title="The first J.D system"
			slug="/blog/20210215-the-first-jd-system/"
			date="15th February 2021"
			summary="A description of the very first J.D system, and how it came to be."
			tags="new-system"
		/>
		<BlogIndexItem
			title="‘Home > Insurance’, or ‘Insurance > Home’?"
			slug="/blog/20210131-home-insurance-or-insurance-home/"
			date="31st January 2021"
			summary="Should I file it under 'Home > Insurance', or 'Insurance > Home'?"
			tags="faq"
		/>
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
			slug="/blog/20210120-2021-jd-update/"
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

BlogIndexItem.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	tags: PropTypes.string,
}
