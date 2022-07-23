import Link from 'next/link';
import { getAllPostCategories, getAllPostFiles, getAllPostsData } from "../../lib/posts-util";

import PostGrid from '../../components/post/post-grid';

function PostsPage({categories, files, posts}) {
  return(
    <section>
      <h1>This Posts Page </h1>
      <h3>There are much usefull information for entrepreneurs and who only want to do business.</h3>
      <h2>Categories :</h2>
      <ul>
        {categories.map(category => {
          return(
            <li key={category}>
              <b>{category.toUpperCase()}</b>
                <ul>
                  {files[category].map(fileName => (
                  <li key={fileName}>{fileName}</li>
                ))}
              </ul>
            </li>)
          })}
      </ul>
      <PostGrid posts={posts} />   
    </section>
  )
}

export function getStaticProps() {
  const categories = getAllPostCategories();
  const allPostFiles = getAllPostFiles();
  const posts = getAllPostsData();

  return {
    props: {
      categories,
      files: allPostFiles,
      posts: posts
    }
  }
}

export default PostsPage;