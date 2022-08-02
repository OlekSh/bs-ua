import Link from 'next/link';
import Article from './article'
import classes from './articles.module.css';

function Articles(props) {
  const {posts} = props
  return (
    <section className={classes.articles}>
      <div className={classes.articles_container}>
        {
          posts.map((post) => {
            return <Article post={post} key={post.id} />
          })
        }
      </div>
      <div className={classes.articles_more}>
        <Link href='/posts'><a>Читати більше ...</a></Link>
      </div>
    </section>
  )
}

export default Articles;