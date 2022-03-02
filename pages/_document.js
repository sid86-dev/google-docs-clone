import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/*Material Icons Link*/}
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico"/>
                {/*nprogress*/}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}