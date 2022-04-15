import React, { useState } from "react";
import "./App.css";
import { Context } from "./Components/Contexts/Context";
import RightContainer from "./Components/RightContainer";
import LeftContainer from "./Components/LeftContainer";
import i18n from "./i18n";

const App = () => {
  const [apNum, setApNum] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [kontakt, setKontakt] = useState(false);
  const [showImg, setShowImg] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  const ScreenSize = window.innerWidth;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <Context.Provider
      value={{
        apNum,
        setApNum,
        toggle,
        setToggle,
        open,
        setOpen,
        handleOpen,
        handleClose,
        kontakt,
        setKontakt,
        changeLanguage,
        ScreenSize,
        showImg,
        setShowImg,
        weather,
        setWeather,
        isLoading,
        setIsLoading,
      }}
    >
      <div className="App">
        <LeftContainer />
        <RightContainer />
      </div>
    </Context.Provider>
  );
};

export default App;
