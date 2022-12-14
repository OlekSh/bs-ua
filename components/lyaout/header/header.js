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
      <section className={classes.header_container}>
        <Logo logo={siteData.logo} 
          color={isMain ? '#fff' : '#084916'}
          fontSize={''}
        />
        <Nav isMain={isMain} />
      </section>
      
    </header>
  )
}

export default Header;