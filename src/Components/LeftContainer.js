import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import Home from "./Home";
import Apartments from "./Apartments";
import Kontakt from "./Kontakt";

const LeftContainer = () => {
  const {
    apNum,
    setApNum,
    apartmani,
    toggle,
    setToggle,
    active,
    setActive,
    open,
    setOpen,
    handleOpen,
    handleClose,
    kontakt,
    setKontakt,
  } = useContext(Context);
  return (
    <div className="leftContainer">
      {kontakt === true ? (
        <Kontakt />
      ) : (
        <>
          <div className="mainContainer">
            <h1 className="title">Apartmani Vesna</h1>

            <div>
              {apNum === 0 ? (
                <div style={{ marginTop: "1.7rem", marginBottom: "1.7rem" }}>
                  {" "}
                  Odaberi apartman:
                </div>
              ) : (
                <button
                  onClick={() => {
                    setApNum(0);
                    setActive(1);
                  }}
                  className="pocetna"
                >
                  {"< Početna"}
                </button>
              )}
            </div>
            <div className="ApBtns">
              {apartmani.map((el) => {
                return (
                  <button
                    onClick={() => setApNum(el.id)}
                    key={el.id}
                    style={{ width: apNum === el.id && "6.81rem" }}
                    className="ApBtn"
                  >
                    {apNum !== el.id ? el.id : "Apartman " + el.id}
                  </button>
                );
              })}
            </div>
          </div>
          {apNum === 0 ? <Home /> : <Apartments />}
        </>
      )}
    </div>
  );
};

export default LeftContainer;
