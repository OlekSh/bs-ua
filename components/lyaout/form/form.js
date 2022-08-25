import { useState } from 'react';

import Alert from '../alert/alert';

import classes from './form.module.css'

function Form() {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sendText, setSendText] = useState('Відправити');
  const [statusForm, setStatusForm] = useState('empty');

function handlerSubmit(ev) {
    ev.preventDefault();
    let mes = {
      name,
      email: mail,
      message
    }
    setStatusForm('loading');
    fetch('/api/sendMail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(mes)
    })
    .then(res => {  
        if(!res.ok)  {
          throw new Error("res give mistake");
        }
    })
    .then(message => {
      setMail('');
      setName('');
      setMessage('')
      setSendText('Відправлено');
      setTimeout(() => {
        setSendText('Відправити');
      },3000)
      setStatusForm('success')
    })
    .catch(err => {
      setStatusForm('error')
    })
    .finally(() => {
      setTimeout(() => {
        setStatusForm('empty');
      },3000)
    })

  }


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
    <form className={classes.form}
      onSubmit={handlerSubmit}
    > 
      <Alert status={statusForm} />
      <label className={classes.form_field}> 
        <span>Ім&#39;я :</span>
        <input 
          type='text' 
          name="name" 
          value={name}
          onChange={handleInputName}
          placeholder="Введіть ваше ім'я"
          required />
      </label>
      <label className={classes.form_field}> 
        <span>Електронна адреса :</span>
        <input 
          type='mail' 
          name="email"
          value={mail}
          onChange={handleInputMail}
          placeholder="Введіть вашу електронну адресу"
          required 
          />
      </label>
      <label className={classes.form_field}>
        <span>Повідомлення :</span>
        <textarea
          value={message}
          onChange={handleInputMessage}
          placeholder="Введіть ваше повідомлення"
        >

        </textarea>
      </label>
      <button 
        className={classes.form_submit} 
        type="submit"> 
          {sendText}
      </button>
    </form>
  )
}

export default Form;