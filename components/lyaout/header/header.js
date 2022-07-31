import { useContext } from 'react';
import ContextSite from '../../../context/contextSite';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import classes from './header.module.css';

function Header(props) {
  const siteData = useContext(ContextSite);
  const { fon } = props;

  return(
    <header className={`${classes.header} ${fon ? classes.header_fon : ''}`}>
      <Logo logo={siteData.logo} 
      color={fon ? '' : '#fff'}
      />
      <Nav />
    </header>
  )
}

export default Header;