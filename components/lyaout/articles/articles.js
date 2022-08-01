import { useState } from 'react';

import Pagination from '../pagination/pagination';
import Article from './article'
import classes from './articles.module.css';

function Articles(props) {
  const { posts } = props;  
  const [page, setPage] = useState(0);
  const [postsPage, setPostsPage] = useState(posts.slice  (0, 2).map((post,id) => (
       <Article post={post} key={id} />
    )));

  // function handlePage(num) {
  //   return () => {
  //     console.log('PAGE ' + num);
  //     setPostsPage(posts.slice(num, num + 2).map((post,id) => (
  //          <Article post={post} key={id} />
  //      )))
  //     setPage(num)
  //   }
  // }

  function handlePage(num) {
    return () => { 
      setPage(num);
      setPostsPage(posts.slice(num == 1 ? num-1 : (num * 2) - 2, num == 1 ? num + 1 : num * 2).map((post,id) => (
           <Article post={post} key={id} />
          )))
    }
  }

  return (
    <section className={classes.articles}>
      <div className={classes.articles_container}>
        {
        //  posts.slice(page, 6).map((post,id) => (
        //   <Article post={post} key={id} />
        // ))
        postsPage
        }
      </div>
        <h1 style={{color:'#fff'}}>PAGE {page}</h1>
        <Pagination
          len={posts.length / 2}
          handlePagination={handlePage}
        />
    </section>
  )
}

export default Articles;