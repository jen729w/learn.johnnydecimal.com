import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import SEO from "../components/SEO"
import {
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
	Comment,
} from "../components/PROACIDbox"
import { ConceptsIndexItem } from "../components/ConceptsIndex"
import { BlogIndexItem } from "../components/BlogIndex"
import { Image } from "../components/Image"
import { Footnote } from "../components/Footnote"

// Provide common components here
const shortcodes = {
	Link,
	Navigation,
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
	Comment,
	ConceptsIndexItem,
	BlogIndexItem,
	Image,
	Footnote,
}

export default function PageTemplate({ data: { mdx } }) {
	if (mdx.frontmatter.slug.slice(0, 5) === "/blog") {
		return (
			<Layout type="blog">
				<MDXProvider components={shortcodes}>
					<SEO title={mdx.frontmatter.title} />
					<div className="post blog-post">
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</div>
				</MDXProvider>
			</Layout>
		)
	} else {
		return (
			<Layout type="spec">
				<MDXProvider components={shortcodes}>
					<SEO title={mdx.frontmatter.title} />
					<div className="post spec-post">
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</div>
				</MDXProvider>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query specMdxQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				slug
			}
		}
	}
`
