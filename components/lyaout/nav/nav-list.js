import Link from 'next/link';

import classes from './nav.module.css';

export default function NavList() {
  return (
    <>  
     <ul className={classes.nav_list}>
          <li><Link href='/posts/business'><a>Бізнес</a></Link></li>
          <li><Link href='/posts/economy'><a>Економіка</a></Link></li>
          <li><Link href='/posts/investments'><a>Інвестиції</a></Link></li>
          <li><Link href='/posts/finance'><a>Фінанси</a></Link></li>
      </ul>
      <ul className={classes.nav_list}>
        <li><Link href='/posts/industry'>
          <a>Промисловість</a></Link></li>
        <li><Link href='/posts/e-commerce'><a>Є-комерція</a></Link></li>
        <li><Link href='/posts/energy'><a>Енергетика</a></Link></li>
        <li><Link href='/contact'><a>Контакт</a></Link></li>
      </ul>
    </>
  )
}
