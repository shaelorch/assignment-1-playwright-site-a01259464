import react from "react";
import { SliderData } from "./sliderData";
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function ImageSlider({slides}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length

    return (
        <div>
             
            <a >
              <img className={styles.carouselButtonPrev} src='icons/leftArrow.png' style={{height:30, width:40}}/>
            </a>
            <a className={styles.carouselButtonNext}>
              <img  className={styles.carouselButtonNext} src='icons/rightArrow.png' style={{height:30, width:40}}/>
            </a>
          
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} className={styles.slide} />
                )
            })}
        </div>
    )
}

