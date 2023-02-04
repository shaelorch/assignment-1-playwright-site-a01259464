import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'



export default function ArrowKeys({
    uplink="/",
    dlink="/"
}) {

    return (
        <div style={{position:'fixed', marginLeft:'85%', marginTop:'50%'}}>
        <a href={uplink}>
        <span className={styles.arrowCont}>
        <img src='/icons/upwardArrow.png' style={{width:40, height:50, marginBottom:60}}/>
        </span>
      </a>
      <a href={dlink}>
        <span className={styles.arrowCont}>
        <img src='/icons/downwardArrow.png' style={{width:40, height:50}}/>
        </span>
      </a>
      </div>

    )
}