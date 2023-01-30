import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import ArrowKeys from '../components/arrows'



export default function About() {

  
    let words = [
        {
            id : 0,
            value : "Achieve Excellence"
        },
        {
            id : 1,
            value : "Embrace Innovation"
        },
        {
            id : 2,
            value : "Champion Diversity"
        },
        {
            id : 3,
            value : "Pursue Collaboration"
        },
        {
            id: 4,
            value : "Engage With Respect"
        }
    ]



        
  return (
    <><Menu /><div className={styles.container}>
      
      <ArrowKeys uplink='/' dlink='/contact'/>

      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - About Us Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />


      </Head>

      <main className={styles.main}>

        <div style={{display:'inline-block'}}>
          
          <h1 className={styles.hrLines}>About Us</h1>
        
        </div>

        <div>
          <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
        </div>

        <div>
          <p>Our students gain the technical skills, real-world experience, and problem solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
        </div>

        <div>
          <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
        </div>

        <div>
          <h2>Information Sessions</h2>
        </div>

        <div>
          <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
        </div>

        <div><h3>Big Info</h3></div>

        <div>
          <p>Big info is the largest program expo and information session at BCIT. It's your chance to find out about all of our programs - from business, computing, and health to engineering, trades and applied sciences.</p>
        </div>
        <div>
          <p>If you missed our fall event, the next Big info is scheduled to return on February 15, 2023.</p>
        </div>

        <div><h2>Campus Tours</h2></div>

        <div>
          <p>Tours runs weekdays September to Map, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
        </div>
       
      
        <div id={styles.carouselImage}>
            <div className={styles.slideImg}>
              <div className={styles.slide}>
                <img style={{height:200}} src="carousel-images/0.jpg"/>
              </div> 
              
            </div><div id={styles.testOnImageHere}>
             <p>{words.id}</p>
            </div>

            <div className={styles.slideImg}>
              <div className={styles.slide}>
                <img style={{height:200}} src="carousel-images/1.jpg"/>
              </div> 
              
            </div><div id={styles.testOnImageHere}>{words.value}</div>

            <div className={styles.slideImg}>
              <div className={styles.slide}>
                <img style={{height:200}} src="carousel-images/2.jpg"/>
              </div> 
              
            </div><div id={styles.testOnImageHere}>{words.value}</div>
            
            <div className={styles.slideImg}>
              <div className={styles.slide}>
                <img style={{height:200}} src="carousel-images/3.jpg"/>
              </div> 
              
            </div><div id={styles.testOnImageHere}>{words.value}</div>

            <div className={styles.slideImg}>
              <div className={styles.slide}>
                <img style={{height:200}} src="carousel-images/4.jpg"/>
              </div> 
              
            </div><div id={styles.testOnImageHere}>{words.value}</div>



           <div style={{position:'absolute'}} class="next">
            <a style={{marginRight:120}}>
              <img src='icons/leftArrow.png' style={{height:30, width:40}}/>
            </a>
            <a style={{marginLeft:120}}>
              <img src='icons/rightArrow.png' style={{height:30, width:40}}/>
            </a>
           </div>
            
        </div>
              
        
        <div style={{display:'inline-block'}}>
          
          <h1 className={styles.hrLines}>Departments</h1>
        
        </div>
         
        <div style={{display:'flex', justifyContent:'center', lineHeight:2}}>
          <ul>
          <p>Applied & Natural Sciences</p>
          <p>Business & Media</p>
          <p>Computing & IT</p>
          <p>Engineering</p>
          <p>Health Sciences</p>
          <p>Trades & Apprenticeships</p>
        </ul>
        </div>
        

      </main>

      <footer className={styles.footer}>

      </footer>
    </div></>
  )
}
