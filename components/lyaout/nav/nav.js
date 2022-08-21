import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import NavList from './nav-list';
import classes from './nav.module.css';

function Nav(props) {
  const { isMain } = props;
  const [ active, setActive ] = useState(false);
  const router = useRouter();

  function handleMobNav() {
    setActive(!active);
  }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
        setActive(false);
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <div className={`${classes.nav} 
      ${isMain ? classes.nav_fon: ''} 
      ${active ? classes.nav_active: ''}
      `}>
        <div 
          className={`${classes.sendwich} ${active ? classes.sendwich_act : ''}`}
          onClick={handleMobNav}
          > 
            <span className={classes.line_first}></span>
            <span className={classes.line_second}></span>
            <span className={classes.line_third}></span>
        </div>
        <NavList />
      </div>
    </>
  )
}

export default Nav;