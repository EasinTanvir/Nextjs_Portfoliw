import classes from './allpost.module.css';
import PostList from './PostList';


export default function AllPosts(props) {
    const {items} = props
  return <section className={classes.posts}>
  <h1>All Posts</h1>
  <PostList posts={items}/>
  </section>
   
  
}
