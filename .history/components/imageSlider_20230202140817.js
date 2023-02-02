import react from "react";
import { SliderData } from "./sliderData";
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Words } from "./words";

export default function ImageSlider({slides}) {
    const [caption, setCaption] = useState(0);
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const tlength = Words.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    console.log(current);

    
    const wordValue = words.map(word => {
        const container = {};

        container[word.id] = word.value;

        return container;
      })
      console.log(wordValue);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    if(!Array.isArray(words) || slides.length <= 0){
        return null;
    }

    {words.map((word) => (
        <div key={word.id}>
        <p>{word.value}</p>
        </div>
      ))}

    return (
        <div>
             
           
              <img className={styles.carouselButtonPrev} src='icons/leftArrow.png' style={{height:30, width:40}} onClick={prevSlide} />
              <img  className={styles.carouselButtonNext} src='icons/rightArrow.png' style={{height:30, width:40}} onClick={nextSlide}/>
                {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} className={styles.slide} />

                        )}
                    </div>
                  
                )
            })}
        </div>
    )
}

