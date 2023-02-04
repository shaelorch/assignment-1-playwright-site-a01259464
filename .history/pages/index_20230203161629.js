import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'

export default function Home() {
  return (<>
  
    <Menu />
    
    
      <a href='/about'>
        <span className={styles.arrowCont}>
        <img src='/icons/downwardArrow.png' style={{width:30, height:40}}/>
        </span>
      </a>
  <div className={styles.homeContainer}>

      
    <Head>
      <title>Home</title>
      <meta name="author" content="MDIA 2109" />
      <meta property='og:title' content="Assignment #1 - Home Page" />
      <meta property='og:description' content='BCIT Digital Design and Development Diploma' />
      <link rel="icon" href="/favicon.png" />
    </Head>
    
    <main className={styles.mainHome}>



    
      <h1>An investment in knowledge pays the best interest.</h1>
      
      <hr className={styles.solid}></hr>
      

      <p>Different than a college or university, the British Columbia Institute of Technology offers practical,
        flexible, applied education with instructors who have direct,
        hands-on experience in their field.</p>

    

      <div className={styles.hbuttonCont}>
         <a href='/about'>
          <button className={styles.button} name="More About Us">More About Us</button>
          </a>

          <a href='/contact'>
          <button className={styles.button} name="Contact Us">Contact Us</button>
          </a>

        
      </div>
         
     
    

    </main>

    <footer className={styles.footer}>

    </footer>
  
    
    
  </div></>
 
  )
}
