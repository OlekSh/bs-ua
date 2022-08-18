import {useState, useEffect} from 'react';
import PostList from '../post-list';



function PostWrap(props) {
  const { page, countOnPage, category = null } = props; 
  const [posts, setPosts] = useState([]);
  const [countAllPosts, setCountAllPosts] = useState(0);
  const fetchUrl = category ? 
         `/api/posts/${category}?page=${page}&countOnPage=${countOnPage}` 
         : `/api/posts?page=${page || 1}&countOnPage=${countOnPage}`;


  useEffect(() => {
    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => {
      setPosts(data.posts);
      setCountAllPosts(data.countAllPosts)
    })
  },[props.page, props.category])

  return (
    <section className='container'>
      <PostList 
        posts={posts} 
        countPostsOnPage={countOnPage} 
        count={countAllPosts}
        category={category}
        page={page}
      />
    </section>
  )
}

export default PostWrap;