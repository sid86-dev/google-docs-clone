import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Google Docs Clone</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp
