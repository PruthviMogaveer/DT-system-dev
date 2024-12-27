import type { NextPage } from "next";
import ServicesLeft from "./ServicesLeft";
import ServicesRight from "./ServicesRight";
import { useState } from "react";
import { useEffect } from "react";

export type ServicesType = {
  className?: string;
};

const Services: NextPage<ServicesType> = ({ className = "" }) => {

  const [style, setStyle] = useState({})
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 900) {
        setStyle({
          padding: "1.5rem",
        })
      } else {
        setStyle({}); // Reset style for larger screens.
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
  return (
    <section
      id="services"
      data-section="services"
      style={style}
      className={`services bg-gray-100 flex flex-col items-start justify-start pt-[3.5rem] px-[4.375rem] pb-[5.5rem] box-border gap-[1.5rem] max-w-full text-left text-[3.375rem] text-gray-200 font-archivo mq800:pt-[2.25rem] mq800:px-[2.188rem] mq800:pb-[3.563rem] mq800:items-center mq800:box-border w-[100%] ${className} mq900:p-[1rem]`}
    >
      <div className="w-[90rem] h-[42.688rem] relative bg-gray-100 hidden max-w-full  " />
      <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit z-[1] mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem] mq800:text-center mq1050:m-auto mq1050:leading-[3.25rem]">
        Services
      </h1>
      <div className="flex flex-row items-start justify-start gap-[1rem] max-w-full text-[3rem] text-white  mq750:flex-wrap gap-[4rem] ">
        <ServicesLeft property1="Default" />
        <ServicesRight />
      </div>
    </section>
  );
};

export default Services;
