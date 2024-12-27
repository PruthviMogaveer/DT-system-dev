import type { NextPage } from "next";
import Image from "next/image";

export type CareersType = {
  className?: string;
};

const Careers: NextPage<CareersType> = ({ className = "" }) => {
  return (
    <section
      id="careers"
      data-section="careers"

      className={`careers-section self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.5rem] box-border max-w-full text-left text-[3.375rem] text-white font-archivo ${className}`}
    >
      <div className="flex-1 bg-color flex flex-col items-start justify-start pt-[5.5rem] px-[4.375rem] pb-[6.75rem] box-border relative gap-[1.5rem] max-w-full mq800:pt-[3.563rem] mq800:px-[2.188rem] mq800:pb-[4.375rem] mq800:box-border">

        <div className="w-[90rem] h-[42.688rem] relative bg-color hidden max-w-full z-[0]" />
        <div className="w-[33.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full mq1050:items-center mq1050:justify-center mq1050:w-[100%]">
          <div > <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit z-[2] mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem]">
            Careers
          </h1></div>
          <div className="relative text-[1.125rem] leading-[1.875rem] z-[2] mq1050:text-center">
            <p className="m-0">
              Are you an exceptional talent passionate about ServiceNow and
              looking for an exciting opportunity in the heart of Southeast
              Asia?
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              DT Systems is a rapidly growing company with a vibrant team
              culture and a commitment to excellence. We are constantly seeking
              talented individuals to join our team and help us transform
              businesses through innovative ServiceNow solutions.
            </p>
            <p className="m-0">​</p>
            <p className="m-0">
              If you are ready to embark on a rewarding career journey with a
              company that values your expertise and fosters your growth, we
              encourage you to get in touch with us today.
            </p>
          </div>

          <button className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-white rounded-8xs flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-100">
            <div className="h-[3.25rem] w-[10.313rem] relative rounded-8xs bg-white hidden" />
            <div className="flex-1 relative text-[1.125rem] font-archivo text-color text-center z-[1]">
              Get in Touch
            </div>
          </button>
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
          <Image
            className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] max-h-full w-[86.594rem] z-[1]"
            width={1386}
            height={683}
            alt=""
            src="/dots.svg"
          />
          <Image
            className="absolute h-full top-[0rem] bottom-[0rem] left-[45.5rem] max-h-full w-[44.5rem] object-cover z-[2] mq1050:hidden ml-[5rem]"
            width={712}
            height={683}
            alt=""
            src="/groupofcoworkersworkingtogetherandtalkingat20231127050146utc-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;