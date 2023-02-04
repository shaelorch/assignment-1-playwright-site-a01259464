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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (validEmail.test(email) & validFirstName.test(firstName) & validLastName.test(lastName)){
        setShowButton(true);
    }
  });



  useEffect(() => {
    
    if (!validEmail.test(email) & email.length > 1) {
      setEmailErr(true);
   }
   if (validEmail.test(email)) {
      setEmailErr(false);
      
   }
   if (!validFirstName.test(firstName) & firstName.length > 1) {
    setFirstNameErr(true);
 }
 if (validFirstName.test(firstName)) {
    setFirstNameErr(false);
 }
 if (!validLastName.test(lastName) & lastName.length > 1) {
  setLastNameErr(true);
}
if (validLastName.test(lastName)) {
  setLastNameErr(false);
}
   
});



 

  
  
  return ( 
    <><Menu /><div className={styles.contactContainer}>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Contact Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />


      </Head>

      <main className={styles.mainContact}>

      <div style={{display:'inline-block'}}>
          
          <h1 className={styles.hrLines}>Contact Us</h1>
        
        </div>

        <div>
          <p>Want to discuss? Lets chat!</p>
        </div>

        <div>
          <form className={styles.form}>
            <fieldset>
              <table className={styles.table}>
                
                  
                  <tr className={styles.row}>
                  <thead> First Name
                  <input id={styles.firstName}
                   placeholder='First Name Here'
                   type="first name" 
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}></input></thead>
                    <thead >Last Name
                    <input id={styles.lastName} 
                    placeholder='Last Name Here'
                    type="last name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}></input></thead>
                  </tr>
                  
                    <tr><thead>
                    Email
                      <input  id={styles.email} 
                      placeholder='Email Here'
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></input>
                      </thead></tr>

                


               
              </table>

            </fieldset>

            {showButton && <Link href='/'><button style={{display:'flex', marginRight:100%}}>Submit</button></Link>}
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
