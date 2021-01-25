// Fixes the build warnings and the lack of styles in the RSS feed.
// https://github.com/gatsbyjs/gatsby/issues/20543
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import Navigation from "./components/Navigation"
import {
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
	Comment,
} from "./components/PROACIDbox"
import { ConceptsIndexItem } from "./components/ConceptsIndex"
import { BlogIndexItem } from "./components/BlogIndex"
import { Image } from "./components/Image"
import { Footnote } from "./components/Footnote"

const components = {
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

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
)
