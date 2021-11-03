import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>SVG Sprite Master</title>
                    <meta name="description" content="SVG Sprite Master is meant to be an enabler to any svg sprite user to parse the sprite and download one or more svg files in the sprite"/>
                    <meta property="og:description" content="SVG Sprite Master is meant to be an enabler to any svg sprite user to parse the sprite and download one or more svg files in the sprite"/>
                    <meta property="twitter:description" content="SVG Sprite Master is meant to be an enabler to any svg sprite user to parse the sprite and download one or more svg files in the sprite"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
