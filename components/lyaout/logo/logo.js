import Link from 'next/link';

import classes from './logo.module.css';
 
function Logo(props) {
  return (
    <section className={classes.logo}>
      <Link href='/'>
        <a 
          style={{
            color: props.color || '',
            fontSize: props.size || ''
          }} 
        >{ props.logo }</a>
      </Link>      
    </section>
  )
}

export default Logo