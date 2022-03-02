import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css'

import Head from 'next/head'
import {Router} from "next/router";
import NProgress from 'nprogress'

function MyApp({Component, pageProps}) {

    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', (url)=>{
        NProgress.start()
    });
    Router.events.on('routeChangeComplete', (url)=>{
        NProgress.done()
    });

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
