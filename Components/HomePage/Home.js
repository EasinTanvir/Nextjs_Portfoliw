import classes from './home.module.css';
import Image from 'next/image'

export default function Homes(){
  return (
    <section className={classes.hero}>
       <div  className={classes.image}>
         <Image src='/images/side/tanvir.jpg' alt='easintanvir' width={300} height={300}/>
       </div>
       <h1>Hi, I am Easin</h1>
       <p>I blog about web development - especially frontend frameworks like React or Angular</p>
   </section>
  )
}
