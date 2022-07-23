import Link from 'next/link';

import classes from './article.module.css'

function Article({post}) {

  return (
    <article className={classes.article}>
      <Link href={`/posts/${post.category}/${post.slug}`}>
          <a>
          <h2 className={classes.article_title}>
            Article Title {post.title}
          </h2>
          <h6>Category: {post.category}</h6>
          <div className={classes.article_content}>
            <p>{post.smallText}</p>
          </div>
          </a>
      </Link>
    </article>
  )
}

export default Article;