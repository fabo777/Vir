import React, { useContext, useState } from "react";
import { Context } from "./Contexts/Context";
import "./Apartments.css";
import Sadrzaj from "./Sadrzaj";
import TransitionsModal from "./TransitionsModal";
import { useTranslation } from "react-i18next";
import Galerija from "./Galerija";

const Apartments = () => {
  const { t } = useTranslation(["common"]);
  const {
    apNum,
    apartmani,
    toggle,
    setToggle,
    active,
    setActive,
    open,
    setOpen,
    handleOpen,
    handleClose,
    kontakt,
    width,
  } = useContext(Context);

  const btnSadrzaj = {
    backgroundColor: active === 1 && "rgba(199, 225, 245, 1)",
  };
  const btnOpis = {
    backgroundColor: active === 2 && "rgba(199, 225, 245, 1)",
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
      <div style={{ width: "88%", margin: "5% auto 0 auto" }}>
        <div className="distance">
          <div className="row">
            <button
              onClick={() => {
                setToggle(false);
                setActive(1);
              }}
              className="Btns"
              style={btnSadrzaj}
            >
              {t("sadrzaj")}
            </button>
            <button
              onClick={() => {
                setToggle(true);
                setActive(2);
              }}
              className="Btns"
              style={btnOpis}
            >
              {t("opis")}
            </button>
          </div>
          {toggle === false ? (
            <Sadrzaj />
          ) : (
            <div className="Description">{apartmani[apNum - 1].text}</div>
          )}
        </div>
        {kontakt !== true && apNum !== 0 && width < 850 && <Galerija />}
        <button onClick={() => handleOpen()} className="Reserve">
          {t("provjeriDostupnost")}
        </button>
      </div>
    </div>
  );
};

export default Apartments;
