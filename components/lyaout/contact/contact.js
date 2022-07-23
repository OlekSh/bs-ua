import { useContext } from 'react';
import ContextSite from '../../../context/contextSite';
import classes from './contact.module.css';

function Contact() {
  const siteData = useContext(ContextSite);

  return(
    <section className={classes.contact}>
      <div className={classes.contact_container}>
        <div className={classes.contact_content}>
           <h3>You can write us.</h3>
          <h4>Our letter {siteData.email}</h4>
        </div>
        <div className={classes.contact_fon}>

        </div>
      </div>
    </section>
  )
}

export default Contact;