/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' },
			{ hostname: 'source.unsplash.com' },
		],
	},
}

export default config
