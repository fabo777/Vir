import React, { useContext } from "react";
import { Context } from "./Contexts/Context";

const Sadrzaj = () => {
  const { apNum, apartmani } = useContext(Context);
  const ApIcons = [
    { name: "Klima uređaj", id: "Klima", icon: "/images/icons/Klima1.png" },
    { name: "WiFi", id: "WiFi", icon: "/images/icons/WiFi.png" },
    {
      name: "TV",
      id: "Tv",
      icon: "/images/icons/Tv1.png",
      style: "4rem",
    },
    {
      name: "Kuhalo za vodu",
      id: "Kuhalo",
      icon: "/images/icons/Kuhalo.png",
    },
    {
      name: "Mikrovalna peć",
      id: "Mikrovalna",
      icon: "/images/icons/Mikrovalna1.png",
    },
    {
      name: "Napa",
      id: "Napa",
      icon: "/images/icons/Napa.png",
    },
    {
      name: "Kuhinjska ploča",
      id: "Kuhinjskaploca",
      icon: "/images/icons/Kuhinjskaploca.png",
    },

    {
      name: "Pećnica",
      id: "Pecnica",
      icon: "/images/icons/Pecnica.png",
    },

    {
      name: "Perilica posuđa",
      id: "Sundjerica",
      icon: "/images/icons/Sundjerica.png",
    },
    {
      name: "Perilica rublja",
      id: "Vesmasina",
      icon: "/images/icons/Vesmasina.png",
    },
  ];
  return (
    <div>
      {ApIcons.map((el) => {
        return (
          <div className="row">
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
