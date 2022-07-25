import PrePost from './pre-post';

import classes from './post-list.module.css'


function PostList(props) {
  return(
    <section className={classes.post_list}>
      <div className={classes.post_list_container}>
         {props.posts.map((post, index) => <PrePost key={index} post={post}/>) }
      </div>
    </section>
  )
}

export default PostList;