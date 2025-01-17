import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export type ChooseUsType = {
  className?: string;
};

const ChooseUs: NextPage<ChooseUsType> = ({ className = "" }) => {
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === ref1.current) setIsInView1(true);
        if (entry.target === ref2.current) setIsInView2(true);
        if (entry.target === ref3.current) setIsInView3(true);
      } else {
        // Reset the state when the element is not visible anymore
        if (entry.target === ref1.current) setIsInView1(false);
        if (entry.target === ref2.current) setIsInView2(false);
        if (entry.target === ref3.current) setIsInView3(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Trigger when 20% of the element is visible
    });

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    if (ref3.current) observer.observe(ref3.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
      if (ref3.current) observer.unobserve(ref3.current);
    };
  }, []);

  return (
    <section
      id="chooseUs"

      data-section="choose-us"
      className={`choose-us-section self-stretch flex flex-row items-start justify-center pt-[0rem] px-[4.375rem] pb-[1rem] box-border text-left text-[3.375rem] text-gray-200 font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className} mq800:mt-[-2rem] mt-[-2rem] mq450:mt-[-0.5rem] mq900:p-[1.5rem]`}
    >
<div className="max-w-[1536px] self-stretch flex flex-row items-start justify-start box-border text-left text-[3.375rem] text-gray-200 font-archivo mq800:box-border">
      <div className="flex-1 flex flex-row items-center justify-between gap-[6rem] max-w-full mq800:gap-[1.5rem] mq450:gap-[1rem] mq1350:gap-[2rem] mq1350:flex-wrap mq1050:flex-col">
        <div className="w-[50%] flex flex-col items-start justify-start gap-[1rem] min-w-[24.438rem] max-w-full mq800:min-w-full mt-[2rem] mq1050:mt-[2rem] mq1050:min-w-[100%] mq1050:items-center">
          <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit inline-block max-w-full mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem] mq800:text-center">
            Why Choose Us
          </h1>
          <div className="relative text-[1.125rem] leading-[1.875rem] text-color-6 mq1050:flex mq1050:flex-col mq1050:items-center mq1050:justify-center mq1050:text-center">
            <p className="m-0 w-[100%] mq800:w-[100%]">
              DT Systems is a pure play ServiceNow partner in Southeast Asia
              with a sole focus on delivering maximum value capture for our
              enterprise customers. ServiceNow is an automated workflow solution
              that bridges the gap across multiple platforms.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 w-[100%] mq800:w-[100%]">{`We are a proven team with unparalleled expertise in Technology Operations, Full Stack App Development, Product Management, Customer Success, COE Operations, and Management & Process Consulting. ​​Our certified ServiceNow architects, developers, consultants, project managers, will deliver innovative frictionless solutions that enhance the ServiceNow experience.`}</p>
          </div>
        </div>

        {/* Animation Items */}
        <div className="w-[50%] flex flex-row items-end justify-start gap-[1.5rem] max-w-full text-[2rem] text-color-6 mq800:flex-wrap mq800:min-w-full mq1050:min-w-[70%] mq1350:flex-1">
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem] pl-[2rem] mq900:pl-[1rem]">
            {/* First Item */}
            <motion.div
              ref={ref1}  // Attach the first ref to this element
              className="flex-1 flex items-center justify-start gap-[1rem] mt-[2rem]"
              initial={{ opacity: 0, x: 100 }} // Initial state: opacity 0, position off-screen (right)
              animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 100 }} // Animate when in view
              transition={{ duration: 1.2, delay: 0.2 }} // 1.2s transition for slower motion, 0.2s delay
            >
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/logo.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Proven Expertise as a title
                </h2>
                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Seasoned team across multiple disciplines with successful digital transformations experiences across the globe.
                </div>
              </div>
            </motion.div>

            {/* Second Item */}
            <motion.div
              ref={ref2}  // Attach the second ref to this element
              className="flex-1 flex items-center justify-start gap-[1rem] mt-[2rem]"
              initial={{ opacity: 0, x: 100 }} // Initial state: opacity 0, position off-screen (right)
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 100 }} // Animate when in view
              transition={{ duration: 1.2, delay: 0.4 }} // 1.2s transition for slower motion, 0.4s delay
            >
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/group-1261156507.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Value Delivered
                </h2>
                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Beyond project delivery, a commitment to deliver measurable value according to your business objectives.
                </div>
              </div>
            </motion.div>

            {/* Third Item */}
            <motion.div
              ref={ref3}  // Attach the third ref to this element
              className="flex-1 flex items-center justify-start gap-[1rem] mt-[2rem]"
              initial={{ opacity: 0, x: 100 }} // Initial state: opacity 0, position off-screen (right)
              animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 100 }} // Animate when in view
              transition={{ duration: 1.2, delay: 0.6 }} // 1.2s transition for slower motion, 0.6s delay
            >
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/group-1261156508.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit inline-block max-w-full mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Continuous Innovation
                </h2>
                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Pushing the boundaries of technology, challenging the status quo of what is possible.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ChooseUs;
