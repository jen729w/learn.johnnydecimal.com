import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  // The whole header
  <div className="pt-4 pb-1 mb-8 font-sans text-gray-800 bg-red-300 border-b-2 border-orange-400">
    {/* J•D vs. Johnny•Decimal */}
    <span className="mr-8 font-bold text-orange-800 md:hidden">J•D</span>
    <span className="hidden pb-2 mr-8 font-bold text-orange-800 border-b-2 border-orange-700 md:inline">
      Johnny•Decimal
    </span>

    {/* Community */}
    <span className="mr-8 font-light">Community</span>

    {/* Github + link-out SVG */}
    <div className="inline-block">
      <a
        href="https://github.com/jen729w/learn.johnnydecimal.com"
        className="mr-4 font-light"
      >
        Github
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15"
          height="15"
          className="hidden m-1 text-gray-600 md:inline-block icon outbound"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          ></path>{" "}
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          ></polygon>
        </svg>
      </a>
    </div>
  </div>
)

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
