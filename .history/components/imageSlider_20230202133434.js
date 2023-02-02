import react from "react";
import { SliderData } from "./sliderData";

export default function ImageSlider() {
    return (
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} className={slide} />
                )
            })}
        </div>
    )
}

