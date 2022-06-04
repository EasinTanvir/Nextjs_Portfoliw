import PostContent from "../../Components/PostDetails/PostContent";
import { getAllData, myDirectory } from "../../Helper/helper";



export default function PostDetails(props) {

  const {lists} = props
  return (
    <PostContent items={lists}/>
  )
}

export function getStaticProps(context){

  const {params} = context;
  const slugs = params.slug;
   const postData = getAllData(slugs)

   return {
     props:{
       lists:postData
     }
   }


}

export function getStaticPaths(){

  const recData = myDirectory();

  const slug = recData.map((posts)=>posts.replace(/\.md$/,''))

  return {
    paths : slug.map((data)=>({params:{slug:data}})),
    fallback:false
  }

}
