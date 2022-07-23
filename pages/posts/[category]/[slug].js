import Post from "../../../components/post/post";

import { getAllPostCategories, getAllPostFiles, getPostData } from "../../../lib/posts-util";

function PostPage({ category, slug, post }) {
  return (
    <section>
      <h1>Post Page</h1>
      <h2>Category: {category}</h2>
      <h3>Slug: {slug}</h3>
      <Post post={post} />
    </section>
  )
}

export function getStaticProps(context) {
  const { params } = context;
  const {category, slug } = params;
  const post  = getPostData(category, `${slug}.md`);
  return {
    props: {
      category,
      slug,
      post
    }
  }
}

export async function getStaticPaths() {
  const categories = getAllPostCategories();
  const postsFiles = getAllPostFiles();
  const paths = [];

  categories.forEach(category => {
    postsFiles[category].forEach(fileName => {
      const path = {
        params: {
          category,
          slug: fileName.replace(/\.md$/, '')
        }
      }
      paths.push(path);
    })
  })

  return {
    paths,
    fallback: false
  }

}

export default PostPage;