import Link from 'next/link';

import classes from './logo.module.css';
 
function Logo({logo}) {
  return (
    <section className={classes.logo}>
      <Link href='/'>
        <a>{ logo }</a>
      </Link>      
    </section>
  )
}

export default Logo