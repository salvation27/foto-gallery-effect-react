import React from "react";

const GalleryItem = ({ item,hadlerClick }) => {
  return (
    <div className="gallery_item" onClick={()=>hadlerClick(item.img)}>
      <div className="gallery_item_foto">
          <img src={item.img} alt="" />
      </div>
      <div className="gallery_item_name" style={{textAlign:'center'}}>
          {item.name}
      </div>
    </div>
  );
};

export default GalleryItem;
