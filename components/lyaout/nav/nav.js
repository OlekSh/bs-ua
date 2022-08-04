import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
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
        <ul className={classes.nav_list}>
          <li><Link href='/posts/business'><a>Бізнес</a></Link></li>
          <li><Link href='/posts/economy'><a>Економіка</a></Link></li>
          <li><Link href='/posts/investments'><a>Інвестиції</a></Link></li>
          <li><Link href='/posts/finance'><a>Фінанси</a></Link></li>
          <li><Link href='/posts/finance'><a>Фінанси</a></Link></li>
        </ul>
        <ul className={classes.nav_list}>
          <li><Link href='/posts/industry'>
            <a>Промисловість</a></Link></li>
          <li><Link href='/posts/e-commerce'><a>Є-комерція</a></Link></li>
          <li><Link href='/posts/energy'><a>Енергетика</a></Link></li>
          <li><Link href='/posts/energy'><a>Енергетика</a></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;