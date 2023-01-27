import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Menu() {
    
    return <div>
        <img src="/icons/menu-icon.png" style={{display: "absolute", height:30, width:30, top: 0, left:0, margin:20}}/>

        <div>
            <h1>X</h1>
            <ul>
                <li>Home
                    <Link href="/" ></Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            
        </div>


    </div>
        
        
        
        
       

    
}