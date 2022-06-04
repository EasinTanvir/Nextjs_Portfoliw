import AllPosts from "../../Components/Posts/AllPosts";
import { getAllPosts} from "../../Helper/helper";
 

export default function AllPostPage(props) {

  const {posts} = props;
  
  return (
    <AllPosts items={posts}/>
  )
}

export function getStaticProps(){

const allposts = getAllPosts()

  return {
    props:{
  posts : allposts
    }
  }

}
