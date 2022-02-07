import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from "next-google-fonts"
import { ColorModeScript } from '@chakra-ui/react'

export default class MyDocument extends NextDocument {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta content="Lupine's Space" property="og:title" />
                    <meta content="Some information about who Lupine is" property="og:description" />
                    <meta content="https://www.lupines.space/" property="og:url" />
                    <meta content="https://imgur.com/o8Qd59z.jpg" property="og:image" />
                    <meta content="#800080" data-react-helmet="true" name="theme-color" />
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}