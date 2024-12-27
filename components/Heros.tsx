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
      className={`w-[111.95rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.5rem] box-border max-w-[125%] text-left text-[3.375rem] text-white font-archivo mq800:pb-[2.938rem] mq800:box-border ${className}`}
      style={frameSectionStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <Image
          className="h-[31.875rem] w-[100%] flex-1 relative max-w-full overflow-hidden object-cover "
          loading="lazy"
          width={2000}
          height={510}
          alt=""
          src={teamworkWithBusinessPeople}
        />
        <div className="!m-[0] absolute bottom-[4.875rem] left-[4.375rem] flex flex-col items-start justify-start mq800:left-[1.5rem]" style={{
          position: "absolute",

        }}>
          <h1 className="m-0 relative text-inherit leading-[3.5rem] font-bold font-inherit z-[2] mq800:text-[2.688rem] mq800:leading-[2.813rem] mq450:text-[2rem] mq450:leading-[2.125rem]">
            {heroTitle}
          </h1>
          <div className="relative text-[1rem] leading-[150%] z-[1]">
            {homeServiceAdvisory}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;
