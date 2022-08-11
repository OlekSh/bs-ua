import Head from 'next/head';

import { getPostsDataByIndex } from "../../lib/posts-util";

import PostList from '../../components/post/post-list';

function PostsPage({posts, count}) {

  return(
    <>
      <Head>
        <title>Публікації</title>
      </Head>
      <PostList posts={posts} count={count} />   
    </>
  )
}


export function getServerSideProps(context) {
  const { query } = context;
  const { page } = query;
  const { posts, countAllPosts }= getPostsDataByIndex(page || 1, 4);
  return {
    props: {
      posts,
      count: countAllPosts
    }
  }
}

export default PostsPage;