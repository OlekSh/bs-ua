import { useContext } from 'react';
import ContextSite from '../../../context/contextSite';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import classes from './header.module.css';

function Header(props) {
  const siteData = useContext(ContextSite);
  const { isMain } = props;

  return(
    <header className={`${classes.header} ${isMain ? classes.header_fon : ''}`}>
      <Logo logo={siteData.logo} 
      color={isMain ? '#fff' : ''}
      />
      <Nav isMain={isMain} />
    </header>
  )
}

export default Header;