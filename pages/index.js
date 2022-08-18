import Head from 'next/head';

import About from '../components/lyaout/about/about'
import Articles from '../components/lyaout/articles/articles'
import Introduction from '../components/lyaout/introduction/introduction'
import { getAllPostCategories, getPostsDataBySize } from '../lib/posts-util'

export default function Home({ categories, posts }) {

  return (
    <>
      <Head>
        <title>Головна сторінка</title>
      </Head>
      <Introduction />
      <About/>
      <Articles posts={posts}/>
    </>
  )
}

export function getStaticProps() {
  const categories = getAllPostCategories();
  const posts =  getPostsDataBySize(6);

  return {
    props: {
      categories,
      posts
    }
  }
}
