import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import imgArr from "../Data/imgArr.json";
import "animate.css";

const Cover = () => {
  const { ScreenSize } = useContext(Context);
  const [coverFade, setCoverFade] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoverFade(false);
      setCount((prevCount) => (prevCount === 5 ? 0 : prevCount + 1));
      setTimeout(() => {
        setCoverFade(true);
      }, 2800);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fullRightSide">
      {ScreenSize > 850 && <Header />}
      <div className="ImageContainer">
        <div
          className={
            coverFade === true
              ? "bigImg animate__animated animate__fadeOut  animate__faster"
              : "bigImg animate__animated animate__fadeIn  "
          }
          style={{
            backgroundImage: `url(/images/cover/${imgArr[count].img}.jpg)`,
          }}
        >
          {ScreenSize < 850 && <Header />}
        </div>
      </div>
    </div>
  );
};

export default Cover;
