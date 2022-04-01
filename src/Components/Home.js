import React from "react";
import "./Home.css";

const Home = () => {
  const distanceArr = [
    { name: "Plaža", icon: "/images/icons/Plaza.png", distance: "70m" },
    { name: "Bar", icon: "/images/icons/Bar.png", distance: "90m" },
    { name: "Restoran", icon: "/images/icons/Restoran.png", distance: "100m" },
    { name: "Trgovina", icon: "/images/icons/Trgovina.png", distance: "250m" },
    { name: "Centar", icon: "/images/icons/Centar.png", distance: "2km" },
    { name: "Pošta", icon: "/images/icons/Posta.png", distance: "3km" },
    {
      name: "Autobusni Kolodvor",
      icon: "/images/icons/Autobusni.png",
      distance: "3km",
    },
  ];
  return (
    <div className="home">
      <div className="container">
        <div className="info">
          Smješteni smo 25 km od Zadra, na južnoj strani otoka Vira. Imamo tri
          apartmana koja se nalaze u jednoj kući, no sva tri su u potpunosti
          odvojena. Parking se nalazi ispred kuće i besplatan je, a na
          raspolaganju Vam je i roštilj. Udaljenost apartmana od plaže je 70
          metara. Plaža je šljunčana i pogodna za djecu.
        </div>
        <div className="distance">
          {distanceArr.map((el) => {
            return (
              <div key={el.name} className="row">
                <div className="row2">
                  <div
                    className="distanceIcons"
                    style={{
                      backgroundImage: `url(${el.icon})`,
                    }}
                  ></div>
                  <div>{el.name}</div>
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
