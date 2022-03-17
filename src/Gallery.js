import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
const Gallery = ({ data }) => {
  const [model, setModel] = useState(false);
  const [temp, setTemp] = useState("");
  const getImg = (img) => {
    setTemp(img);
    setModel(true);
  };
  const closeImg = () => {
    setTemp("");
    setModel(false);
  };
  return (
    <div className="container">
      {!model ? <h1>Gallery</h1> : null}
      <div>
        <div className={model ? "model open" : "model"}>
          <div className="close_btn" onClick={closeImg}>
            Закріть
          </div>

          <img src={temp} alt="" />
        </div>

        <div className="gall_wrap">
          {!model &&
            data.map((item) => (
              <GalleryItem hadlerClick={getImg} key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
