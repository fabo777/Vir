import React, { useState, useEffect } from "react";
import "./App.css";
import { Context } from "./Components/Contexts/Context";
import RightContainer from "./Components/RightContainer";
import LeftContainer from "./Components/LeftContainer";
import i18n from "./i18n";

function debounce(fn, ms) {
  let timer;

  return (_) => {
    clearTimeout(timer);

    timer = setTimeout((_) => {
      timer = null;

      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [apNum, setApNum] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [kontakt, setKontakt] = useState(false);
  const [showImg, setShowImg] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

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
        showImg,
        setShowImg,
        weather,
        setWeather,
        isLoading,
        setIsLoading,
        dimensions,
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
