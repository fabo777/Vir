import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Context } from "./Components/Contexts/Context";
import RightContainer from "./Components/RightContainer";
import LeftContainer from "./Components/LeftContainer";
import i18n from "./i18n";

const App = () => {
  const { t } = useTranslation(["common"]);
  const [apNum, setApNum] = useState(0);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [kontakt, setKontakt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  let imgArr = [{ img: "mol" }, { img: "kuca" }, { img: "more" }];
  let apartmani = [
    {
      name: "Apartman 1",
      id: 1,
      text: `${t("app1Text")}`,

      povrsina: `70m²`,
      brOsoba: 5,
      pictures: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Apartman 2",
      id: 2,
      text: `${t("app2Text")}`,
      povrsina: `28m²`,
      brOsoba: 4,
      pictures: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Apartman 3",
      id: 3,
      text: `${t("app3Text")}`,

      povrsina: `70m²`,
      brOsoba: 4,
      pictures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  return (
    <Context.Provider
      value={{
        apNum,
        setApNum,
        toggle,
        setToggle,
        apartmani,
        active,
        setActive,
        imgArr,
        count,
        open,
        setOpen,
        handleOpen,
        handleClose,
        kontakt,
        setKontakt,
        changeLanguage,
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
