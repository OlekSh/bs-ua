import Head from 'next/head';

import ContextSite from '../context/contextSite'
import Layout from '../components/lyaout/layout'
import '../styles/globals.css'

const siteDate = {
  logo: 'BS-UA',
  studia: "OlexWeb",
  email: 'sourceregister@gmail.com',
  postsOnPage: 4,
}

function MyApp({ Component, pageProps }) {
  return (
    <ContextSite.Provider value={siteDate}>
      <Head >
       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextSite.Provider> 
  )
}

export default MyApp
