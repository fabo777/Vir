import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import DistanceArr from "../Data/DistanceArr.json";

const Home = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="home">
      <div className="container">
        <div className="info">{t("oNama")}</div>
        <div className="distance">
          {DistanceArr.map((el) => {
            return (
              <div key={el.name} className="row">
                <div className="row2">
                  <div
                    className="distanceIcons"
                    style={{
                      backgroundImage: `url(${el.icon})`,
                    }}
                  ></div>
                  <div>{t(`${el.name}`)}</div>
                </div>
                <div>{el.distance}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
