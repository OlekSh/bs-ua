import About from '../components/lyaout/about/about'
import Articles from '../components/lyaout/articles/articles'
import Contact from '../components/lyaout/contact/contact'
import Introduction from '../components/lyaout/introduction/introduction'
import { getAllPostCategories, getAllPostsData } from '../lib/posts-util'

export default function Home({ categories, posts }) {

  return (
    <>
      <Introduction />
      <About/>
      <Articles posts={posts}/>
      <Articles posts={posts}/>
      <Contact/>
      <ul>
        {categories.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export function getStaticProps() {
  const categories = getAllPostCategories();
  const posts =  getAllPostsData();

  return {
    props: {
      categories,
      posts
    }
  }
}
