import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const fileDirectory = path.join(process.cwd(),'DataBase');

export function myDirectory(){

  return fs.readdirSync(fileDirectory);
}

export function getAllData(identify){
  const slugPaths  =  identify.replace(/\.md$/,'');
  const filepath = path.join(fileDirectory,`${slugPaths}.md`);
  const filesContent = fs.readFileSync(filepath);
  const {data,content} = matter(filesContent)

  

  const AllData = {
    slug:slugPaths,
    ...data,
    content
  }

  return AllData;
}

export function getAllPosts(){

 const allFiles = myDirectory()

 const finalData = allFiles.map((posts)=>{
   return getAllData(posts)
 })

 const mySlugs = finalData.sort((postA,postB)=>postA>postB?-1:1);
 return mySlugs

}

export function allFeaturedPosts(){

  const recData = getAllPosts();

  return recData.filter((data)=>data.isFeatured)

}


























