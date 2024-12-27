import type { NextPage } from "next";
import Image from "next/image";

export type ServicesLeftType = {
  className?: string;
  /** Variant props */
  property1?: string;
};

const ServicesLeft: NextPage<ServicesLeftType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`h-[28.125rem] w-[40.125rem] flex flex-col items-start justify-end box-border relative text-left text-white font-archivo
      lg:h-[28.125rem] lg:w-[40.125rem] md:h-[24rem] md:w-[35rem] sm:h-[20rem] sm:w-full group ${className}`}
      data-property1={property1}
    >
      <div className="absolute inset-0 rounded-11xl overflow-hidden">
        {/* Image with responsive sizing */}
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            src="/mask-group@2x.png"
            alt="image"
            layout="fill" // Makes the image fill the parent container
            objectFit="cover" // Maintains aspect ratio and cover the area
          />
        </div>

        {/* Gradient Overlay */}
        <div className="w-full h-[13.606rem] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

        {/* Default Content */}
        <div className="absolute bottom-[1rem] left-[2rem] right-0 z-[2] p-4 flex flex-col gap-2 transition-opacity duration-300 group-hover:opacity-0">
          <h1 className="text-[3rem] font-bold sm:text-[2rem] m-0 leading-tight mq1050:text-[2rem] mq1050:ml-[-2rem]">
            Advisory
          </h1>
          <div className="flex items-center gap-2 text-color-4 mt-2 mq1050:ml-[-2rem]">
            <span className="text-[1.125rem] font-medium sm:text-[1rem]">Learn More</span>
            <Image
              className="w-[0.375rem] h-auto relative"
              loading="lazy"
              width={6}
              height={10}
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-8 z-[3] opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:scale-105 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-[#1E3A2F]/90 group-hover:p-10">
          <h1 className="text-[3rem] font-bold leading-[1.2] sm:text-[2rem] m-0 mq1050:text-[2rem]">
            Advisory
          </h1>
          <p className="text-[1.2rem] leading-[1.875rem] sm:text-[1rem] m-0 mq1050:text-[1rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, vero autem consequatur sapiente repellendus inventore commodi repellat illo iste animi eaque consequuntur, illum vitae officiis est alias optio voluptatibus similique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLeft;
