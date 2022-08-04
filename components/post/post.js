import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import classes from './post.module.css';

function ImagePath(category, path) {

    if(path.match(/https/)) {
     return path
    }
    return `/images/posts/${category}/${path}`
}

function Post(props) {
  const { post } = props;
 
  return (
    <section className={classes.post}>
      <div className={`${classes.post_container} container`}>
      <ReactMarkdown
        className={classes.post_content}
        components= {{
          img: ({node, ...props}) => {
            return (
                <Image 
                  src={ImagePath(post.category, node.properties.src)}
                  alt={node.properties.alt}
                  width={500}
                  height={300}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL='/images/blur.png'
                />
            )
          }
          // img:({node}) => {
          //   const imgPath = ImagePath(post.category, node.properties.src)
          //   return (
          //     <img 
          //       className={classes.post_img}
          //       src={imgPath}
          //       alt={node.properties.alt}
          //     />
          //   )
          // }
        }}
       >
        {post.content}
       </ReactMarkdown>
      </div>
    </section>
  )
}

export default Post;