import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "./Contexts/Context";
import Header from "./Header";
import "./RightContainer.css";
import TransitionsModal from "./TransitionsModal";
import "./Header.css";
import "../App.css";
import Galerija from "./Galerija";
import Cover from "./Cover";
import Map from "./Map";

const RightContainer = () => {
  const { t } = useTranslation(["common"]);
  const { imgArr, count, apNum, apartmani, kontakt, width } =
    useContext(Context);

  return (
    <div className="rightContainer">
      <TransitionsModal />
      {width < 850 ? (
        <Cover />
      ) : kontakt === true ? (
        <Map />
      ) : apNum === 0 ? (
        <Cover />
      ) : (
        <Galerija />
      )}
    </div>
  );
};

export default RightContainer;
