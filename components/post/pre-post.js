import Link from 'next/link';

import classes from  './pre-post.module.css';

function PrePost(props) {
  const {post} = props;
  return (
    <section className={classes.prepost} >
      <Link href={`/posts/${post.category}/${post.slug}`}>
        <a>
          <div className={classes.prepost_container}>
          <div className={classes.prepost_img}>
            
          </div>
          <div className={classes.prepost_info }>
            <h2>{post.title}</h2>
            <h3>Category : {post.category}</h3>
            <time>{post.date}</time>
          </div>
          </div>
        </a>
      </Link>
    </section>
  )
}

export default PrePost;