import React, { useContext } from "react";
/* import Fade from "react-reveal/Fade"; */
import { Context } from "./Contexts/Context";
import Header from "./Header";
/* import config from "react-reveal/globals"; */

const Cover = () => {
  const { imgArr, count } = useContext(Context);
  return (
    /*     <Fade ssrFadeout left> */
    <div
      className="bigImg"
      style={{
        backgroundImage: `url(/images/cover/${imgArr[count].img}.jpg)`,
      }}
    >
      <Header />
    </div>
    /*     </Fade> */
  );
};

export default Cover;
