# MDX setup

> 2020-07-26 10:40

What are we trying to do here?

The original idea/purpose/intent was your old `<Navigation>` component. Which you may or may not use ... but why wouldn't you use it, it's a textbook example of a component. Use it.

Okay, so then you realised all of your pages had to be MDX pages. So you gotta get those components set up in Gatsby first. So let's do that.

---

# 1. Figure out what we're doing from the docs first

So the trick is:

- Install the relevant MDX plugins.
- Configure `gatsby-node.js` to use them.
- Configure the actual pages.

`npm install --save gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react`

# You followed some instructions here and they were no good

[Migrate Remark to MDX](https://www.gatsbyjs.org/docs/mdx/migrate-remark-to-mdx/), specifically.

As usual, it was just typing magic and hoping that a rabbit came out the other end.

**This never works.** And even if it _did_ work, it never leads to understanding. Stop it. You must prioritise deep understanding -- but you must also document it for yourself here, given that you might not come back to it for a while.

So. Revert all changes. Start again, from first principles. Also, make one change at a time. Introduce a component, check if it breaks. Rinse and repeat.

> It's okay to take your time to become a better coder, both in technique as well as knowledge.

# We've installed the plugin

An auto-generated page at `/src/pages/test.mdx` works. Now let's [programmatically create pages](https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/).
