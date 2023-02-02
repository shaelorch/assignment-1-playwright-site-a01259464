import react from "react";
import { SliderData } from "./sliderData";
import styles from '../styles/Home.module.css'

export default function ImageSlider() {
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

