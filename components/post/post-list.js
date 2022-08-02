import { useState, useEffect } from 'react';

import Pagination from '../lyaout/pagination/pagination';
import PrePost from './pre-post';

import classes from './post-list.module.css'

function PostList(props) {
  const { posts } = props;
  const  postsCount = 4;
  const [ page, setPage ] = useState(1);
  const [ postsPage , setPostsPage ] = useState(
          posts.slice(0, postsCount).map((post) => (
           <PrePost post={post} key={post.id} />
         ))
        )

  function handlePage(num) {

         return () => setPage(num)
                
       }

    useEffect(() => {

      setPostsPage(posts.slice(
        page == 1 ? page - 1 : (page * postsCount) - postsCount, 
        page == 1 ? page + (postsCount-1) : page * postsCount
        ).map((post) => (
        <PrePost post={post} key={post.id} />
       )))

    },[page, posts])

    useEffect(() => {
      setPage(1);
    }, [props.posts])

  return(
    <section className={classes.post_list}>
      <div className={classes.post_list_container}>
        <h1>Page {page} </h1>
        {
          postsPage 
        }
        <Pagination 
          len={Math.ceil(posts.length / postsCount)}
          handlePagination={handlePage}
          activePage={page}
        />
      </div>
    </section>
  )
}

export default PostList;