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
    <div className="max-w-5xl px-4 mx-auto bg-red-200 sm:px-8">
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* The main flexbox for nav + content */}
      <div className="flex bg-yellow-200">
        <div className="hidden w-1/4 bg-blue-200 sm:block">
          <TOC />
        </div>
        <main className="bg-gray-200 sm:w-3/4">{children}</main>
      </div>
      <footer>
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
