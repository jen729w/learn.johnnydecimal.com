import React from "react"
import { Link } from "gatsby"

const ButtondownEmailForm = () => (
	<form
		action="https://buttondown.email/api/emails/embed-subscribe/johnny.decimal"
		method="post"
		// target="popupwindow"
		// onsubmit="window.open('https://buttondown.email/johnny.decimal', 'popupwindow')"
		className="embeddable-buttondown-form"
	>
		<label htmlFor="bd-email" className="inline-block mb-2">
			Email address (see the <Link to="/privacy/">privacy policy</Link>).
		</label>
		<br />
		<div className="flex flex-col md:flex-row">
			<input
				type="email"
				name="email"
				id="bd-email"
				placeholder="you@example.com"
				size="25"
				className="px-2 py-1 mr-4 border-2 border-gray-800 rounded-md shadow-inner text-jdred-900 font-jdmono focus:outline-none focus:border-jdred-900 hover:border-jdred-900 focus:bg-jdred-100 hover:bg-jdred-100"
			/>
			<input type="hidden" value="1" name="embed" />
			<input
				type="submit"
				value="Subscribe"
				className="w-32 px-3 py-1 mt-2 bg-gray-200 border-2 border-gray-800 rounded-md shadow-md sm:mt-0 focus:outline-none focus:border-red-600 focus:text-jdred-900 hover:text-jdred-900 hover:border-jdred-900 focus:bg-jdred-100 hover:bg-jdred-100 active:text-red-600 active:border-red-600 active:shadow-none"
			/>
		</div>
		<p className="mb-4">
			<a
				href="https://buttondown.email"
				className="text-xs font-light no-style-link"
			>
				Powered by Buttondown.
			</a>
		</p>
	</form>
)

export default ButtondownEmailForm
