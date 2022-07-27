import Link from 'next/link';
import Image from 'next/image';

import imgPlace from '../../public/images/posts/flatlay-on-world-map.jpg';

import classes from  './pre-post.module.css';

function PrePost(props) {
  const {post} = props;
  return (
    <section className={classes.prepost} >
      <Link href={`/posts/${post.category}/${post.slug}`}>
        <a>
          <div className={classes.prepost_container}>
          <div className={classes.prepost_img}>
            <Image 
              src={`/images/posts/${post.category}/${post.image}`}
              width={400}
              height={300}
              fill='responsive'
            />
          </div>
          <div className={classes.prepost_info }>
            <h2>{post.title}</h2>
            <h3>Category : {post.category}</h3>
            <time>{post.date}</time>
            <p>{post.smallText}</p>
          </div>
          </div>
        </a>
      </Link>
    </section>
  )
}

export default PrePost;