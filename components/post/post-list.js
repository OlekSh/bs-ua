import { useState, useEffect } from 'react';

import Pagination from '../lyaout/pagination/pagination';
import PrePost from './pre-post';

import classes from './post-list.module.css'

function PostList(props) {
  const { posts, count, category } = props;
  const  postsOnPageCount = 4;
  const [ page, setPage ] = useState(1);

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
        <h1>Page {page} </h1>
        {
          posts.map((post) => (
            <PrePost post={post} key={post.id} />
           ))
        }
        <Pagination 
          len={Math.ceil(count / postsOnPageCount)}
          handlePagination={handlePage}
          activePage={page}
          category={category || ''}
          page={page}
        />
      </div>
    </section>
  )
}

export default PostList;