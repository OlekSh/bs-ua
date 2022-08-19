import { useRouter } from 'next/router';

import Footer from "./footer/footer";
import Header from "./header/header";


import classes from './layout.module.css'

function Layout(props) {
  const router = useRouter();
  const isMain = router.asPath === '/';

  return (
    <section className={`${classes.wrap_main} ${isMain ? 'wrap_bg': ''}`}>
      <Header isMain={ isMain }/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </section>
    
  )
}

export default Layout;