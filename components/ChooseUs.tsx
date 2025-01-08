import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export type ChooseUsType = {
  className?: string;
};

const ChooseUs: NextPage<ChooseUsType> = ({ className = "" }) => {
  const [isInView, setIsInView] = useState(false);
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);

  const sectionRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) setIsInView(entry.isIntersecting);
          if (entry.target === ref1.current) setIsInView1(entry.isIntersecting);
          if (entry.target === ref2.current) setIsInView2(entry.isIntersecting);
          if (entry.target === ref3.current) setIsInView3(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    [sectionRef, ref1, ref2, ref3].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const leftSideVariants = {
    hidden: { 
      opacity: 0, 
      x: -200,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 // Added delay similar to Careers
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 300,
      scale: 0.8
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + (i * 0.2), // Base delay of 0.3s plus 0.2s per item
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  };

  const items = [
    {
      ref: ref1,
      isVisible: isInView1,
      icon: "/logo.png",
      title: "Proven Expertise as a title",
      description: "Seasoned team across multiple disciplines with successful digital transformations experiences across the globe."
    },
    {
      ref: ref2,
      isVisible: isInView2,
      icon: "/group-1261156507.svg",
      title: "Value Delivered",
      description: "Beyond project delivery, a commitment to deliver measurable value according to your business objectives."
    },
    {
      ref: ref3,
      isVisible: isInView3,
      icon: "/group-1261156508.svg",
      title: "Continuous Innovation",
      description: "Pushing the boundaries of technology, challenging the status quo of what is possible."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="chooseUs"
      data-section="choose-us"
      className={`choose-us-section self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[1rem] box-border max-w-full text-left text-[3.375rem] text-gray-200 font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className} mq800:mt-[-2rem] mt-[-2rem] mq450:mt-[-0.5rem] mq900:p-[1.5rem]`}
    >
      <div className="flex-1 flex flex-row items-center justify-center gap-[5.437rem] max-w-full mq800:gap-[2.625rem] mq450:gap-[1.313rem] mq1350:gap-[5.188rem] mq1350:flex-wrap mq1050:flex-col">
        <motion.div
          variants={leftSideVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[24.438rem] max-w-full mq800:min-w-full mt-[-1rem] mq1050:mt-[2rem] mq1050:min-w-[100%] mq1050:items-center"
        >
          <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit inline-block max-w-full mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem] mq800:text-center">
            Why Choose Us
          </h1>
          <div className="relative text-[1.125rem] leading-[1.875rem] text-color-6 mq1050:flex mq1050:flex-col mq1050:items-center mq1050:justify-center mq1050:text-center">
            <p className="m-0 w-[80%] mq800:w-[100%]">
              DT Systems is a pure play ServiceNow partner in Southeast Asia
              with a sole focus on delivering maximum value capture for our
              enterprise customers. ServiceNow is an automated workflow solution
              that bridges the gap across multiple platforms.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 w-[80%] mq800:w-[100%]">{`We are a proven team with unparalleled expertise in Technology Operations, Full Stack App Development, Product Management, Customer Success, COE Operations, and Management & Process Consulting. ​​Our certified ServiceNow architects, developers, consultants, project managers, will deliver innovative frictionless solutions that enhance the ServiceNow experience.`}</p>
          </div>
        </motion.div>

        {/* Animation Items */}
        <div className="w-[33.25rem] flex flex-row items-end justify-start gap-[1.5rem] max-w-full text-[2rem] text-color-6 mq800:flex-wrap mq800:min-w-full mq1350:flex-1">
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem] pl-[2rem] mq900:pl-[1rem]">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                ref={item.ref}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={item.isVisible ? "visible" : "hidden"}
                className="flex-1 flex items-center justify-start gap-[1rem] mt-[2rem]"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                  loading="lazy"
                  width={93}
                  height={93}
                  alt=""
                  src={item.icon}
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                  <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                    {item.title}
                  </h2>
                  <div className="relative text-[1.125rem] leading-[1.875rem]">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
