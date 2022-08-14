import Link from 'next/link';
import { useContext } from 'react';

import ContextSite from '../../../context/contextSite';

import Logo from '../logo/logo';
import classes from './footer.module.css';

function Footer() {
  const siteData = useContext(ContextSite);

  return(
    <footer className={classes.footer}>
      <div className='container'>
        <div className={classes.footer_container}>
          <div className={classes.footer_logo}>
            <Logo 
                logo={siteData.logo} 
                color={'#fff'}
            />
          </div>
          <ul className={classes.footer_menu}>
            <li><Link href='/posts/business'><a>Бізнес</a></Link></li>
            <li><Link href='/posts/economy'><a>Економіка</a></Link></li>
            <li><Link href='/posts/investments'><a>Інвестиції</a></Link></li>
            <li><Link href='/posts/finance'><a>Фінанси</a></Link></li>         
          </ul>
          <ul className={classes.footer_menu}>
            <li><Link href='/posts/e-commerce'><a>Є-комерція</a></Link></li>
            <li><Link href='/posts/energy'><a>Енергетика</a></Link></li>
            <li><Link href='/posts/industry'><a>Промисловість</a></Link></li>
            <li><Link href='/contact'>
              <a>Контакт</a>
              </Link>
            </li>
          </ul> 
        </div>
        <div className={classes.footer_info}>
          <p>&copy; 2022 year <span>{ siteData.studia }</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;