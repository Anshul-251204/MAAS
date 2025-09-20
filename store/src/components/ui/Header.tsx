import React from "react";
import { Header as BentoHeader } from "@/themes/bento/Header";
import { Header as MinimalHeader} from "@/themes/minimal/Header"

const HeaderAccrodingToTheme = () => {
  const theme = "BENTO";

  return <>
  {theme == "BENTO" && <BentoHeader />}
  {/* {theme == "MINIMAL" && <MinimalHeader/>} */}
  </>;
};

export default HeaderAccrodingToTheme;
