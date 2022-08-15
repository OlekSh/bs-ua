import {useState, useEffect} from 'react';
import PostList from '../../post/post-list';



function PostWrap(props) {
  const [posts, setPosts] = useState([]);
  const [countAllPosts, setCountAllPosts] = useState(0);
  
  useEffect(() => {
    fetch(`/api/posts?page=${props.page || 1}&countOnPage=${props.countOnPage}`)
    .then(res => res.json())
    .then(data => {
      setPosts(data.posts);
      setCountAllPosts(data.countAllPosts)
    })
  },[props.page])

  return (
    <section className='container'>
      <h2>Hello Wrap Posts</h2>
      <h3>Page { props.page }</h3>
      <h3>Count { countAllPosts }</h3>
      <PostList 
        posts={posts} 
        countPostsOnPage={props.countOnPage} 
        count={countAllPosts}
      />
    </section>
  )
}

export default PostWrap;