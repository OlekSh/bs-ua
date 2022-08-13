import Head from 'next/head';

import PostList from "../../../components/post/post-list";
import { getCategoryPostsByIndex } from "../../../lib/posts-util";

function CategoryPage(props) {
  const { posts, category, count, page } = props;


  return (
    <>
      <Head>
        <title>{category.toUpperCase()}</title>
      </Head>
      <section>
        <PostList posts={posts} category={category} count={count} page={page} />
      </section>
    </>
    
  )
}

export function getServerSideProps(context) {
  const { params, query, res } = context;
  const { page } = query;
  const { category } = params;
  const countPostsOnPage = 4;
  const { posts , countAllPosts } = getCategoryPostsByIndex(page || 1, countPostsOnPage, category );

 if(page > Math.ceil(countAllPosts / page)) {
      return {
        notFound: true,
      }
    }

  return { 
    props: {
      posts,
      category: params.category,
      count: countAllPosts,
      page: page || 1
    }
  }
}


export default CategoryPage;