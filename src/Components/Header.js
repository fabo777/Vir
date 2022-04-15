import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "./Contexts/Context";
import "./Header.css";

function Header() {
  const { t } = useTranslation(["common"]);
  const {
    kontakt,
    setKontakt,
    changeLanguage,
    weather,
    setWeather,
    isLoading,
    setIsLoading,
  } = useContext(Context);

  const Search = async () => {
    if (weather.length !== 0) {
      return weather;
    }

    const response = await fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=vir hrvatska&format=json&u=c`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_WEATHER_KEY}`,
        },
      }
    );
    const data = await response.json();
    setWeather(data);
    setIsLoading(!isLoading);
  };

  return (
    <div className="Header">
      <button
        className="HeaderBtn"
        onClick={() => {
          Search();
          setKontakt(!kontakt);
        }}
      >
        {t("kontakt")}
      </button>
      <button onClick={changeLanguage("hr")} className="HeaderBtn">
        HR
      </button>
      <button onClick={changeLanguage("en")} className="HeaderBtn">
        EN
      </button>
    </div>
  );
}

export default Header;
