import type { NextPage } from "next";
import Image from "next/image";
import SectorRight from "./SectorRight";
import { useEffect, useState, useRef } from "react";

export type SectorType = {
  className?: string;
};

const Sector: NextPage<SectorType> = ({ className = "" }) => {
  const [style, setStyle] = useState({});
  const sectionRef = useRef<HTMLElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [isInSection, setIsInSection] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [hasReachedTop, setHasReachedTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setHasReachedTop(rect.top <= 0);
        setIsInSection(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWheel = (e: WheelEvent) => {
    if (!rightSectionRef.current || !hasReachedTop) return;

    const rightSection = rightSectionRef.current;
    const isAtBottom = Math.abs(
      rightSection.scrollHeight - rightSection.scrollTop - rightSection.clientHeight
    ) < 1;

    if (e.deltaY > 0) { // Scrolling down
      if (!isAtBottom) {
        e.preventDefault();
        rightSection.scrollTop += e.deltaY;
      } else if (!hasReachedBottom) {
        e.preventDefault();
        setHasReachedBottom(true);
      }
    } else { // Scrolling up
      if (rightSection.scrollTop > 0) {
        e.preventDefault();
        rightSection.scrollTop += e.deltaY;
      } else {
        setHasReachedBottom(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [hasReachedTop, hasReachedBottom]); // Updated dependency array

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 450) {
        setStyle({});
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
      ref={sectionRef}
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[4.375rem] pb-[0.25rem] box-border max-w-full text-left text-[3.375rem] text-gray-200 font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className} mq900:p-[1rem]`}
    >
      <div className="max-w-[1536px] self-stretch flex flex-row items-start justify-start box-border text-left text-[3.375rem] text-gray-200 font-archivo">
        <div className="flex-1 flex flex-row items-start justify-between gap-[6rem] max-w-full mq800:gap-[1.5rem] mq450:gap-[1rem]  mq1050:flex-col">
          <div className="w-[50%] flex flex-col items-start justify-start pt-[8.187rem] px-[0rem] pb-[0rem] box-border min-w-[24.438rem] max-w-full mq800:min-w-full mq450:pt-[5.313rem] mq450:box-border mq1050:pt-[0] mq1050:w-full mq1050:min-w-[100%] mq1050:items-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] mq1050:items-center ">
              <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem]">
                Sectors
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.187rem] text-[1.125rem] text-color-6 mq800:gap-[3rem]  mq1050:items-center gap-[3rem]">
                <div className="relative leading-[1.875rem] para mq1050:text-center w-[85%]">
                  Explore how DT Systems leverages ServiceNow to deliver tailored workflow automation solutions across IT, Healthcare, Financial Services, Retail, and Government sectors.
                </div>
                <a href="/sectors" style={{ textDecoration: "none" }}>
                  <button className="cursor-pointer [border:none] py-[1rem] pl-[2rem] pr-[1.937rem] bg-color rounded-8xs flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="h-[3.25rem] w-[14.813rem] relative rounded-8xs bg-color hidden" />
                    <div className="flex-1 relative text-[1.125rem] font-archivo text-white text-center z-[1]">
                      More About Sectors
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.362rem] px-[0rem] pb-[0rem]">
                      <Image
                        className="w-[0.375rem] h-[0.619rem] relative object-contain z-[1]"
                        width={6}
                        height={10}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            ref={rightSectionRef}
            style={{ resize: "none", scrollbarWidth: "none" }}
            className="w-[50%]  h-[36.5rem] overflow-y-auto flex flex-col gap-[1.5rem] max-w-full text-[2rem] text-color-5 mq1050:w-full  mq450:h-auto"
          >
            <div className="self-stretch flex flex-col  gap-[1.5rem] shrink-0 ">
              <SectorRight
                groupDivPadding="1.812rem 4.125rem"
                featureIconWithCircle="/Untitled design.png"
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                informationTechnology="Retail"
              />
              <SectorRight
                groupDivPadding="1.812rem 4.125rem"
                featureIconWithCircle="/feature-icon-with-circle-1.svg"
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                informationTechnology="Information Technology"
              />
              <SectorRight
                groupDivPadding="1.812rem 4.125rem"
                featureIconWithCircle="/feature-icon-with-circle-2.svg"
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                informationTechnology="Financial Services"
              />
              <SectorRight
                groupDivPadding="1.812rem 4.125rem"
                featureIconWithCircle="/feature-icon-with-circle-3.svg"
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                informationTechnology="Government"
              />
              <SectorRight
                groupDivPadding="1.812rem 4.125rem"
                featureIconWithCircle="/feature-icon-with-circle-4.svg"
                frameDivFlex="unset"
                frameDivMinWidth="unset"
                informationTechnology="Healthcare"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sector;
