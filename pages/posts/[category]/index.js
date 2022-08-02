import { useEffect } from 'react';

import PostList from "../../../components/post/post-list";
import { getCategoryPosts } from "../../../lib/posts-util";

function CategoryPage(props) {
  const { posts, category } = props;


  return (
    <section>
      <h2>{category}</h2>
      <PostList posts={posts} />
    </section>
  )
}

export function getServerSideProps(context) {
  const { params } = context;
  const posts = getCategoryPosts(params.category);
  console.log(context.params);
  return { 
    props: {
      posts,
      category: params.category,
    }
  }
}



export default CategoryPage;