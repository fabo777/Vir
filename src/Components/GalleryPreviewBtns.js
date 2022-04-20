import React, { useContext, useEffect } from "react";
import apartmani from "../Data/apartmani.json";
import { Context } from "./Contexts/Context";
import "./RightContainer.css";
import "../App.css";
import "animate.css";

const GalleryPreviewBtns = ({ setFadeOut }) => {
  const { apNum, showImg, setShowImg } = useContext(Context);

  useEffect(() => {
    setShowImg(0);
  }, [apNum]);

  const prevPic = () => {
    setFadeOut("fadeOut");
    const timer = setTimeout(() => {
      if (showImg === 0) {
        setShowImg(apartmani[apNum - 1].pictures.length - 1);
        setFadeOut("fadeIn");
      } else {
        setShowImg(showImg - 1);
        setFadeOut("fadeIn");
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  const nextPic = () => {
    setFadeOut("fadeOut");
    const timer = setTimeout(() => {
      if (showImg === apartmani[apNum - 1].pictures.length - 1) {
        setShowImg(0);
        setFadeOut("fadeIn");
      } else {
        setShowImg(showImg + 1);
        setFadeOut("fadeIn");
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div className="galleryPreview">
      <button
        style={{
          backgroundImage: ` url(/images/Apartman${apNum}/${
            showImg === 0
              ? apartmani[apNum - 1].pictures.length - 1
              : showImg === apartmani[apNum - 1].pictures.length - 1
              ? apartmani[apNum - 1].pictures.length - 2
              : showImg - 1
          }.JPG)`,
        }}
        onClick={() => prevPic()}
        className="galleryButton "
      ></button>

      <button
        disabled
        style={{
          backgroundImage: ` url(/images/Apartman${apNum}/${showImg}.JPG)`,
        }}
        className="galleryButton"
      ></button>

      <button
        style={{
          backgroundImage: ` url(/images/Apartman${apNum}/${
            showImg === apartmani[apNum - 1].pictures.length - 1
              ? showImg - (apartmani[apNum - 1].pictures.length - 1)
              : showImg === 0
              ? showImg + 1
              : showImg + 1
          }.JPG)`,
        }}
        onClick={() => {
          nextPic();
        }}
        className="galleryButton"
      ></button>
    </div>
  );
};

export default GalleryPreviewBtns;
