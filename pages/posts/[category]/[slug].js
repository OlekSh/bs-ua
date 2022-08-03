import Head from "next/head";
import Post from "../../../components/post/post";

import { getAllPostCategories, getAllPostFiles, getPostData } from "../../../lib/posts-util";

function PostPage({ category, slug, post }) {
  return (
    <> 
      <Head>
        <title>{post.title}</title>
      </Head>
      <section>
        <Post post={post} />
      </section>
    </>
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