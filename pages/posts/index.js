import Head from 'next/head';

import { getAllPostCategories, getAllPostFiles, getAllPostsData } from "../../lib/posts-util";

import PostList from '../../components/post/post-list';

function PostsPage({ posts}) {
  return(
    <>
      <Head>
        <title>Публікації</title>
      </Head>
      <PostList posts={posts} />   
    </>
  )
}

export function getStaticProps() {
  const posts = getAllPostsData();

  return {
    props: {
      posts: posts
    }
  }
}

export default PostsPage;