/**
 * Layout: wraps the entire site.
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import TOC from "./toc"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // This div wraps the entire page
    <div className="max-w-5xl pl-4 pr-8 leading-relaxed text-gray-900 bg-gray-100 mx-autosm:px-8 font-jdbody">
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* The main flexbox for nav + content */}
      <div className="flex">
        <div className="hidden w-1/4 mr-4 sm:block">
          <TOC />
        </div>
        <main className="sm:w-3/4">{children}</main>
      </div>
      {/* Show the TOC below the content but only on small screens */}
      <div className="sm:hidden">
        <TOC />
      </div>
      <footer className="bg-green-100">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
