import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from '../components/menu'
import { validEmail, validPassword } from './api/Regex.js';
import { useState } from 'react'
import { useEffect } from 'react'



export default function Contact() {

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
   }
   if (!validPassword.test(password)) {
      setPwdError(true);
   }
  };

  function onChange(e) {
    setEmail(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      validate();
    }
  }

  
  
  return ( 
    <><Menu /><div className={styles.contactContainer}>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Contact Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />


      </Head>

      <main className={styles.mainContent}>

      <div style={{display:'inline-block'}}>
          
          <h1 className={styles.hrLines}>Contact Us</h1>
        
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
                  <tr><input id={styles.firstName} placeholder='First Name Here'></input>

                    <input id={styles.lastName} placeholder='Last Name Here'></input>
                  </tr>
                  <thead>
                    Email
                    <tr>
                      <input  id={styles.email} 
                      placeholder='Email Here'
                      type="email" 
                      value={email}
                      onChange={onChange}
                      handleKeyDown={handleKeyDown}></input>
                    </tr>

                  </thead>


                </thead>
              </table>

            </fieldset>
{/* 
            <Link href="/">
            <button style={{display:'none'}}>Submit
              
            </button>  </Link> */}
            {emailErr && <p style={{color:'red'}}>Your email is invalid!</p>}
          </form>
        </div>

     










      </main>

      <footer className={styles.footer}>

      </footer>
    </div></>
  )
}
