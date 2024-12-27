import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({});



  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {

        setImgStyle({ marginLeft: "-1rem" });


      } else {

        setImgStyle({});

      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <footer
      className={`self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[5.5rem] px-[4.375rem] pb-[2.812rem] box-border gap-[2.062rem] max-w-full text-left text-[1.125rem] text-gray-300 font-archivo 
      lg:px-8 md:px-6 sm:px-4 
      md:pt-16 sm:pt-12
      md:pb-8 sm:pb-6
      max-[450px]:px-4
      max-[450px]:pt-10
      ${className}`}
    >
      <div className="w-full flex  justify-evenly gap-10 max-w-full  flex-wrap
        lg:gap-8 md:gap-10 sm:gap-10
        max-[450px]:gap-0 footer mq500:flex-col mq500:items-center mq500:gap-5rem">

        {/* First Column

        <div className="flex flex-col items-start justify-start gap-[1.706rem] text-[1rem] text-color-6 w-[20%] min-w-[200px] max-w-full">
          <Image
            className="w-[12.688rem] h-[1.469rem] relative z-[1] max-w-full"
            loading="lazy"
            width={203}
            height={24}
            alt=""
            src="/dt-systems-1.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="relative leading-[150%] z-[1] mq500:text-center">
              Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam
            </div>
            <div className="flex flex-row items-center gap-[0.737rem] z-[1] text-[0.781rem] text-gray-400 font-inter flex-wrap
            max-[450px]:gap-4 mq500:ml-[1rem] ">
              <Image
                className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/awnode-0dfbe7a0261a000265c522e86775eb316775eb1b.svg"
              />
              <Image
                style={{ border: "1px solid gray" }}
                className="h-[1.8rem] w-[1.8rem] relative rounded-13xl-1"
                loading="lazy"
                width={20}
                height={20}
                alt=""
                src="/frame.svg"
              />
              <Image
                className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/awnode-0dfbe7a0261a000265c522e86775eb346775eb1b.svg"
              />
              <Image
                className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/awnode-0dfbe7a0261a000265c522e86775eb376775eb1b.svg"
              />
            </div>
          </div>
        </div>

        {/* Second Column */}
        {/* <div className="flex flex-col items-start justify-start gap-[1.5rem] min-w-[150px] mq500:items-center">
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            About Us
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.968rem] text-color-6 mq500:items-center">
            <div className="relative leading-[1.875rem] z-[1]">Leadership Team</div>
            <a className="[text-decoration:none] relative leading-[1.875rem] text-[inherit] z-[1]">Careers</a>
            <div className="relative leading-[1.875rem] z-[1]">Partner Network</div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-[1.5rem] min-w-[150px] mq644:mt-[1rem] mq500:items-center">
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            Resources
          </div>
          <div className="flex flex-col items-start justify-start gap-[1rem] text-color-6 mq500:items-center">
            <div className="relative leading-[1.875rem] z-[1]">Blog</div>
            <div className="relative leading-[1.875rem] z-[1]">Case Studies</div>
          </div>
        </div>  */}


        {/* Third Column */}
        <div className="flex flex-col items-start justify-start gap-[1.5rem] min-w-[200px] mq644:items-center mq644:mt-[1rem] mq500:ml-[3rem] items-center mq500:ml-[2rem] " style={imgStyle}>
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            Get in Touch
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.25rem] text-color-6">
            <div className="flex flex-col items-start justify-start pt-[0.45rem]">
              <Image
                className="w-[1.125rem] h-[0.838rem] relative z-[1]"
                loading="lazy"
                width={18}
                height={13}
                alt=""
                src="/vector-6.svg"
              />
            </div>
            <div className="relative leading-[1.875rem] z-[1] break-all">
              info@dt-systems.asia
            </div>
          </div>
        </div>


        {/* Fourth Column */}
        <div className="flex flex-col items-start justify-start gap-[1.5rem] min-w-[150px] mq644:mt-[1rem] items-center ">
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            Address
          </div>
          <div className="relative leading-[1.875rem] text-color-6 z-[1] text-center">
            <p className="m-0">114 Lavender Street</p>
            <p className="m-0">#10-06/07</p>
            <p className="m-0">CT Hub 2</p>
            <p className="m-0">Singapore 338729.</p>
          </div>
        </div>

      </div >

      {/* Footer Divider */}
      < div className="w-full flex flex-col items-start justify-start gap-[1rem] text-color-6 mq460:ml-[2rem] mq430:ml-[1rem] mq400:ml-[-1rem]" >
        <Image
          className="w-full h-[1px] relative z-[1] object-cover"
          width={1300}
          height={1}
          alt=""
          src="/divider.svg"
        />
        <div className="w-full flex flex-row items-center justify-center gap-4 
          sm:flex-col sm:gap-2
          max-[450px]:text-sm
          max-[450px]:gap-4 mq800:flex-col">
          {/* <div className="relative leading-[160%] z-[1] text-center">
            © Copyright TechHarbor2024 All Rights Reserved
          </div> */}
          <div className="relative leading-[160%] z-[1] sm:text-sm text-center">
            © 2024 by DT-Systems.
          </div>
        </div>
      </ div>
    </footer >
  );
};

export default Footer;

