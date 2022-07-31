import Link from 'next/link';
import classes from './nav.module.css';

function Nav() {
  return (
    <nav className={classes.nav}>
    <Link href='/posts/business'><a>Бізнес</a></Link>
    <Link href='/posts/economy'><a>Економіка</a></Link>
    <Link href='/posts/investments'><a>Інвестиції</a></Link>
    <Link href='/posts/finance'><a>Фінанси</a></Link>
    <Link href='/posts/industry'><a>Промисловість</a></Link>
    <Link href='/posts/e-commerce'><a>Є-комерція</a></Link>
    <Link href='/posts/energy'><a>Енергетика</a></Link>
  </nav>
  )
}

export default Nav;