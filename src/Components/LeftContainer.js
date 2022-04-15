import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import Home from "./Home";
import Apartments from "./Apartments";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import apartmani from "../Data/apartmani.json";

const LeftContainer = () => {
  const { t } = useTranslation(["common"]);
  const { apNum, setApNum, setToggle, kontakt } = useContext(Context);
  return (
    <div className="leftContainer">
      {kontakt === true ? (
        <Contact />
      ) : (
        <>
          <div className="mainContainer">
            <h1 className="title">{t("naslov")}</h1>

            <div>
              {apNum === 0 ? (
                <div style={{ marginTop: "1.7rem", marginBottom: "1.7rem" }}>
                  {t("odaberiApartman")}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setApNum(0);
                    setToggle(false);
                  }}
                  className="pocetna"
                >
                  {t("pocetna")}
                </button>
              )}
            </div>
            <div className="ApBtns">
              {apartmani.map((el) => {
                return (
                  <button
                    onClick={() => setApNum(el.id)}
                    key={el.id}
                    style={{ width: apNum === el.id && "6.81rem" }}
                    className="ApBtn"
                  >
                    {apNum !== el.id ? el.id : `${t("apartman")}` + el.id}
                  </button>
                );
              })}
            </div>
          </div>
          {apNum === 0 ? <Home /> : <Apartments />}
        </>
      )}
    </div>
  );
};

export default LeftContainer;
