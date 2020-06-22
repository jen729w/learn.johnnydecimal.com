# Everything that was done

_Everything!_

# Code

## Create the blank Gatsby site

- `gatsby new learn.johnnydecimal.com`

## Add Tailwind CSS

> Note: we're just going to use `npm` because that's what the Gatsby docs use.

From [the documentation](https://www.gatsbyjs.org/docs/tailwind-css/):

- `npm install tailwindcss --save-dev`.

Generate the Tailwind configuration file, we'll need it later.

- `npx tailwindcss init`.

Follow along with 'Option #1'.

- `npm install --save gatsby-plugin-postcss`.
- Add the plugin to `gatsby-config.js`.
  - Noting that you add it at the end of the object, and don't just paste the code verbatim from the Gatsby site as that won't work.
- `touch postcss.config.js` then paste the file.
  - Why `touch`?

That's it installed. Let's configure it quickly to test.

### Interlude: Git branch & commit

- Rename `master` to `main` before anything gets pushed anywhere.
- Do an initial commit, then set up Git-Flow using Tower.
- Reconfigure your VSCode plugin to warn on `main`.
  - `"branchwarnings.protectedBranches": ["master", "main", "develop"],`
- Create a Github repo & push.

### Quickly test your Tailwind install

- Create `/src/styles/tailwind.css`, don't forget the VSCode shortcut to do that.
- From [the Tailwind docs](https://tailwindcss.com/docs/installation/#3-use-tailwind-in-your-css), add the `@tailwind` directives.
- Create a new page at `/src/pages/tailwind.js`.
  - So you're not hacking about with the existing styles that are imported via `<SEO>` and `<Layout>`.
- `gatsby develop` caused an error here, needed an `npm install` as suggested by the error message.
- Gatsby warning, you forgot to `export default Tailwind`.
- And she seems to work! Great news.
- Git commit, get in a solid habit. It can be easy to forget.

# Documentation

Somewhere for you to keep your notes, worth mentioning that this is a thing that you do.
