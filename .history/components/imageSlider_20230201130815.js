import react from "react";
import {useState} from react;

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        </div>
    )
}