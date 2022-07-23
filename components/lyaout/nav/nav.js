import Link from 'next/link';
import classes from './nav.module.css';

function Nav() {
  return (
    <nav className={classes.nav}>
    <Link href="/">
      <a> Home
      </a>
    </Link>
    <Link href="/posts">
      <a> Posts</a>
    </Link>
  </nav>
  )
}

export default Nav;