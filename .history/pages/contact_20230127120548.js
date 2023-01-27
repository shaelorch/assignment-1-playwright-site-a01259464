import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
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
            <h1></h1>
        </div>

        <div>
            <p></p>
        </div>

        <div>
            <form>
              <fieldset>
                <table>
                  <thead>
                    First Name
                    <tr><input id="firstName" placeholder='first name'></input>
                    <thead>Last Name</thead>
                        <input id="lastName" placeholder='last name'></input> 
                   </tr>
                   <thead>
                    Email
                    <tr>
                    <input id="email" placeholder='email'></input>
                    </tr>
                    
                   </thead>
                    
                    
                  </thead>
                </table>

              </fieldset>
            </form>
        </div>

       =
       


       


    

        

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
