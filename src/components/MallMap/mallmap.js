import { Outlet } from "react-router-dom";
import { useState } from 'react';
import data from "../../../utils/images.json";
import Modal from "./Modal";
import './mallmap.css'

const MallMap = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item.link);
    };
  
    const handelRotationRight = () => {
      const totalLength = data.data.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = data.data[0].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    const handelRotationLeft = () => {
      const totalLength = data.data.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = data.data[totalLength - 1].link;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].link;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    return (
    <>
      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="content" onClick={() => handleClick(item, index)}>
            <div class="content-overlay" ></div>
            <img
              src={item.link}
              alt={item.text}
              
              className="content-image"
            />
            <div class="content-details fadeIn-bottom">
                <h3 class="content-title">{item.text}</h3>
             </div>
          </div>


        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
        
      </div>
      <Outlet/>
      </>
    );
    
}
export default MallMap;

