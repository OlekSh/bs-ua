import classes from './introduction.module.css';

function Introduction() {
  return  (
    <section className={classes.introd}>
      <div className={classes.container}>
         <h3>Доброго вечора. Ми з України.</h3>
          <p>У цей важкий для країни час ми маємо згуртуватись.</p> <p>Ми сильні. Ми витримаємо. Мирного Вам неба над головою.</p>
          <p>Ми сильні. Ми витримаємо. Мирного Вам неба над головою.</p>
          <p>Ми сильні. Ми витримаємо. Мирного Вам неба над головою.</p>
      </div>
    </section>
  )
}

export default Introduction;