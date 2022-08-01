import { useState } from 'react';

import Pagination from '../lyaout/pagination/pagination';
import PrePost from './pre-post';

import classes from './post-list.module.css'

function PostList(props) {
  const { posts } = props;
  const [ page, setPage ] = useState(0);
  const [ postsPage , setPostsPage ] = useState(posts.  slice  (0, 2).map((post,id) => (
           <PrePost post={post} key={id} />
        )));

  function handlePage(num) {
         return () => { 
           setPage(num);
           setPostsPage(posts.slice(num == 1 ? num-1 : (num * 2) - 2, num == 1 ? num + 1 : num * 2).map((post,id) => (
                <PrePost post={post} key={id} />
               )))
         }
       }

  return(
    <section className={classes.post_list}>
      <div className={classes.post_list_container}>
        {
          postsPage 
        }
        <Pagination 
          len={posts.length / 2}
          handlePagination={handlePage}
        />
      </div>
    </section>
  )
}

export default PostList;