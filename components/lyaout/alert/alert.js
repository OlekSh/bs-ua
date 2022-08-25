import classes from './alert.module.css';

function Alert(props) {
  const status = {
    loading: 'Відправляємо ...',
    success: 'Повідомлення успішно відправлено',
    error: 'Вибачте сталася помилка. Спробуйте пізніше',
    empty: ''
  }

  return (
    <div className={`${classes.alert} ${classes[props.status || 'empty']}`}>
      <p>{status[props.status || 'empty']}</p>
    </div>
  )
}

export default Alert