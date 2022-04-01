import React, { useContext } from "react";
import Weather from "./Weather";
import { Context } from "./Contexts/Context";

const Kontakt = () => {
  const { setKontakt } = useContext(Context);
  const kontaktArr = [
    {
      name: "Vlasnik: ",
      value: "Željko Jerbić",
      icon: "/images/icons/Osoba.png",
    },
    {
      name: "Kontakt: ",
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
      name: "Adresa: ",
      value: "XXVIII Miljkovica 9, 23234 Otok Vir, Hrvatska",
      icon: "/images/icons/Adresa.png",
    },
  ];
  return (
    <>
      <div className="mainContainer">
        <h1 className="title">Apartmani Vesna</h1>
        <button
          onClick={() => {
            /* setApNum(0);
          setActive(1); */
            setKontakt(false);
          }}
          className="pocetna"
        >
          {"< Početna"}
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
        <Weather />
      </div>
    </>
  );
};

export default Kontakt;
