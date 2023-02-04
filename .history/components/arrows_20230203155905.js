import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'



export default function ArrowKeys({
    uplink="/",
    dlink="/"
}) {

    return (
        <div className={styles.arrowCont}>
        <a href={uplink}>
        <span className={styles.arrowCont}>
        <img src='/icons/upwardArrow.png' style={{width:30, height:40, marginBottom:20}}/>
        </span>
      </a>
      <a href={dlink}>
        <span className={styles.arrowCont}>
        <img src='/icons/downwardArrow.png' style={{width:30, height:40}}/>
        </span>
      </a>
      </div>

    )
}