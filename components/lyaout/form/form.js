import { useState } from 'react';

import classes from './form.module.css'

function Form() {
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();


  function handleInputMail(event) {
    setMail(event.target.value);
  }

  function handleInputName(event) {
    setName(event.target.value);
  }

  function handleInputMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <form className={classes.form}> 
      <h3>Hello {name}  {mail}</h3>
      <label className={classes.form_field}> 
        <span>Enter your name </span>
        <input 
          type='text' 
          name="name" 
          value={name}
          onChange={handleInputName}
          required />
      </label>
      <label className={classes.form_field}> 
        <span>Enter your email</span>
        <input 
          type='mail' 
          name="email"
          value={mail}
          onChange={handleInputMail}
          required 
          />
      </label>
      <label className={classes.form_field}>
        <span>Enter your message</span>
        <textarea
          valule={message}
          onChange={handleInputMessage}
        >

        </textarea>
      </label>
      <p>{message}</p>
      <button 
        className={classes.form_submit} 
        type="submit"> 
          SEND 
      </button>
    </form>
  )
}

export default Form;