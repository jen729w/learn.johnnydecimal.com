import React from "react"
import { Link } from "gatsby"

const JDNavLink = ({ children, to }) => (
	<Link
		to={to}
		activeClassName="font-semibold sm:border-r-2 sm:border-offblack rounded-none"
		className="block px-2 py-1 ml-2"
		style={{ marginRight: "-2px" }}
	>
		{children}
	</Link>
)

const TOC = () => (
	<nav
		className="border border-gray-400 rounded-md shadow-md sm:mr-6 tableofcontents sm:shadow-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r-2 sm:rounded-none sm:text-base active:outline-none focus:outline-none"
		tabIndex="100"
	>
		{/* Mobile-only: CONTENTS label at top of box */}
		<div className="flex justify-center sm:hidden">
			<h1 className="px-4 -mt-4 uppercase bg-offwhite">CONTENTS</h1>
		</div>
		{/* Wrap all links */}
		<div className="">
			<JDNavLink to="/">Home</JDNavLink>
			<hr className="mx-2 my-1 border-r-2 border-gray-400" />
			<JDNavLink to="/concepts/" activeClassName="font-semibold" className="">
				Concepts
			</JDNavLink>
			<JDNavLink to="/concepts/areas-categories/">
				Areas &amp; categories
			</JDNavLink>
			<JDNavLink to="/concepts/ids/">IDs</JDNavLink>
			<JDNavLink to="/concepts/saving-files/">Saving files</JDNavLink>
			<JDNavLink to="/concepts/keeping-notes/">Keeping notes</JDNavLink>
			<JDNavLink to="/concepts/tracking-your-numbers/">
				Tracking your numbers
			</JDNavLink>
			<JDNavLink to="/concepts/developing-your-own-system">
				Developing your own system
			</JDNavLink>
			<hr className="mx-2 my-1 border-r-2 border-gray-400" />
			<JDNavLink to="/concepts/managing-email/">Managing email</JDNavLink>
			<JDNavLink to="/concepts/what-about-00-09/">What about 00-09?</JDNavLink>
			<JDNavLink to="/concepts/working-at-the-terminal/">
				Working at the terminal
			</JDNavLink>
			<JDNavLink to="/concepts/exceptions-to-the-rules/">
				Exceptions to the rules
			</JDNavLink>
			<hr className="mx-2 my-1 border-r-2 border-gray-400" />
			<JDNavLink to="/contact/">Contact</JDNavLink>
			<JDNavLink to="/privacy/">Privacy</JDNavLink>
			<JDNavLink to="/licence/">Licence</JDNavLink>
		</div>
	</nav>
)

export default TOC
