import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostCategories(){

  return fs.readdirSync(postsDirectory);

} 

export function getAllPostFiles() {
  const categories =  getAllPostCategories();
  const allPostFiles = {};

  categories.forEach(category => {

    allPostFiles[category] = fs.readdirSync(path.join(postsDirectory, category));
 
  })

  return allPostFiles;
}

function getPostPreData(category, fileName) {
  const pathFile = path.join(postsDirectory, category, fileName);
  const fileContent =  fs.readFileSync(pathFile, 'utf-8');
  const  { data, content } = matter(fileContent);

  const postData = {
    slug: fileName.replace(/\.md$/, ''),
    ...data,
  }

  return postData;
}

export function getPostData(category, fileName) {
  const pathFile = path.join(postsDirectory, category, fileName);
  const fileContent =  fs.readFileSync(pathFile, 'utf-8');
  const  { data, content } = matter(fileContent);

  const postData = {
    slug: fileName.replace(/\.md$/, ''),
    ...data,
    content
  }

  return postData;
}

export function getAllPostsData(size) {
  const categories = getAllPostCategories();
  const postsFiles = getAllPostFiles();
  const postsData = []
  
  
  categories.forEach(category => {
    postsFiles[category].forEach(fileName => {
      const postData = getPostPreData(category, fileName);
      
      postsData.push(postData);
    })
  })
  const sortedPosts = postsData.sort(
    (postA, postB) => postA.date > postB.date ? -1 : 1
  );
    if(size ) {
      return sortedPosts.slice(0, size)
    }
  return sortedPosts;

}

export function getCategoryPosts(category) {
  const categoryPath = path.join(postsDirectory, category)
  const categoryFiles = fs.readdirSync(categoryPath);

  const categoryPosts = categoryFiles.map((fileName) =>  {
    return getPostPreData(category, fileName)
  })

  return categoryPosts;
}