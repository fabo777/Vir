import React, { useContext, useState } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import "./RightContainer.css";
import "../App.css";

const Galerija = () => {
  const {
    imgArr,
    count,
    apNum,
    apartmani,
    kontakt,
    width,
    showImg,
    setShowImg,
  } = useContext(Context);

  const galleryStyle = {
    backgroundImage: ` url(/images/Apartman${apNum}/${showImg}.JPG)`,
  };

  const prevPic = () => {
    if (showImg === 0) {
      return setShowImg(apartmani[apNum - 1].pictures.length - 1);
    } else {
      setShowImg(showImg - 1);
    }
  };
  const nextPic = () => {
    if (showImg === apartmani[apNum - 1].pictures.length - 1) {
      return setShowImg(0);
    } else {
      setShowImg(showImg + 1);
    }
  };

  return (
    <div className="gallery" style={galleryStyle}>
      {width > 850 && <Header />}
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
          className="galleryButton"
        ></button>
        <button
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
          onClick={() => nextPic()}
          className="galleryButton"
        ></button>
      </div>
    </div>
  );
};

export default Galerija;
