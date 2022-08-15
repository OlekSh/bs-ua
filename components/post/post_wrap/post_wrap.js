import {useState, useEffect} from 'react';
import PostList from '../post-list';



function PostWrap(props) {
  const { page, countOnPage, category = null } = props; 
  const [posts, setPosts] = useState([]);
  const [countAllPosts, setCountAllPosts] = useState(0);
  const fetchUrl = category ? 
         `/api/posts/${category}?page=${page}&countOnPage=${countOnPage}` 
         : `/api/posts?page=${page || 1}&countOnPage=${countOnPage}`;

  console.log('@@@ ', fetchUrl);

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
      <h2>Hello Wrap Posts { category }</h2>
      <h3>Page { props.page }</h3>
      <h3>Count { countAllPosts }</h3>
      <PostList 
        posts={posts} 
        countPostsOnPage={props.countOnPage} 
        count={countAllPosts}
        category={category}
      />
    </section>
  )
}

export default PostWrap;