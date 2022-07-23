import Article from './article'
import classes from './articles.module.css';

const ids = [123, 34, 456, 2353, 1010];

function Articles(props) {
  const {posts } = props
  return (
    <section className={classes.articles}>
      <div className={classes.articles_container}>
        {posts.map((post,id) => (
          <Article post={post} key={id} />
        ))}
      </div>
    </section>
  )
}

export default Articles;