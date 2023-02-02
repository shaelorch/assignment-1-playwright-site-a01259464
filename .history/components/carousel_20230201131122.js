import styles from '../styles/Home.module.css'
import Slider from './imageSlider';
import { useState } from 'react'

export default function Carousel() {

    const slides = [
        {url:"http://localhost:3000/0.jpg" },
        {url:"http://localhost:3000/1.jpg" },
        {url:"http://localhost:3000/2.jpg" },
        {url:"http://localhost:3000/3.jpg" },
        {url:"http://localhost:3000/4.jpg" },
        {url:"http://localhost:3000/5.jpg" }
    ];

    const containerStyles = {
        width: "100%",
        height:"200px",
        margin:"40px 0px",

    };

    return ( <div>

    </div>

    )
}

