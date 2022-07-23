import Link from 'next/link';

import { getAllCars, getCarsFiles } from "../../lib/cars-util";

function CarsPage(props) {
  const {filesName, filesData } = props;

  return (
    <section>
      <h2>All Cars</h2>
      <ul>
        {filesName.map(file => (<li key={file}>{file}</li>))}
      </ul> 
      <ul>
        {
          filesData.map(carData => {
            return (
              <li key={carData.slug}>
                <Link href={`/cars/${carData.category}/${carData.slug}`}>
                  <a>
                    <h2>{carData.title}</h2>
                    <p>{carData.smallText}</p>
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export function getStaticProps() {
  const files = getCarsFiles();
  const filesArray = Object.values(files);
  const carsData = getAllCars();
 // console.log(files);

  //console.log(carsData);

  return  {
    props: {
      filesName: filesArray,
      filesData: carsData,
    }
  }
}

export default CarsPage;
