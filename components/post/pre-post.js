import Link from 'next/link';

import classes from  './pre-post.module.css';

function PrePost(props) {
  const {post} = props;
  return (
    <section className={classes.prepost} >
      <Link href={`/posts/${post.category}/${post.slug}`}>
        <a>
          <h2>{post.title}</h2>
          <h3>Category : {post.category}</h3>
          <time>{post.date}</time>
        </a>
      </Link>
    </section>
  )
}

export default PrePost;