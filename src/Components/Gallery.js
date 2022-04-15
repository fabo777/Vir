import React, { useContext, useState } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import "./RightContainer.css";
import "../App.css";
import "animate.css";
import GalleryPreviewBtns from "./GalleryPreviewBtns";

const Gallery = () => {
  const { apNum, ScreenSize, showImg } = useContext(Context);
  const [fadeOut, setFadeOut] = useState(false);

  const galleryStyle = {
    backgroundImage: ` url(/images/Apartman${apNum}/${showImg}.JPG)`,
    overflow: "hidden",
  };

  return (
    <>
      <div className="fullRightSide">
        {ScreenSize > 850 && <Header />}
        <div className="ImageContainer">
          <div
            className={
              fadeOut === true
                ? "gallery animate__animated  animate__fadeOut   "
                : "gallery animate__animated  animate__fadeIn animate__fast"
            }
            style={galleryStyle}
          ></div>
        </div>
        {ScreenSize > 850 && <GalleryPreviewBtns setFadeOut={setFadeOut} />}
      </div>
      {ScreenSize < 850 && <GalleryPreviewBtns setFadeOut={setFadeOut} />}
    </>
  );
};

export default Gallery;
