import classes from './featuredposts.module.css'
import PostList from '../Posts/PostList';



export default function FeaturedPosts(props) {

  const {post} = props;

  return <section className={classes.latest}>
  <h2>Featured Posts</h2>
  <PostList posts={post}/>
  </section>
   
  
}
