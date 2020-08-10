import React from "react"
import { Link } from "gatsby"

const JDNavLink = ({ children, to }) => (
	<Link
		to={to}
		activeClassName="font-semibold"
		className="block px-2 py-1 mx-2 rounded"
	>
		{children}
	</Link>
)

const TOC = () => (
	<nav
		className="border border-gray-400 rounded-md shadow-md tableofcontents sm:shadow-none sm:border-0"
		tabIndex="100"
	>
		{/* Mobile-only: CONTENTS label at top of box */}
		<div className="flex justify-center sm:hidden">
			<h1 className="px-4 -mt-4 uppercase bg-offwhite">CONTENTS</h1>
		</div>
		{/* Wrap all links */}
		<div className="">
			<JDNavLink to="/">Home</JDNavLink>
			<hr className="m-2" />
			<JDNavLink to="/concepts" activeClassName="font-semibold" className="">
				Concepts
			</JDNavLink>
			<JDNavLink to="/concepts/areas-categories">
				Areas &amp; categories
			</JDNavLink>
			<JDNavLink to="/categories/ids">IDs</JDNavLink>
			<hr className="mb-1" />
			<a href="/404" className="block mb-1">
				Contact
			</a>
			<a href="/404" className="block ">
				Privacy
			</a>
		</div>
	</nav>
)

export default TOC
