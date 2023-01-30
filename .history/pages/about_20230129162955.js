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
          <h1>About Us</h1>
          <p>We are proud to deliver an education that goes beyond textbooks and classrooms.
          </p>
          <p>Our students gain the technical skills, real-world experience, and problem solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
          <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>

        </div>

        <div>
          <h1>Information Sessions</h1>
        </div>

        <div>
          <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
        </div>

        <div><h2>Big Info</h2></div>

        <div>
          <p>Big info is the largest program expo and information session at BCIT. It's your chance to find out about all of our programs - from business, computing, and health to engineering, trades and applied sciences.</p>
        </div>
        <div>
          <p>If you missed our fall event, the next Big info is scheduled to return on February 15, 2023.</p>
        </div>

        <div><h3></h3></div>
        
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

        <a href='/'>
          <span>
          <img src='/icons/upwardArrow.png' />
          </span>
        </a>

        <a href='/contact'>
          <span>
          <img src='/icons/downwardArrow.png' />
          </span>
        </a>

        



      </main>

      <footer className={styles.footer}>

      </footer>
    </div></>
  )
}
