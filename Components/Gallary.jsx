import React, { useState } from "react";
import "./Gallary.css";

import img1 from "../public/gallaryImgs/img1.jpg";
import img2 from "../public/gallaryImgs/img2.jpg";
import img3 from "../public/gallaryImgs/img3.jpg";
import img4 from "../public/gallaryImgs/img4.jpg";
import img5 from "../public/gallaryImgs/img5.jpg";
import img6 from "../public/gallaryImgs/img6.jpg";
import img7 from "../public/gallaryImgs/img7.jpg";
import img8 from "../public/gallaryImgs/img8.jpg";
import img9 from "../public/gallaryImgs/img9.jpg";
import img10 from "../public/gallaryImgs/img10.jpg";
import img11 from "../public/gallaryImgs/img11.jpg";
import img12 from "../public/gallaryImgs/img12.jpg";
import img13 from "../public/gallaryImgs/img13.jpg";
import img14 from "../public/gallaryImgs/img14.jpg";

export default function Gallary() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: "1", imgSrc: img1 },
    { id: "2", imgSrc: img2 },
    { id: "3", imgSrc: img3 },
    { id: "4", imgSrc: img4 },
    { id: "5", imgSrc: img5 },
    { id: "6", imgSrc: img6 },
    { id: "7", imgSrc: img7 },
    { id: "8", imgSrc: img8 },
    { id: "9", imgSrc: img9 },
    { id: "10", imgSrc: img10 },
    { id: "11", imgSrc: img11 },
    { id: "12", imgSrc: img12 },
    { id: "13", imgSrc: img13 },
    { id: "14", imgSrc: img14 },
  ];

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc); // Sets the clicked image
  };

  const closePopup = () => {
    setSelectedImage(null); // Closes the popup
  };

  return (
    <section className="gallaryPage">
      <h2 className="pageHeading">
        <b>Gallary</b>
      </h2>

      <div className="gallary">
        {images.map((item, idx) => (
          <div className="pic" key={idx} onClick={() => openImage(item.imgSrc)}>
            <img src={item.imgSrc} alt={`Gallery Image ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Popup for selected image */}
      {selectedImage && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </section>
  );
}
