import React from "react";
import CommonHeading from "./CommonHeading";
import CommonPara from "./CommonPara";
import { useLocation } from "react-router-dom";
import Input from "../home/Input";
import ButtonTest from "../home/ButtonTest";

const Hero = () => {
  const location = useLocation().pathname;
  return (
    <div>
      <div className={`${location === "/"
        ? "flex items-center justify-center bg-red-500 min-h-screen flex-col rounded-es-[33px] rounded-b-[33px]"
        : "flex items-center justify-center bg-[#01A4FFBD] min-h-screen flex-col"}`}>
        <CommonHeading
          HeroHeading={"Lorem ipsum dolor sit amet consectetur. Sceleris"} />
        <CommonPara
          HeroText={"Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis."} />
        {location === "/" ? <Input /> : <ButtonTest />}
      </div>
    </div>
  );
};

export default Hero;