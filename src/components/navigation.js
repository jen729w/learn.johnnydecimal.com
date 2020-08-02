import React from "react"
import { Link } from "gatsby"

const Navigation = ({ backURL, backTitle, nextURL, nextTitle }) => (
	<nav className="flex justify-between pt-2 border-t border-gray-400">
		<div className="">
			<Link to={backURL} className="text-md">
				← {backTitle}
			</Link>
		</div>
		<div className="text-right">
			<Link to={nextURL} className="text-md">
				{nextTitle} →
			</Link>
		</div>
	</nav>
)

export default Navigation
