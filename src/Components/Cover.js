import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import imgArr from "../Data/imgArr.json";
import "./RightContainer.css";

const Cover = () => {
  const [coverFade, setCoverFade] = useState("fadeInCover");
  const [count, setCount] = useState(0);
  const { dimensions } = useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoverFade("fadeInCover");
      setCount((prevCount) => (prevCount === 5 ? 0 : prevCount + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoverFade("fadeOutCover");
    }, 2470);
    return () => {
      clearTimeout(timer);
    };
  }, [coverFade]);

  return (
    <div className="fullRightSide">
      {dimensions.width > 850 && <Header />}
      <div className="ImageContainer2">
        <div
          className={`${coverFade} bigImg`}
          style={{
            backgroundImage: `url(/images/cover/${imgArr[count].img}.JPG)`,
          }}
        >
          {dimensions.width < 850 && <Header />}
        </div>
      </div>
    </div>
  );
};

export default Cover;
