import { useRouter } from 'next/router';

import Footer from "./footer/footer";
import Header from "./header/header";


import classes from './layout.module.css'

function Layout(props) {
  const router = useRouter();

  return (
    <>
      <Header fon={router.asPath !== '/'? 'white': ''}/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </>
    
  )
}

export default Layout;