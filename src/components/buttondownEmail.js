import React from "react"
import { Link } from "gatsby"

const ButtondownEmailForm = () => (
	<form
		action="https://buttondown.email/api/emails/embed-subscribe/johnny.decimal"
		method="post"
		// target="popupwindow"
		// onsubmit="window.open('https://buttondown.email/johnny.decimal', 'popupwindow')"
		class="embeddable-buttondown-form"
	>
		<label for="bd-email" className="inline-block mb-2">
			Email address (see the <Link to="/privacy/">privacy policy</Link>)
		</label>
		<br />
		<div className="flex flex-col md:flex-row">
			<input
				type="email"
				name="email"
				id="bd-email"
				placeholder="you@example.com"
				size="25"
				className="px-2 py-1 mr-4 text-orange-700 border-2 border-gray-700 rounded-md font-jdmono focus:outline-none focus:border-orange-600 hover:border-orange-600 focus:bg-orange-200 hover:bg-orange-200"
			/>
			<input type="hidden" value="1" name="embed" />
			<input
				type="submit"
				value="Subscribe"
				className="w-32 px-3 py-1 mt-2 bg-gray-200 border-2 border-gray-700 rounded-md shadow-md sm:mt-0 focus:outline-none focus:border-orange-600 focus:text-orange-700 hover:text-orange-700 hover:border-orange-600 focus:bg-orange-200 hover:bg-orange-200 active:text-orange-300 active:border-orange-300 active:shadow-none"
			/>
		</div>
		<p className="mb-4">
			<a href="https://buttondown.email" className="text-xs font-light">
				Powered by Buttondown.
			</a>
		</p>
	</form>
)

export default ButtondownEmailForm
