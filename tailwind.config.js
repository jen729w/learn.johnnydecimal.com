module.exports = {
	purge: [],
	theme: {
		// Font customisation: https://tailwindcss.com/docs/font-family/#app
		fontFamily: {
			jdbody: ["Fira\\ Sans"],
			jdmono: ["Fira\\ Code"],
			jdheader: ["Playfair\\ Display"],
		},
		extend: {
			colors: {
				offwhite: "#f8f8f8",
				offblack: "#0a0a0a",
			},
		},
	},
	variants: {
		// Order matters here
		// https://tailwindcss.com/course/hover-focus-and-active-styles/#app
		// backgroundColor: ["responsive", "hover", "focus", "active"],
		textColor: ["responsive", "hover", "focus", "active"],
		borderColor: ["responsive", "hover", "focus", "active"],
		boxShadow: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
}
