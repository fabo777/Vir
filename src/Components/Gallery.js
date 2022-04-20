import React, { useContext, useState } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import GalleryPreviewBtns from "./GalleryPreviewBtns";
import "./RightContainer.css";
import "../App.css";

const Gallery = () => {
  const { apNum, showImg, dimensions } = useContext(Context);
  const [fadeOut, setFadeOut] = useState("fadeIn");

  const galleryStyle = {
    backgroundImage: ` url(/images/Apartman${apNum}/${showImg}.JPG)`,
  };

  return (
    <>
      <div className="fullRightSide">
        {dimensions.width > 850 && <Header />}
        <div className="ImageContainer">
          <div className={`${fadeOut} gallery`} style={galleryStyle}></div>
        </div>
        {dimensions.width > 850 && (
          <GalleryPreviewBtns setFadeOut={setFadeOut} />
        )}
      </div>
      {dimensions.width < 850 && <GalleryPreviewBtns setFadeOut={setFadeOut} />}
    </>
  );
};

export default Gallery;
