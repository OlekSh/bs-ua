import { useState } from 'react';

import Link from 'next/link';
import classes from './nav.module.css';

function Nav() {
  const [ active, setActive ] = useState(false);

  function handleMobNav() {
    setActive(!active);
  }

  return (
    <>
      <div className={classes.nav}>
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
      <nav className={`${classes.mob_nav} ${active ? classes.mob_nav_act : ''}`}>
        <button 
        className={`${classes.sendwich} ${active ? classes.sendwich_act : ''}`}
        onClick={handleMobNav}
        > 
          <span className={classes.line_first}></span>
          <span className={classes.line_second}></span>
          <span className={classes.line_third}></span>
        </button>
        <Link href='/posts/business'><a>Бізнес</a></Link>  
        <Link href='/posts/economy'><a>Економіка</a></Link> 
        <Link href='/posts/investments'><a>Інвестиції</a></Link>
        <Link href='/posts/finance'><a>Фінанси</a></Link>
        <Link href='/posts/industry'>
              <a>Промисловість</a></Link>
        <Link href='/posts/e-commerce'><a>Є-комерція</a></Link>
        <Link href='/posts/energy'><a>Енергетика</a></Link>
      </nav>
    </>
  )
}

export default Nav;