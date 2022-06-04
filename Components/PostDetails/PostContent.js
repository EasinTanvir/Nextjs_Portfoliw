import ReactMarkdown from 'react-markdown'
import classes from './content.module.css'
import PostHeader from './PostHeader'


export default function PostContent(props) {

  const {items} = props
    const imagepath=`/images/posts/${items.slug}/${items.image}`

  

  return <article className={classes.content}>
      <PostHeader title={items.title} image={imagepath}/>
      <ReactMarkdown >{items.content}</ReactMarkdown>
  </article>
   
  
}
