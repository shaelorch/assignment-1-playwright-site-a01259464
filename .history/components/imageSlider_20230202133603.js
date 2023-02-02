import react from "react";
import { SliderData } from "./sliderData";
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function ImageSlider() {

    const [current, setCurrent] = useState(0);
    
    return (
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} className={styles.slide} />
                )
            })}
        </div>
    )
}

