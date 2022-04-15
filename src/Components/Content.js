import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import { useTranslation } from "react-i18next";
import appIcons from "../Data/appIcons.json";

const Content = () => {
  const { t } = useTranslation(["common"]);
  const { apNum } = useContext(Context);

  return (
    <div>
      {appIcons.map((el) => {
        return (
          <div key={el.name} className="row">
            <div className="row2">
              <div
                className="distanceIcons"
                style={{
                  marginTop: el.style === true && `${el.style}`,
                  backgroundImage: `url(${el.icon})`,
                }}
              ></div>
              <div>{`${t(el.name)}`}</div>
            </div>
            <div
              style={{
                backgroundImage:
                  (apNum === "2" && el.id === "Vesmasina") ||
                  (apNum === "2" && el.id === "Pecnica") ||
                  (apNum === "2" && el.id === "Sundjerica")
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

export default Content;
