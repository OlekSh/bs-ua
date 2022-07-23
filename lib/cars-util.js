import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const carsDirectory = path.join(process.cwd(), 'cars');

export function getCarsFiles() {
  const categories = fs.readdirSync(carsDirectory);
  const carsFiles = {} 
  categories.forEach(category => {
    carsFiles[category] = fs.readdirSync(path.join(carsDirectory, category));
  })

  return carsFiles;

}

export function getCarData(category, fileName) {
  const fileContent = fs.readFileSync(path.join(carsDirectory, category, fileName ), 'utf-8');


  const { data, content } = matter(fileContent);

  const carData = {
    ...data,
    content
  }

  return carData;
}

export function getAllCars() {
  const carsFiles = getCarsFiles(); 
  const categories = Object.keys(carsFiles);

  const carsData = [];
    categories.forEach(category => {
      carsFiles[category].forEach(fileName => {
        carsData.push(getCarData(category, fileName))
      })
    })

  return carsData;
}