import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import ContextSite from '../../../context/contextSite';

import PostWrap from '../../../components/post/post_wrap/post_wrap';
import { getAllPostCategories } from "../../../lib/posts-util";

function CategoryPage(props) {
  const router = useRouter();
  const { page, category } = router.query;
  const ctx = useContext(ContextSite);


  console.log('??? ', router);



  return (
    <>
      <Head>
        <title>{router.query.category.toUpperCase()}</title>
      </Head>
      <PostWrap  
        page={page || 1} 
        countOnPage={ctx.postsOnPage}
        category={category}
      />
    </>
    
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}

export function getStaticPaths() {
  const categories = getAllPostCategories();
  const paths = categories.map(category => (
     {params: {category: category}}
  ))
  return {
    paths,
    fallback: false
  }
}


// export function getServerSideProps(context) {
//   const { params, query} = context;
//   const { page } = query;
//   const { category } = params;
//   const countPostsOnPage = 4;
//   const { posts , countAllPosts } = getCategoryPostsByIndex(page || 1, countPostsOnPage, category );

//  if(page > Math.ceil(countAllPosts / page)) {
//       return {
//         notFound: true,
//       }
//     }

//   return { 
//     props: {
//       posts,
//       category: params.category,
//       count: countAllPosts,
//       page: page || 1
//     }
//   }
// }


export default CategoryPage;