/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Footer (){
    return(
          <footer className="my-3 pt-3 pb-3 text-muted text-center text-small bg-dark">
    <div className='width=100%'><Image src="/JELogoIcon.png" width={100} height={100} alt="JE LOGO" /><p className="mb-1">©2022 Jacovetti Entertainment LLC</p></div>        
    <ul className="list-inline">
      <li className="list-inline-item"><a href="/">Home</a></li>
      <li className="list-inline-item"><a href="/games">Games</a></li>
      <li className="list-inline-item"><a href="/about">Our Story</a></li>
      <li className="list-inline-item"><a href="/jobs">Careers</a></li>
      <li className="list-inline-item"><a href="/contact">Contact</a></li>
      <li className="list-inline-item"><a href="/privacy">Privacy</a></li>
    </ul>
  </footer>
    )
}