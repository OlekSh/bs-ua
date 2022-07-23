import { useContext } from 'react';
import ContextSite from '../../../context/contextSite';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import classes from './header.module.css';

function Header() {
  const siteData = useContext(ContextSite);

  return(
    <header className={classes.header}>
      <Logo logo={siteData.logo} />
      <Nav />
    </header>
  )
}

export default Header;