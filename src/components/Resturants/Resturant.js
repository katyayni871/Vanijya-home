import {slides} from "../../../utils/resturant.json"
import { useRef } from "react";
import './Resturant.css'
import righticon from '../../../images/arrow-point-to-right.png'
import lefticon from '../../../images/left-arrow.png'

export const Resturant = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 100; 


    return <div className="my-12 py-8 mx-auto w-4/5">
        <h2 className="text-5xl font-bold tracking-wide text-center">Top Resturants</h2>

        <div className="flex my-10 py-7">
            <button className="nav-btn"
                onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
            }}>
                <img src={lefticon}/>
            </button>
            <div className="images-container" ref={sliderRef}>
            {slides.map((image) => {
            return (
                <img
                className="image"
                alt="sliderImage"
                src={image?.src}/>
            );
             })}
        </div>
   
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}
      >
       <img src={righticon}/>
      </button>
    </div>
    <div className="my-10">
        <img src="https://res.cloudinary.com/dppkwpi0p/image/upload/v1716401821/shopping%20mall/xh8hos1w09bxk77m4mhc.png"/>
    </div>
    </div>
}