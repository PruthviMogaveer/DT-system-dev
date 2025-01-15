"use client"

import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export type DigitalTranspormationRoadmapType = {
  className?: string;
};

const DigitalTranspormationRoadmap: NextPage<
  DigitalTranspormationRoadmapType
> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
        : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  const [openAccordion, setOpenAccordion] = useState<number | null>(1); // Allow null and number

  const handleAccordionToggle = (index: number): void => {
    if (openAccordion !== index) {
      setOpenAccordion(index);
    }
  };
  const [style, setStyle] = useState({});
  const [div, setDiv] = useState({});
  const [secondDiv, setSecondDiv] = useState({})
  const [img, setImg] = useState({})
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setDiv({
          padding: "0",
          gap: "0.5rem"
        })
        setImg({
          height: "30%"
        })
        setSecondDiv({
          gap: "1rem",
          padding: "0"
        })
        setStyle({ width: "40%" }); // Corrected: Using an object for the style.

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


  const [sideImage, setSideImage] = useState("/futuristicnightcityscapeviewhongkong20241018062121utc-1@2x.png");

  const accordionData = [
    {
      id: 1,
      title: "Digital Transformation Roadmap",
      image: "/futuristicnightcityscapeviewhongkong20241018062121utc-1@2x.png",
      content: {
        heading: "Digital Transformation Roadmap",
        tags: "ITOM | ITAM | Risk | Procurement",
        description: [
          "We will analyze and develop a sustainable multi-phase digital transformation strategy to achieve your business goals.",
          "Our approach includes studying current process documentation, conducting collaborative cross-functional stakeholder workshops (i.e. Biz and IT) for clarifications, feedback, sharing of best practice insights, and prioritization of initiatives."
        ],
        benefits: [
          "Fast time to value",
          "Holistic proposal to achieve quick wins and medium-term initiatives"
        ]
      }
    },
    {
      id: 2,
      title: "Value Realisation",
      image: "/valueRealization.png",
      content: {
        heading: "Value Realisation",
        description: [
          "Construct business cases supporting investment in ServiceNow to achieve high-impact and sustainable outcomes.",
          "We will perform a Value Metrics analysis and strategy workshop to align observable value metrics to the overall business or project goals. During the process, we will also identify costs and timelines associated to determine ROI and a payback period.",
          "We will regularly monitor value realisation (actual Value Metrics versus those projected in the Value Metrics analysis) and provide recommendations (e.g. opportunities, risks, mitigating actions, etc.)."
        ],
        benefits: [
          "Improve Return on Investment obtainment and articulation",
          "Agile approach to achieving business goals",
          "Comprehensive Business Case supporting investment in ServiceNow platform capabilities"
        ]
      }
    },
    {
      id: 3,
      title: "Change Management",
      image: "/changeManagement.png",
      content: {
        heading: "Change Management",
        description: [
          "Successful implementations consist of people adopting a new way of working. The effort to drive this adoption however does not start after the project is delivered but throughout via a comprehensive change management plan consisting of user centric design, targeted stakeholder communication plan, tight feedback loops, targeted training, etc."
        ],
        benefits: [
          "Improve probability of adoption",
          "Drives value realisation",
          "Successful base case for future ServiceNow implementations"
        ]
      }
    },
    {
      id: 4,
      title: "Health Check",
      image: "/healthCheck.png",
      content: {
        heading: "Health Check",
        description: [
          "We will review & compare your existing ServiceNow implementation to best practices gleaned from multiple implementations we have delivered. You will receive identified quick wins and a prioritized improvement report"
        ],
        benefits: [
          "Optimise solution health, performance and scalability",
          "Improve maintainability by identifying unnecessary customisations and configurations"
        ]
      }
    }
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1226);
    };

    updateScreenSize(); // Set the initial state
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);


  // Add refs for scroll detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }}
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[9rem] box-border max-w-full text-left text-[1.5rem] text-color font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:pb-[3.813rem] mq1125:pb-[5.875rem] mq1125:box-border mq1226:ml-[-20px] mq1226:pl-0 mq900:pl-[3rem] mq550:mt-[5rem] mq900:pr-[0rem] ${className} `}
    >
        <div className="max-w-[1536px] mx-auto w-full ">

      <div className="flex-1 flex flex-row items-start justify-start gap-[5.875rem] max-w-full mq800:gap-[2.938rem] mq450:gap-[1.438rem] mq1325:flex-wrap">
        <Image
          style={img}
          className="w-[34.25rem] relative rounded-11xl max-h-full object-cover max-w-full mq1325:flex-1 mq1226:hidden"
          loading="lazy"
          width={548}
          height={834}
          alt=""
          src={sideImage}
        />

        <div
          className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[26.75rem] max-w-full mq800:min-w-full mq1226:pl-0"
          data-acc-group
          style={{
            width: '100%',
            paddingLeft: isSmallScreen ? '0' : undefined
          }}
        >
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: index * 0.4 }}
              style={{ width: '100%' }}
            >
              <div
                className="w-full h-auto flex flex-col items-start justify-start pt-0 px-0 pb-[1rem] box-border cursor-pointer gap-[1.5rem]
                  mq1325:w-full mq1325:gap-[1.25rem]
                  mq800:w-full mq800:gap-[1rem]
                  mq450:w-full mq450:gap-[0.75rem] "
                style={{
                  width: '100%',
                  minWidth: '100%',
                  maxWidth: '100%'
                }}
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={() => {
                  handleAccordionToggle(item.id);
                  setSideImage(item.image);
                }}
              >
                <motion.div
                  className="w-full h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border cursor-pointer
                  mq800:px-[1rem]
                  mq450:px-[0.5rem] p-[1rem]" style={{ padding: "1rem" }}
                  data-acc-header
                  onClick={() => handleAccordionToggle(item.id)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div
                    className={`w-full max-w-[21.063rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] ${openAccordion === item.id ? 'text-color-5' : 'text-color-6'
                      } text-left inline-block p-0 z-[10] whitespace-nowrap mq460:whitespace-normal break-words mq460:text-[1.2rem] mq460:leading-[2.5rem] mq400:leading-[2.5rem]`}
                  >
                    {item.title}
                  </div>


                  <motion.div
                    className="h-[1.813rem] w-[0.825rem] flex items-center justify-center"
                    animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1]"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </motion.div>
                </motion.div>



                <AnimatePresence>
                  {openAccordion === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 1, delay: 0.4 }
                      }}
                      className="w-full grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default"
                    >
                      {isSmallScreen && (
                        <div
                          className="w-[33.25rem] relative
                          mq1226:w-full mq1226:max-h-[400px]
                          mq800:max-h-[600px]
                          mq450:max-h-[800px]
                         
                          "
                        >
                          <Image
                            style={{
                              margin: 0,
                              marginTop: isSmallScreen ? "1rem" : "2rem",
                              marginLeft: isSmallScreen ? "0" : "1rem",
                              width: isSmallScreen ? "100%" : undefined,
                              height: isSmallScreen ? "20rem" : undefined,

                            }}
                            className="rounded-11xl object-cover img mq1226:w-[100%] mq1226:h-[10rem] advisoryImage"
                            loading="lazy"
                            width={532}
                            height={400}
                            alt=""
                            src={sideImage}
                          />
                        </div>
                      )}

                      <div style={div} className="flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5">
                        <motion.h1
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          className="w-[21.063rem] font-medium font-archivo text-[2rem] bg-[transparent] relative leading-[3.125rem] text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap mq550:text-[1.5rem] mq550:leading-[2.5rem] mq400:text-[1.2rem] mq400:leading-[2.5rem]"
                        >
                          {item.content.heading}
                        </motion.h1>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{ ...div }}
                        className="flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6"
                      >
                        <div className="flex flex-col items-start justify-start gap-[1rem]">
                          {item.content.tags && (
                            <div className="relative leading-[1.875rem]">
                              {item.content.tags}
                            </div>
                          )}
                          <div className="flex flex-col gap-[0.5rem]">
                            {item.content.description.map((desc, index) => (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex flex-col gap-[0.5rem]"
                              >
                                <div className="w-[37.75rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block mq800:w-[100%] mq400:w-[80%]" style={{ fontFamily: "Archivo" }}>
                                  {desc}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5 mq400:w-[80%]"
                          >
                            <div className="relative leading-[2.5rem] font-semibold mq450:text-[1.188rem] mq450:leading-[2rem]" style={{ fontFamily: "Archivo" }}>
                              Benefits
                            </div>
                            <div className="relative text-[1.125rem] leading-[150%] text-color-6">
                              <ul className="m-0 font-inherit text-inherit pl-[1.333rem]" style={{ fontFamily: "Archivo" }}>
                                {item.content.benefits.map((benefit, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 1,
                                      delay: 1.5 + index * 0.7,
                                      ease: [0.5, 0.3, 0.5, 1.3]
                                    }}
                                  >
                                    {benefit}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default DigitalTranspormationRoadmap;


