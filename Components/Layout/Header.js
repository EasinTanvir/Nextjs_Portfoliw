import Link from 'next/link'
import Logo from './Logo'
import classes from './header.module.css'

export default function Header() {
  return (
   <header className={classes.header}>
      <Link href='/'><a><Logo /></a></Link> 
       <nav>
           <ul>
               <li><Link href='/posts'>Posts</Link></li>
               <li><Link href='/contact'>contact</Link></li>
           </ul>
       </nav>
   </header>
  )
}
