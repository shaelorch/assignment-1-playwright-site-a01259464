import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - About Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <div>
          <h1></h1>
        </div>

        <div>
          <h1></h1>
        </div>

        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p></p>
        </div>

        <div><h2></h2></div>
        <div><h2></h2></div>

        <div><h3></h3></div>
       
       <img src='public/icons/leftArrow.png'/>
       <img src='public/icons/rightArrow.png'/>
       
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
