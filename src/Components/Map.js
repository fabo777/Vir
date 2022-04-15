import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";

const Map = () => {
  const { ScreenSize } = useContext(Context);
  return (
    <div className="fullRightSide">
      {ScreenSize > 850 && <Header />}
      <div className="ImageContainer">
        <div className="kontaktImg">
          <a
            rel="noreferrer"
            href={"https://goo.gl/maps/JkGWwdmofrwLNkeJ6"}
            target="_blank"
            className="kontaktImgHref"
          >
            <div className="clickable"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
