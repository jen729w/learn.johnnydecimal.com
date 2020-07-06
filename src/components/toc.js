import React from "react"
import { Link } from "gatsby"

const TOC = () => (
  <nav className="my-32 border border-gray-300 rounded-lg shadow">
    <Link
      to="/spec/home"
      activeClassName="font-bold"
      className="block p-1 m-1 rounded hover:bg-orange-600 hover:text-gray-100 focus:bg-orange-600 focus:text-gray-100"
    >
      Home
    </Link>
    <hr className="mb-1" />
    <Link
      to="/spec/concepts"
      activeClassName="font-bold"
      className="block p-1 m-1 rounded hover:bg-orange-600 hover:text-gray-100 focus:bg-orange-600 focus:text-gray-100"
    >
      Concepts
    </Link>
    <a href="#" className="block mb-1">
      Areas &amp; categories
    </a>
    <a href="#" className="block mb-1">
      IDs
    </a>
    <hr className="mb-1" />
    <a href="#" className="block mb-1">
      Contact
    </a>
    <a href="#" className="block ">
      Privacy
    </a>
  </nav>
)

export default TOC
