/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		emotion: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			include: [path.join(__dirname, 'public/icons/')],
			use: ['@svgr/webpack']
		})

		return config
	}
}

module.exports = nextConfig
