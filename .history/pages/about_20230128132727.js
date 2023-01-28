import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'


export default function About() {
  return (
    <><Menu /><div className={styles.container}>
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

        <div id={styles.carouselImage}>
          

          <div id={styles.testOnImageHere}>

          </div>

        </div>





        <ul>
          <li>Applied & Natural Sciences</li>
          <li>Business & Media</li>
          <li>Computing & IT</li>
          <li>Engineerin</li>
          <li>Health Sciences</li>
          <li>Trades & Apprenticeships</li>
        </ul>

        <a>
          <span>
          <img src='/icons/leftArrow.png' />
          </span>
        </a>

        <a>
          <span>
          <img src='/icons/rightArrow.png' />
          </span>
        </a>

        



      </main>

      <footer className={styles.footer}>

      </footer>
    </div></>
  )
}
