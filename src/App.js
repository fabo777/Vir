import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import Apartments from "./Components/Apartments";
import { Context } from "./Components/Contexts/Context";
import Header from "./Components/Header";
import RightContainer from "./Components/RightContainer";
import Kontakt from "./Components/Kontakt";
import LeftContainer from "./Components/LeftContainer";
import { Suspense } from "react";
import i18n from "./i18n";

const App = () => {
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
      text: "Apartman 1 se nalazi u prizemlju. Kategoriziran je kao 4+1, što znači da se u njega može smjestiti ukupno 5 osoba. Sastoji se od dnevne sobe sa krevetom na razvlačenje i blagovaonicom, dvije spavaće sobe (jedna sa bračnim krevetom, a druga sa dva odvojena kreveta), kuhinje, kupaonice i natkrivene terase. Od dodatnih sadržaja apartman ima klimu, Wi-Fi, perilicu posuđa, perilicu rublja, mikrovalnu pećnicu, pećnicu, kuhalo za vodu te TV uređaj. Svi dodatni sadržaji su besplatni.",

      povrsina: `70m²`,
      brOsoba: 5,
      pictures: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Apartman 2",
      id: 2,
      text: "Apartman 2 se nalazi u prizemlju, no njemu se prilazi sa zapadne strane kuće. Kategoriziran je kao 2+2, što znači da se u njega može smjestiti ukupno 4 osobe. Zbog manje površine, ali i mirnog okruženja idealan je za parove. Sastoji se od dnevne sobe sa krevetom na razvlačenje, jedne spavaće sobe sa dva odvojena kreveta, kuhinjom, kupaonicom te terasom. Od dodatnih sadržaja apartman ima klimu, Wi-Fi, mikrovalnu pećnicu, kuhalo za vodu i TV uređaj. Svi dodatni sadržaji su besplatni",
      povrsina: `28m²`,
      brOsoba: 4,
      pictures: [1, 2, 3, 4, 5, 6],
    },
    {
      name: "Apartman 3",
      id: 3,
      text: "Apartman 3 je smješten na katu kuće. Kategoriziran je kao 2+2, što znači da se u njega može smjestiti ukupno 4 osobe. Sastoji se od dnevne sobe koja je povezana sa blagovaonicom i kuhinjom, jedne velike spavaće sobe (koja sadrži jedan bračni krevet i dva odvojena kreveta), kupaonice i otvorene terase. Od dodatnih sadržaja apartman ima klimu, Wi-Fi, perilicu posuđa, perilicu rublja, mikrovalnu pećnicu, pećnicu, kuhalo za vodu te TV uređaj. Svi dodatni sadržaji su besplatni.",

      povrsina: `70m²`,
      brOsoba: 4,
      pictures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  return (
    <Suspense fallback={"Loading..."}>
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
    </Suspense>
  );
};

export default App;
