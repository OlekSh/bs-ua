import PrePost from './pre-post';

import classes from './post-list.module.css'

function PostList(props) {
  const { posts } = props;

  return(
    <section className={classes.post_list}>
      <div className={classes.post_list_container}>
        {
          posts.length ? 
          posts.map((post, index) => <PrePost key={index} post={post}/>) :
          <h1>There is nothing</h1>
        }
      </div>
    </section>
  )
}

export default PostList;