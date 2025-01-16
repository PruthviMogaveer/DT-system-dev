import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type HerosType = {
  className?: string;
  teamworkWithBusinessPeople: string;
  heroTitle?: string;
  homeServiceAdvisory?: string;

  /** Style props */
  frameSectionWidth?: CSSProperties["width"];
  frameSectionAlignSelf?: CSSProperties["alignSelf"];
};

const Heros: NextPage<HerosType> = ({
  className = "",
  frameSectionWidth,
  frameSectionAlignSelf,
  teamworkWithBusinessPeople,
  heroTitle,
  homeServiceAdvisory,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      width: frameSectionWidth,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionWidth, frameSectionAlignSelf]);

  return (
    <section
      className="w-screen flex flex-row items-start justify-start pt-[0rem] pb-[4.5rem] box-border text-left text-[3.375rem] text-white font-archivo 
      mq800:pb-[2.938rem] mq800:box-border"
      style={frameSectionStyle}
    >
      <div className="w-full flex flex-row items-start justify-start relative">
        <Image
          className="h-[31.875rem] w-full relative overflow-hidden object-cover"
          loading="lazy"
          width={2000}
          height={510}
          alt=""
          src={teamworkWithBusinessPeople}
        />
        <div className="absolute w-full h-full top-0 left-0 flex items-end">
          <div className="max-w-[1536px] w-full mx-auto px-[4.375rem] pb-[4.875rem] 
          mq1325:px-[2rem] ">
            <h1 className="m-0 relative text-inherit leading-[3.5rem] font-bold font-inherit z-[2] 
            mq800:text-[2.688rem] mq800:leading-[2.813rem] 
            mq450:text-[2rem] mq450:leading-[2.125rem]">
              {heroTitle}
            </h1>
            <div className="relative text-[1rem] leading-[150%] mt-[0.5rem] z-[1]">
              {homeServiceAdvisory}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;
