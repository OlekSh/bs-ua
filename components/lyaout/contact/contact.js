import Form from '../form/form';
import classes from './contact.module.css';


function Contact() {
  return  (
    <section className={classes.contact}>
      <div className={`${classes.container} container`}>
        <h2 className={classes.contact_title}>Якщо є питання напишіть нам</h2>
        <Form />
      </div>
    </section>
  )
}

export default Contact