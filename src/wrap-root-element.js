// Fixes the build warnings and the lack of styles in the RSS feed.
// https://github.com/gatsbyjs/gatsby/issues/20543
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import Navigation from "./components/navigation"
import JD from "./components/jdInline"
import {
	PROACIDbox,
	ACIDbox,
	Project,
	Area,
	Category,
	ID,
	BlankRow,
	Comment,
} from "./components/proACIDbox"
import { ConceptsIndexItem } from "./components/conceptsIndex"
import { BlogIndexItem } from "./components/blogIndex"
import { Image } from "./components/image"
import { Footnote } from "./components/footnote"

const components = {
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
	Comment,
	ConceptsIndexItem,
	BlogIndexItem,
	Image,
	Footnote,
}

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
)
