import { useState } from "react";
import "../../css/components/Slideshow/style.css";

import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";

export default function Slideshow({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const imageCounter = `${currentImageIndex + 1}/${pictures.length}`;

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button className="slideshow_previous" onClick={goToPreviousImage}>
          <img className="slideshow_img" src={previous} alt="previous" />
        </button>
      )}
      <img className="slideshow_picture" src={pictures[currentImageIndex]} alt="Slideshow" />
      {pictures.length > 1 && (
        <button className="slideshow_next" onClick={goToNextImage}>
          <img className="slideshow_img" src={next} alt="next" />
        </button>
      )}
      {pictures.length > 1 && <p>{imageCounter}</p>}
    </div>
  );
}
