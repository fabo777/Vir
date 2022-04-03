import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";

const Map = () => {
  const { width } = useContext(Context);
  return (
    <div className="kontaktImg">
      {width > 850 && <Header />}
      <a
        href={"https://goo.gl/maps/JkGWwdmofrwLNkeJ6"}
        target="_blank"
        className="kontaktImgHref"
      >
        <div className="clickable"></div>
      </a>
    </div>
  );
};

export default Map;
