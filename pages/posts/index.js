import { getAllPostCategories, getAllPostFiles, getAllPostsData } from "../../lib/posts-util";

import PostList from '../../components/post/post-list';

function PostsPage({categories, files, posts}) {
  return(
    <>
      <PostList posts={posts} />   
    </>
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