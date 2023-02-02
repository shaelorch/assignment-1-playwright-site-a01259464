import react from "react";
import { SliderData } from "./sliderData";
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function ImageSlider({slides}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    console.log(current);

    let words = [
        {
            id : 0,
            value : "Achieve Excellence"
        },
        {
            id : 1,
            value : "Embrace Innovation"
        },
        {
            id : 2,
            value : "Champion Diversity"
        },
        {
            id : 3,
            value : "Pursue Collaboration"
        },
        {
            id: 4,
            value : "Engage With Respect"
        }
    ]

    const wordValue = words.map(word => {
        const container = {};

        container[word.id] = word.value;

        return container;
      })
      console.log(wordValue);

    if(!Array.isArray(slides) || slides.length <= 0){
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

