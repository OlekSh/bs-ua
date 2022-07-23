import PrePost from './pre-post';

import classes from './post-grid.module.css';

function PostGrid(props) {
  return (
    <section className={classes.postgrid}>
      {props.posts.map((post, index) => <PrePost key={index} post={post}/>) }
    </section>
  )
}

export default PostGrid;