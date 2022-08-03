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
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextSite.Provider> 
  )
}

export default MyApp
