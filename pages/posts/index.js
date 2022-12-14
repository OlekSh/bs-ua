import { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getPostsDataByIndex } from "../../lib/posts-util";


import PostWrap from '../../components/post/post_wrap/post_wrap';
import ContextSite from '../../context/contextSite';

function PostsPage({posts, count}) {
  const router = useRouter();
  const { page } = router.query;
  const ctx = useContext(ContextSite);

  return(
    <>
      <Head>
        <title>Публікації</title>
      </Head>
      <PostWrap  
        page={page} 
        countOnPage={ctx.postsOnPage}
      />
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