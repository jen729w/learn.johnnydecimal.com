module.exports = {
	purge: [],
	theme: {
		// Font customisation: https://tailwindcss.com/docs/font-family/#app
		fontFamily: {
			jdbody: ["Fira Sans"],
			jdmono: ["Fira Code"],
			jdheader: ["Playfair Display"],
		},
		extend: {
			colors: {
				offwhite: "#fbfbfb",
				offblack: "#0a0a0a",
				offgray: "#505050", // Yeah I know this makes no sense
				jdred: {
					"100": "#FCE9E9",
					"600": "#E53E3E", // same as Tailwind's red-600
					"900": "#651B1B",
				},
				gray: {
					"100": "#fcfcfc",
					"200": "#f7f7f7",
					"300": "#f0f0f0",
					"400": "#e0e0e0",
					"500": "#bfbfbf",
					"600": "#969696",
					"700": "#696969",
					"800": "#474747",
					"900": "#2b2b2b",
				},
			},
		},
	},
	// variants: [
	// 	"responsive",
	// 	"group-hover",
	// 	"group-focus",
	// 	"focus-within",
	// 	"first",
	// 	"last",
	// 	"odd",
	// 	"even",
	// 	"hover",
	// 	"focus",
	// 	"active",
	// 	"visited",
	// 	"disabled",
	// ],
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
