import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import "./RightContainer.css";
import TransitionsModal from "./TransitionsModal";
import "./Header.css";
import "../App.css";
import Gallery from "./Gallery";
import Cover from "./Cover";
import Map from "./Map";

const RightContainer = () => {
  const { apNum, kontakt, ScreenSize } = useContext(Context);

  return (
    <div className="rightContainer">
      <TransitionsModal />
      {ScreenSize < 850 ? (
        <Cover />
      ) : kontakt === true ? (
        <Map />
      ) : apNum === 0 ? (
        <Cover />
      ) : (
        <Gallery />
      )}
    </div>
  );
};

export default RightContainer;
