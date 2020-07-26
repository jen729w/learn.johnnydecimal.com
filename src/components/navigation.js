import React from "react"
import { Link } from "gatsby"

const Navigation = ({ backURL, backTitle, nextURL, nextTitle }) => (
  <nav className="flex justify-between ml-4 mr-6">
    <div className="">
      <Link to={backURL} className="text-md">
        ← {backTitle}
      </Link>
    </div>
    <div className="text-center text-orange-700">|</div>
    <div className="text-right">
      <Link to={nextURL} className="text-md">
        {nextTitle} →
      </Link>
    </div>
  </nav>
)

export default Navigation
