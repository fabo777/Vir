import React, { useContext } from "react";
import "./Weather.css";
import WeatherIcons from "../Data/WeatherIcons.json";
import { Context } from "./Contexts/Context";

const Weather = () => {
  const { weather, isLoading } = useContext(Context);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date}. ${month} ${year}`;
  };

  return (
    <div className="weatherContainer">
      <div className="weatherRow">Vir</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="weatherRow">{dateBuilder(new Date())}</div>
          <div className="weatherRow">
            <div className="mainWeather">
              <div>
                {WeatherIcons.filter(
                  (icon) =>
                    icon.name === weather.current_observation.condition.text
                ).map((icon) => (
                  <img
                    alt=""
                    style={{
                      paddingTop: "0.5rem",
                      width: "6rem",
                      height: "6rem",
                    }}
                    key={icon.id}
                    src={icon.url}
                  ></img>
                ))}
              </div>
              <div style={{ fontSize: "4rem" }}>
                {weather.current_observation.condition.temperature + "°"}
              </div>
              <div style={{ fontSize: "0.8rem", lineHeight: "1.5rem" }}>
                {weather.forecasts[0].high}° {weather.forecasts[0].low}°C
                <br />
                {weather.current_observation.condition.text}
                <br />
                Wind:
                <br />
                {weather.current_observation.wind.speed} km/h
                <br />
              </div>
            </div>
          </div>

          {
            <div className="wrapper">
              {weather.forecasts.map(
                (day, index) =>
                  index > 0 &&
                  index < 7 && (
                    <div key={index} className="column">
                      <div>{day.day}</div>
                      {WeatherIcons.filter(
                        (icon) => icon.name === day.text
                      ).map((icon) => (
                        <div key={icon.id}>
                          <img
                            alt=""
                            style={{ width: 40, height: 40 }}
                            key={icon.id}
                            src={icon.url}
                          ></img>
                        </div>
                      ))}
                      <div>
                        {day.high}° {day.low}°
                      </div>
                    </div>
                  )
              )}
            </div>
          }
        </>
      )}
    </div>
  );
};

export default Weather;
