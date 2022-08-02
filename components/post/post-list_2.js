import classes from "./post-list.module.css";
import PrePost from './pre-post';

function PostList_2(props) {
  const {posts} = props
  return (
      <section className={classes.post_list}>
        <div className={classes.post_list_container}>
          { posts.map(post => <PrePost post={post} key={post.id} /> ) }
        </div>
      </section>
  )
}

export default PostList_2;