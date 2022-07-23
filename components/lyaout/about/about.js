import classes from './about.module.css'; 

function About() {
  return(
    <section className={classes.about}>
      <div className={classes.about_container}>
        <div className={classes.about_fon}></div>
        <div className={classes.about_content}>
          <h3>Хто ми ?</h3>
          <p>
          Передусім розглядаються заявки підприємств оборонного комплексу та тих, які забезпечують першочергові потреби населення, а також підприємства, які можуть самостійно забезпечити демонтаж та перевезення своїх потужностей до найближчої станції «Укрзалізниці». Якщо ухвалене позитивне рішення щодо евакуації підприємства, держава допомагає підшукати нове місце розташування потужностей, допомагає з переїздом, сприяє в розселенні працівників тощо. 
          </p>
        </div>
          
      </div>
    </section>
  )
}

export default About;