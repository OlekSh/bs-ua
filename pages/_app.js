import Head from 'next/head';

import ContextSite from '../context/contextSite'
import Layout from '../components/lyaout/layout'
import '../styles/globals.css'

const siteDate = {
  logo: 'BS-UA',
  studia: "OlexWeb",
  email: 'sourceregister@gmail.com'
}

function MyApp({ Component, pageProps }) {
  return (
    <ContextSite.Provider value={siteDate}>
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextSite.Provider> 
  )
}

export default MyApp
