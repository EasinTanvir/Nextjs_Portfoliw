import FeaturedPosts from "../Components/HomePage/FeaturedPosts";
import Head from 'next/head';
import Homes from "../Components/HomePage/Home";
import { allFeaturedPosts} from "../Helper/helper";




export default function Home(props) {

  

  return (
    <div>
    <Head>
      <title>Easin Vlog</title>
      <meta name="description" content="I post about programming and web Development"/>
    </Head>
    <Homes />
    <FeaturedPosts post={props.lists}/>
    </div>
  )
}

export function getStaticProps(){

 const myposts = allFeaturedPosts()

  return {
    props:{

      lists:myposts

    }
  }
}