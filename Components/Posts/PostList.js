import PostItems from './PostItems';
import classes from './postlist.module.css'



export default function PostList(props) {
    const {posts} = props;
  return <ul className={classes.grid}>
  {posts.map((data)=><PostItems key={data.slug} title={data.title} image={data.image} excerpt={data.excerpt} slug={data.slug} date={data.date}/>)}
  </ul>
   
  
}
