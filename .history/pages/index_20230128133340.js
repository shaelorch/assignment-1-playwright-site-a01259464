import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'

export default function Home() {
  return (<>
  
    <Menu />
    
    <div className={styles.arrowCont}>
        <a href='/about'>
        <span>
        <img src='/icons/downwardArrow.png' style={{display:'flex', justifyContent:'right'}}/>
        </span>
      </a>
     </div>
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
      
      <hr className={styles.solid}></hr>
      

      <p>Different than a college or university, the British Columbia Institute of Technology offers practical,
        flexible, applied education with instructors who have direct,
        hands-on experience in their field.</p>

    

      <div className={styles.buttonCont}>
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
