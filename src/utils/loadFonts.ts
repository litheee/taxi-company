import localFont from '@next/font/local'

const ubuntu = localFont({
	src: [
		{ path: '../../public/fonts/Ubuntu-Regular.woff', weight: '400' },
		{ path: '../../public/fonts/Ubuntu-Medium.woff', weight: '500' },
		{ path: '../../public/fonts/Ubuntu-Bold.woff', weight: '700' }
	]
})

const lato = localFont({
	src: [{ path: '../../public/fonts/Lato-Heavy.ttf', weight: '900' }]
})

export { ubuntu, lato }
