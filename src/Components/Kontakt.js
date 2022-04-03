import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Weather from "./Weather";
import { Context } from "./Contexts/Context";
import Map from "./Map";

const Kontakt = () => {
  const { t } = useTranslation(["common"]);
  const { setKontakt, kontakt, width } = useContext(Context);
  const kontaktArr = [
    {
      name: `${t("vlasnik")}`,
      value: "Željko Jerbić",
      icon: "/images/icons/Osoba.png",
    },
    {
      name: `${t("kontaktB")}`,
      value: "+385 99 3731 515 (Petra)",
      icon: "/images/icons/Kontakt.png",
    },
    {
      name: "E-mail: ",
      value: "petra@apartmani-vesna-vir.com.hr",
      icon: "/images/icons/Email.png",
    },
    {
      name: ":",
      value: (
        <a
          style={{ color: "black" }}
          href="https://www.facebook.com/apartmanivesnavir"
          target="_blank"
        >
          Apartmani Vesna Vir
        </a>
      ),
      icon: "/images/icons/Facebook.png",
    },
    {
      name: `${t("adresa")}`,
      value: "XXVIII Miljkovica 9, 23234 Otok Vir, Hrvatska",
      icon: "/images/icons/Adresa.png",
    },
  ];
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
                  <div>{el.name}</div>
                </div>
                <div>{el.value}</div>
              </div>
            );
          })}
        </div>
        {kontakt === true && width < 850 && <Map />}

        <Weather />
      </div>
    </>
  );
};

export default Kontakt;
