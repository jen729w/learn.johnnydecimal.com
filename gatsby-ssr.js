/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Fixes the build warnings and the lack of styles in the RSS feed.
// https://github.com/gatsbyjs/gatsby/issues/20543
export { wrapRootElement } from "./src/wrap-root-element"
