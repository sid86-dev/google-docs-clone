import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Google Docs Clone</title>
                // Material Icons Link
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
