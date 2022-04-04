import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import { useTranslation } from "react-i18next";

const Sadrzaj = () => {
  const { t } = useTranslation(["common"]);
  const { apNum, apartmani } = useContext(Context);
  const ApIcons = [
    { name: `${t("klima")}`, id: "Klima", icon: "/images/icons/Klima1.png" },
    { name: "WiFi", id: "WiFi", icon: "/images/icons/WiFi.png" },
    {
      name: "TV",
      id: "Tv",
      icon: "/images/icons/Tv1.png",
      style: "4rem",
    },
    {
      name: `${t("kuhalo")}`,
      id: "Kuhalo",
      icon: "/images/icons/Kuhalo.png",
    },
    {
      name: `${t("mikrovalna")}`,
      id: "Mikrovalna",
      icon: "/images/icons/Mikrovalna1.png",
    },
    {
      name: `${t("napa")}`,
      id: "Napa",
      icon: "/images/icons/Napa.png",
    },
    {
      name: `${t("kuhinjskaPloca")}`,
      id: "Kuhinjskaploca",
      icon: "/images/icons/Kuhinjskaploca.png",
    },

    {
      name: `${t("pecnica")}`,
      id: "Pecnica",
      icon: "/images/icons/Pecnica.png",
    },

    {
      name: `${t("sudjerica")}`,
      id: "Sundjerica",
      icon: "/images/icons/Sundjerica.png",
    },
    {
      name: `${t("vesmasina")}`,
      id: "Vesmasina",
      icon: "/images/icons/Vesmasina.png",
    },
  ];
  return (
    <div>
      {ApIcons.map((el) => {
        return (
          <div key={el.name} className="row">
            <div className="row2">
              {/* <img src={el.icon} /> */}
              <div
                className="distanceIcons"
                style={{
                  marginTop: el.style === true && `${el.style}`,
                  backgroundImage: `url(${el.icon})`,
                }}
              ></div>
              <div>{el.name}</div>
            </div>
            <div
              style={{
                backgroundImage:
                  (apNum === 2 && el.id === "Vesmasina") ||
                  (apNum === 2 && el.id === "Pecnica") ||
                  (apNum === 2 && el.id === "Sundjerica")
                    ? "url(/images/icons/X.png)"
                    : "url(/images/icons/Check.png)",
                width: "1rem",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
                marginTop: "0.35rem",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Sadrzaj;
