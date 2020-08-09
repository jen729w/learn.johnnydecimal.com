import React from "react"
import { Link } from "gatsby"

const JDNavLink = ({ children, to }) => (
	<Link to={to} activeClassName="font-semibold" className="">
		{children}
	</Link>
)

const TOC = () => (
	<nav className="border border-gray-400 rounded-md shadow-md sm:shadow-none sm:border-0">
		{/* Mobile-only: CONTENTS label at top of box */}
		<div className="flex justify-center sm:hidden">
			<h1 className="px-4 -mt-4 uppercase bg-offwhite">CONTENTS</h1>
		</div>
		{/* Wrap all links */}
		<div className="px-2 sm:px-0">
			<Link
				to="/"
				activeClassName="font-semibold"
				className="block p-1 m-1 rounded hover:bg-orange-600 hover:text-gray-100 focus:bg-orange-600 focus:text-gray-100"
			>
				Home
			</Link>
			<hr className="mx-2" />
			<Link
				to="/concepts"
				activeClassName="font-semibold"
				className="block p-1 m-1 rounded hover:bg-orange-600 hover:text-gray-100 focus:bg-orange-600 focus:text-gray-100"
			>
				Concepts
			</Link>
			<a href="/404" className="block mb-1">
				Areas &amp; categories
			</a>
			<a href="/404" className="block mb-1">
				IDs
			</a>
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
