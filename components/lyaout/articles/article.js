import Link from 'next/link';
import Image from 'next/image';

import generImg  from '../../../public/images/posts/flatlay-on-world-map.jpg';
import classes from './article.module.css'

function Article({post}) {

  return (
    <article className={classes.article}>
      <div className={classes.article_img}>
        <Image 
          src={`/images/posts/${post.category}/${post.image}`}
          alt='Placeholder for article'
          width={900}
          height={600}
          fill='responsive'
        />
      </div>
      <div className={classes.article_info}>
        <h3 className={classes.article_title}>
          {post.title}
        </h3>
        <h5>Category: {post.category}</h5>
        <time>{post.date}</time>
        <div className={classes.article_content}>
          <p>{post.smallText}</p>
          <Link href={`/posts/${post.category}/${post.slug}`}>
            <a>
              <span className={classes.article_more}>Читати ...</span>
            </a>
          </Link>
        </div>
      </div>  
    </article>
  )
}

export default Article;