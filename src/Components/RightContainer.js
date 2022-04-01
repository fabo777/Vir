import React, { useState, useContext } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import "./RightContainer.css";
import TransitionsModal from "./TransitionsModal";
import "./Header.css";
import "../App.css";
import { display } from "@mui/system";

const RightContainer = () => {
  const { imgArr, count, apNum, apartmani, kontakt } = useContext(Context);
  const [showImg, setShowImg] = useState(0);

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
    <div className="rightContainer">
      <TransitionsModal />
      {kontakt === true ? (
        <div className="kontaktImg">
          <Header />
          <a
            href={"https://goo.gl/maps/JkGWwdmofrwLNkeJ6"}
            target="_blank"
            className="kontaktImgHref"
          >
            <div className="clickable"></div>
          </a>
        </div>
      ) : apNum === 0 ? (
        <div
          className="bigImg"
          style={{
            backgroundImage: `url(/images/cover/${imgArr[count].img}.jpg)`,
          }}
        >
          <Header />
        </div>
      ) : (
        <div className="gallery" style={galleryStyle}>
          <Header />
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
      )}
    </div>
  );
};

export default RightContainer;
