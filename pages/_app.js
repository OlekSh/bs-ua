import ContextSite from '../context/contextSite'
import Layout from '../components/lyaout/layout'
import '../styles/globals.css'

const siteDate = {
  logo: 'BS_UA',
  studia: "OlexWeb",
  email: 'sourceregister@gmail.com'
}

function MyApp({ Component, pageProps }) {
  return (
    <ContextSite.Provider value={siteDate}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextSite.Provider> 
  )
}

export default MyApp
