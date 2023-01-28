import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'

export default function Home() {
  return (<>
  
    <Menu />
  <div className={styles.homeContainer}>
    <Head>
      <title>Home</title>
      <meta name="author" content="MDIA 2109" />
      <meta property='og:title' content="Assignment #1 - Home Page" />
      <meta property='og:description' content='BCIT Digital Design and Development Diploma' />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main className={styles.main}>




      <h1>An investment in knowledge pays the best interest.</h1>

      <hr className='solid'></hr>

      <p>Different than a college or university, the British Columbia Institute of Technology offers practical,
        flexible, applied education with instructors who have direct,
        hands-on experience in their field.</p>

      <button name="More About Us">More About Us</button>
      <button name="Contact Us">Contact Us</button>

      <a>
        <button></button>
      </a>

      <a>
        <button></button>
      </a>

      <a>
        <span>
          <img />
        </span>
      </a>

    </main>

    <footer className={styles.footer}>

    </footer>
  
    
    
  </div></>
 
  )
}
