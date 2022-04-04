import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "./Contexts/Context";
import "./Header.css";

function Header() {
  const { t } = useTranslation(["common"]);
  const { kontakt, setKontakt, apNum, changeLanguage } = useContext(Context);
  const kontaktStyle = {
    color: kontakt === true ? "black" : apNum !== 0 ? "black" : "white",
  };
  return (
    <div className="Header">
      <button
        className="HeaderBtn"
        style={kontaktStyle}
        onClick={() => setKontakt(!kontakt)}
      >
        {t("kontakt")}
      </button>
      <button
        onClick={changeLanguage("hr")}
        style={kontaktStyle}
        className="HeaderBtn"
      >
        HR
      </button>
      <button
        onClick={changeLanguage("en")}
        style={kontaktStyle}
        className="HeaderBtn"
      >
        EN
      </button>
    </div>
  );
}

export default Header;
