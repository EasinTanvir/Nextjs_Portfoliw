import Link from 'next/link'
import Image from 'next/image'
import classes from './postitem.module.css'



export default function PostItems(props) {

    const {title,image,excerpt,date,slug} = props;

    const humanDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const filepath = `/images/posts/${slug}/${image}`
    const linkpath = `posts/${slug}`


  return <li className={classes.post}>
<Link href={linkpath}>
    <a>
        <div  className={classes.image}>
    <Image src={filepath} alt={title} width={300} height={200} layout='responsive'/>
        </div>
        <div  className={classes.content}>
            <h3>{title}</h3>
            <time>{humanDate}</time>
            <p>{excerpt}</p>
        </div>
    </a>
</Link>
  </li>
   
  
}
