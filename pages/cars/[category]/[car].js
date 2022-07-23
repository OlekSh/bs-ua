import { getCarData, getCarsFiles } from "../../../lib/cars-util";

function CarPage(props) {
  return (
    <section>
      <h1>Car {props.car}</h1>
      <h2>Category {props.category}</h2>
      <h1>{props.carData.title}</h1>
    </section>
  )
}

export function getStaticProps(context) {
  const { params } = context;
  const { car, category } = params;
  const carData = getCarData(category, (car+'.md'))
  return {
    props: {
      car,
      category,
      carData
    }
  }
}

export async function getStaticPaths() {
  const filesCar = getCarsFiles();
  const categories = Object.keys(filesCar);
  const paths = [];
  categories.forEach(category => {
      filesCar[category].forEach(fileName => {
        paths.push({
          params: {
            category: category,
            car: fileName.replace(/\.md$/,'')
          }
        })
      })
  })

  console.log(paths)

  return {
    paths : paths,
    fallback: false
    
  }
}

export default CarPage;