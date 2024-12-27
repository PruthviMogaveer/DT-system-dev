import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type SectorRightType = {
  className?: string;
  featureIconWithCircle: string;
  informationTechnology?: string;

  /** Style props */
  groupDivPadding?: CSSProperties["padding"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivMinWidth?: CSSProperties["minWidth"];
};

const SectorRight: NextPage<SectorRightType> = ({
  className = "",
  groupDivPadding,
  featureIconWithCircle,
  frameDivFlex,
  frameDivMinWidth,
  informationTechnology,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivFlex, frameDivMinWidth]);

  return (
    <div
      className={`self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start py-[1.812rem] pl-[4.125rem] pr-[2.437rem] box-border gap-[1rem] max-w-full text-left text-[2rem] text-color-5 font-archivo mq800:flex-wrap mq800:pl-[2.063rem] mq800:box-border icons ${className} `}
      style={{ padding: "1.7rem" }}
    >
      <div className="h-[8rem] w-[33.25rem] relative rounded-xl bg-gray-100 hidden max-w-full" />
      <Image
        className="h-[4.375rem] w-[4.375rem] relative rounded-81xl z-[1] ml-[2.5rem] img"
        loading="lazy"
        width={70}
        height={70}
        alt=""
        src={featureIconWithCircle}
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[13.875rem] max-w-full "
        style={frameDivStyle}
      >
        <h2 className="m-0 relative text-inherit leading-[3.5rem] capitalize font-medium font-inherit z-[1] mq800:text-[1.625rem] mq800:leading-[2.813rem] mq450:text-[1.188rem] mq450:leading-[2.125rem] mq400:text-center ">
          {informationTechnology}
        </h2>

      </div>
    </div>
  );
};

export default SectorRight;
