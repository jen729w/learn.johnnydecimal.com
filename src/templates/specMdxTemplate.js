/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navigation from "../components/navigation"
import SEO from "../components/seo"
import JD from "../components/jdInline"
import {
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
} from "../components/PROACIDbox"
import { ConceptsIndexItem } from "../components/ConceptsIndex"

// Provide common components here
const shortcodes = {
	Link,
	Navigation,
	JD,
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
	ConceptsIndexItem,
}

export default function PageTemplate({ data: { mdx } }) {
	return (
		<Layout>
			<MDXProvider components={shortcodes}>
				<SEO title={mdx.frontmatter.title} />
				{/* <div className="spec-post-container"> */}
				<div className="spec-post">
					<MDXRenderer>{mdx.body}</MDXRenderer>
				</div>
				{/* </div> */}
			</MDXProvider>
		</Layout>
	)
}

export const pageQuery = graphql`
	query specMdxQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`
