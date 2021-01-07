/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Navigation from "../components/Navigation"
import JD from "../components/JDInline"

const shortcodes = { JD, Link, Navigation } // Provide common components here

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
