import Head from 'next/head';

import PostList from "../../../components/post/post-list";
//import { getAllPostCategories, getCategoryPosts } from '../../../lib/posts-util';
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

// export async function getStaticProps(context)  {
//   const { category, page } = context.params;

//   const posts = getCategoryPosts(category);

//   console.log('!!!', context);

//   return {
//     props : {
//       posts,
//       category,
//       count: 1
//     }
//   }
// }


// export async function  getStaticPaths() {
//   const categories = await getAllPostCategories();
//   console.log(categories);
//   const paths = categories.map(category => (
//     {params: {category}}
//   ));
//   return {
//     paths,
//     fallback: true
//   }
// }


export default CategoryPage;