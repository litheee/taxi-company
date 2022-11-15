import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { renderStatic } from 'styled/renderStatic'

export default class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		const { css, ids } = await renderStatic(initialProps.html)

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
				</>
			)
		}
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
