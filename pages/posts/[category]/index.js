import PostList from "../../../components/post/post-list";
import { getCategoryPosts } from "../../../lib/posts-util";

function CategoryPage(props) {
  const { posts } = props;


  return (
    <section>
      <PostList posts={posts} />
    </section>
  )
}

export function getServerSideProps(context) {
  const { params } = context;
  const posts = getCategoryPosts(params.category);
  console.log(context.params)
  return { 
    props: {
      posts
    }
  }
}



export default CategoryPage;