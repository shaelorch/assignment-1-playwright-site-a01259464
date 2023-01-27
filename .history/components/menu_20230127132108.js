import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'



export default function Menu() {

    const [showMenu, setShowMenu] = useState(false);


    const handleClickMenu = () => {
        setShowMenu(current => !current);
    }
  
    
    return <div style={{width:'100%'}}>
        <img src="/icons/menu-icon.png" onClick={handleClickMenu} style={{display: "absolute", height:30, width:30, top: 0, left:0, margin:20}}/>
        <img src="/icons/graduation-hat.png" style={{height:50, width:50, right:0}}/>
        <div style={{display: showMenu ? 'flex' : 'none'}}>
            
            <h1 onClick={handleClickMenu}>X</h1>
            <ul style={{display:'flex', flexDirection:'column'}}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </ul>

            
        </div>
        


    </div>
        
        
        
        
       

    
}