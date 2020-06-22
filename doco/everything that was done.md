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
  - Agh, you were on `main`! Branch.
  - So you have to merge `main` to `develop` first.
  - And doing this while Gatsby is serving up the site can confuse it. Restart it.

### Spend half an hour getting Tailwind Intellisense working

- Wasn't working. Hmm.
- Check the developer's page on [Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss&ssr=false#qna), link out to Github, check over there, looks like there's an error with v0.3.x on Mac.
- Take a while to figure out that you can use the VSCode command palette to 'install specific version of extension'. Back to v0.2.0, seems okay.

## Okay what are we actually going to _build_ now?

Excellent question. Let's make a very very simple header that looks like this on mobile:

```
J•D  |  Play  |  Learn  |  App
```

And on larger screens:

```
Johnny•Decimal  |  Playground  |  Learn  |  App
```

This gives us a bit of practice doing things at different screen sizes even though it probably isn't necessary in this case.

At this point we found the [screencasts](https://tailwindcss.com/course/the-utility-first-workflow/) on Tailwind's site and watched the first couple. Worthwhile.

> A thought here. These notes could just go straight up on the site, right?

Ooh the second video, 'Responsive Design', is interesting. Lots of _design_. I don't think there's any way round this -- you just gotta build things.

### What next?

Do some research on other site headers. Don't just start from scratch here, this has been done before. Get inspiration.

...a bit later...

Okay, did that. They're not very good! Don't spend any time on this, _you're getting in your own way_. This is a lesson unto itself.

You still don't have a clear vision in your mind of what you're building. You've just started without really knowing what the end-state is.

## PROGRESS 2020-06-22 17:48

You've got your headers, they're fine for now. This is all you needed to do.

Next: build a site which has the 'Learn' header (always active) and pulls in Markdown files. Then you gotta do some basic styling on each of the posts it renders. Publish this file there as a demo.

# Documentation

Somewhere for you to keep your notes, worth mentioning that this is a thing that you do.
