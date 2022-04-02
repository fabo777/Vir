import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = () => {
  const [isLoading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const weatherIcons = [
    {
      id: 1,
      name: "Cloudy",
      url: "//ssl.gstatic.com/onebox/weather/48/cloudy.png",
    },
    {
      id: 2,
      name: "Partly Cloudy",
      url: "//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    },
    {
      id: 3,
      name: "Mostly Cloudy",
      url: "https://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_day_dark_color_96dp.png",
    },
    {
      id: 4,
      name: "Sunny",
      url: "//ssl.gstatic.com/onebox/weather/48/sunny.png",
    },
    {
      id: 5,
      name: "Mostly Sunny",
      url: "//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    },
    {
      id: 6,
      name: "Scattered Showers",
      url: "//ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png",
    },
    {
      id: 7,
      name: "Breezy",
      url: "https://static.thenounproject.com/png/464687-200.png",
    },
    {
      id: 8,
      name: "Snow Showers",
      url: "//ssl.gstatic.com/onebox/weather/48/snow_light.png",
    },
    {
      id: 9,
      name: "Rain And Snow",
      url: "//ssl.gstatic.com/onebox/weather/48/snow_s_rain.png",
    },
    {
      id: 10,
      name: "Thunderstorms",
      url: "//ssl.gstatic.com/onebox/weather/48/thunderstorms.png",
    },
    {
      id: 11,
      name: "Rain",
      url: "//ssl.gstatic.com/onebox/weather/48/rain.png",
    },
    {
      id: 12,
      name: "Snow",
      url: "//ssl.gstatic.com/onebox/weather/48/snow.png",
    },
    {
      id: 13,
      name: "Clear",
      url: "//ssl.gstatic.com/onebox/weather/48/sunny.png",
    },

    {
      id: 14,
      name: "Mostly Clear",
      url: "//ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png",
    },
    {
      id: 15,
      name: "Showers",
      url: "//ssl.gstatic.com/onebox/weather/48/rain_light.png",
    },
    {
      id: 16,
      name: "Scattered Thunderstorms",
      url: "http://icon-park.com/imagefiles/simple_weather_icons_mixed_rain_and_thunderstorms.png",
    },
    {
      id: 17,
      name: "Windy",
      url: "https://static.thenounproject.com/png/464687-200.png",
    },
  ];

  const Search = async (searchValue) => {
    const response = await fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchValue}&format=json&u=c`,
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
    setLoading(false);
  };

  useEffect(() => {
    Search("vir hrvatska");
  }, []);

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
    <div className="weatherMain">
      <div className="weatherRow">Vir</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="weatherRow">{dateBuilder(new Date())}</div>
          <div className="weatherRow">
            <div className="mainWeather">
              <div>
                {weatherIcons
                  .filter(
                    (icon) =>
                      icon.name === weather.current_observation.condition.text
                  )
                  .map((icon) => (
                    <img
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
                      {weatherIcons
                        .filter((icon) => icon.name === day.text)
                        .map((icon) => (
                          <div key={icon.id}>
                            <img
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
