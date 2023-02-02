import react from "react";
import { SliderData } from "./sliderData";

const ImageSlider = () => {
    return (
        <div>
            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image}/>
                )
            })}
        </div>
    )
}

export default ImageSlider;