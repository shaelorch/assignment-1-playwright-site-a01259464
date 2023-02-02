import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from '../components/menu'
import { validEmail, validFirstName, validLastName } from './api/Regex.js';
import { useState } from 'react'
import { useEffect } from 'react'



export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  useEffect(() => {
    
    if (!validEmail.test(email)) {
      setEmailErr(true);
   }
   if (validEmail.test(email)) {
      setEmailErr(false);
   }
   if (!validFirstName.test(firstName)) {
    setFirstNameErr(true);
 }
 if (validFirstName.test(firstName)) {
    setFirstNameErr(false);
 }
 if (!validLastName.test(lastName)) {
  setLastNameErr(true);
}
if (validLastName.test(lastName)) {
  setLastNameErr(false);
}
   
});

function showButton(e) {
  if (setFirstNameErr(false) && setLastNameErr(false) && setEmailErr(false)){
    return 
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
                  <tr><input id={styles.firstName}
                   placeholder='First Name Here'
                   type="first name" 
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}></input>

                    <input id={styles.lastName} 
                    placeholder='Last Name Here'
                    type="last name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}></input>
                  </tr>
                  <thead>
                    Email
                    <tr>
                      <input  id={styles.email} 
                      placeholder='Email Here'
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></input>
                    </tr>

                  </thead>


                </thead>
              </table>

            </fieldset>

            
            {emailErr && <p style={{color:'red'}}>Your email is invalid!</p>}
            {firstNameErr && <p style={{color:'red'}}>First name error. First letter must be capital. Must use alphabets only.</p>}
            {lastNameErr && <p style={{color:'red'}}>Last name error. First letter must be capital. Must use alphabets only.</p>}
          </form>
        </div>

     










      </main>

      <footer className={styles.footer}>

      </footer>
    </div></>
  )
}
