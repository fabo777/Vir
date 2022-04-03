import React, { useContext } from "react";
import { Context } from "./Contexts/Context";
import Header from "./Header";

const Cover = () => {
  const { imgArr, count } = useContext(Context);
  return (
    <div
      className="bigImg"
      style={{
        backgroundImage: `url(/images/cover/${imgArr[count].img}.jpg)`,
      }}
    >
      <Header />
    </div>
  );
};

export default Cover;
