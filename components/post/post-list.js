import { useState, useEffect } from 'react';

import Pagination from '../lyaout/pagination/pagination';
import PrePost from './pre-post';


import classes from './post-list.module.css'

function PostList(props) {
  const { posts, count, countPostsOnPage, category } = props
  const [ page, setPage ] = useState(1);
  const countPages = Math.ceil(count / countPostsOnPage) // numbers pages

  function handlePage(num) {

         return () => setPage(num)
                
       }

  useEffect(() => {  
    // work when link change category and path without ?page= begin new category from 1 page.
     
      if(props.page == 1) setPage(props.page)
     

  }, [props.page])


  return(
    <section className={classes.post_list}>
      <div className={classes.post_list_container}>
        <Pagination 
          len={countPages}
          handlePagination={handlePage}
          activePage={page}
          category={category || ''}
        />
        {
          posts.map((post) => (
            <PrePost key={post.id} post={post} />
           ))
        }
        <Pagination 
          len={countPages}
          handlePagination={handlePage}
          activePage={page}
          category={category || ''}
        />
      </div>
    </section>
  )
}

export default PostList;