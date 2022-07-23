import Footer from "./footer/footer";
import Header from "./header/header";

import classes from './layout.module.css'

function Layout(props) {
  return (
    <>
      <Header/>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </>
    
  )
}

export default Layout;