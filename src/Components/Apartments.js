import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import "./Apartments.css";
import Content from "./Content";
import { useTranslation } from "react-i18next";
import Gallery from "./Gallery";
import apartmani from "../Data/apartmani.json";

const Apartments = () => {
  const { t } = useTranslation(["common"]);
  const { apNum, toggle, setToggle, handleOpen, kontakt, dimensions } =
    useContext(Context);

  const btnSadrzaj = {
    backgroundColor: !toggle && "rgba(199, 225, 245, 1)",
  };
  const btnOpis = {
    backgroundColor: toggle && "rgba(199, 225, 245, 1)",
  };

  return (
    <div>
      <div className="basicInfo">
        <div className="Half">
          <div className="roww">
            <div
              className="distanceIcons"
              style={{
                backgroundImage: "url(/images/icons/Povrsina.png)",
              }}
            ></div>
            <div> {t("povrsina")}</div>
          </div>
          <div>{apartmani[apNum - 1].povrsina}</div>
        </div>

        <div className="Half">
          <div className="roww">
            <div
              className="distanceIcons"
              style={{
                backgroundImage: "url(/images/icons/Osoba.png)",
              }}
            ></div>
            <div>{t("osoba")}</div>
          </div>
          <div>{apartmani[apNum - 1].brOsoba}</div>
        </div>
      </div>
      <div className="ApartmentsContainer">
        <div className="distance">
          <div className="row">
            <button
              onClick={() => setToggle(false)}
              className="Btns"
              style={btnSadrzaj}
            >
              {t("sadrzaj")}
            </button>
            <button
              onClick={() => setToggle(true)}
              className="Btns"
              style={btnOpis}
            >
              {t("opis")}
            </button>
          </div>
          {toggle === false ? (
            <Content />
          ) : (
            <div className="Description">
              {t(`${apartmani[apNum - 1].text}`)}
            </div>
          )}
        </div>
        {kontakt !== true && apNum !== 0 && dimensions.width < 850 && (
          <Gallery />
        )}
        <button onClick={() => handleOpen()} className="Reserve">
          {t("provjeriDostupnost")}
        </button>
      </div>
    </div>
  );
};

export default Apartments;
