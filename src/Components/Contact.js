import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Weather from "./Weather";
import { Context } from "./Contexts/Context";
import Map from "./Map";
import kontaktArr from "../Data/kontaktArr.json";

const Contact = () => {
  const { t } = useTranslation(["common"]);
  const { setKontakt, kontakt, dimensions } = useContext(Context);

  const facebookLink = (
    <a
      rel="noreferrer"
      style={{ color: "black" }}
      href="https://www.facebook.com/apartmanivesnavir"
      target="_blank"
    >
      Apartmani Vesna Vir
    </a>
  );
  return (
    <>
      <div className="mainContainer">
        <h1 className="title">{t("naslov")}</h1>
        <button
          onClick={() => {
            setKontakt(false);
          }}
          className="pocetna"
        >
          {t("pocetna")}
        </button>

        <div className="distance" style={{ marginTop: "10%" }}>
          {kontaktArr.map((el) => {
            return (
              <div
                key={el.name}
                className="row"
                style={{ textAlign: "right", width: "90%" }}
              >
                <div className="row2">
                  <div
                    className="distanceIcons"
                    style={{
                      marginTop:
                        el.icon === "/images/icons/Email.png"
                          ? "0.3rem"
                          : "0.2rem",
                      backgroundImage: `url(${el.icon})`,
                    }}
                  ></div>
                  <div>{t(`${el.name}`)}</div>
                </div>
                <div>{el.value ? el.value : facebookLink}</div>
              </div>
            );
          })}
        </div>
        {kontakt === true && dimensions.width < 850 && <Map />}

        <Weather />
      </div>
    </>
  );
};

export default Contact;
