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
        setCaption(caption === tlength - 1 ? 0 : caption + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setCaption(caption === 0 ? tlength - 1 : caption - 1)
    }

    console.log(current);
    console.log(caption)

    
    // const wordValue = Words.map(word => {
    //     const container = {};

    //     container[word.id] = word.value;

    //     return container;
    //   })
    //   console.log(wordValue);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    if(!Array.isArray(Words) || slides.length <= 0){
        return null;
    }

    {Words.map((word) => (
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

                {Words.map((word, index) => {
                return (
                    <div className={index === caption ? 'slide active' : 'slide'} key={index}>
                        {index === caption && (
                            <img src={slide.image} className={styles.slide} />
                        )}
                    </div>
                )
            })}

        </div>
    )
}

