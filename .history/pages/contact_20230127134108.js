import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from '../components/menu'



export default function Contact() {
  return (
    <Menu/>
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Contact Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />


      </Head>

      <main className={styles.main}>

        <div>
            <h1>Contact Us</h1>
        </div>

        <div>
            <p>Want to discuss? Lets chat!</p>
        </div>

        <div>
            <form>
              <fieldset>
                <table>
                  <thead>
                    First Name
                    <tr><input id="firstName" placeholder='First Name Here'></input>
                    
                        <input id="lastName" placeholder='Last Name Here'></input> 
                   </tr>
                   <thead>
                    Email
                    <tr>
                    <input id="email" placeholder='Email Here'></input>
                    </tr>
                    
                   </thead>
                    
                    
                  </thead>
                </table>

              </fieldset>
              
              <button>
                <Link href="/">
                </Link>
              </button>
            </form>
        </div>

       =
       


       


    

        

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
