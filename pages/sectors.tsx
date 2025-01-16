"use client";

import type { NextPage } from "next";
import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import NavbarPage from "../components/Navbar";
import Footer from "../components/Footer";
import Heros from "../components/Heros"; // Change this import

// Define the sector data structure
interface SectorData {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
  benefits: string[];
}

const SectorData = [
  {
    id: 1,
    title: "Information Technology (IT)",
    image: "/Rectangle 23800.png",
    heading: "Accelerate Digital Transformation in IT",
    description:
      "IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance.",
    benefits: [
      "Improve service delivery with ITSM",
      "Enhance operational efficiency with ITOM",
      "Automate routine tasks, freeing up valuable resources for innovation",
    ],
    cta: "Contact Us for ServiceNow Consultation",
  },
  {
    id: 2,
    title: "Healthcare",
    image: "/Rectangle 23804.png",
    heading: "Empowering Healthcare with Digital Workflows",
    description:
      "In the healthcare sector, operational efficiency, compliance, and patient satisfaction are top priorities. With ServiceNow, we help healthcare organizations modernize their workflows, reduce manual processes, and improve care coordination. Our solutions are designed to streamline everything from patient care management to regulatory compliance, ensuring that healthcare providers can focus on delivering high-quality care.",
    benefits: [
      "Streamline patient care coordination",
      "Improve compliance and risk management",
      "Automate administrative tasks, freeing up more time for patient care",
    ],
    cta: "Contact Us for ServiceNow Consultation",
  },
  {
    id: 3,
    title: "Financial Services",
    image: "/Rectangle 23805.png",
    heading: "Enhancing Efficiency in Financial Services",
    description:
      "Financial institutions operate in a fast-paced, highly regulated environment where data security, operational efficiency, and customer satisfaction are crucial. Our ServiceNow solutions are tailored to address these needs, providing tools to streamline workflows, automate compliance, and enhance customer service. With customized solutions for finance, we help you manage risk, ensure compliance, and drive operational excellence.",
    benefits: [
      "Automate compliance processes and reduce risks",
      "Streamline loan processing and customer service",
      "Improve workflow efficiency across departments",
    ],
    cta: "Contact Us for ServiceNow Consultation",
  },
  {
    id: 4,
    title: "Retail",
    image: "/Rectangle 23806.png",
    heading: "Transforming Retail with ServiceNow",
    description:
      "In today's retail environment, businesses need to be agile, responsive, and efficient to keep up with customer expectations. ServiceNow enables retailers to enhance service delivery, optimize supply chain operations, and provide better customer support. Whether you need help with managing inventory, automating customer service, or streamlining operations, our solutions are designed to meet the unique challenges of the retail sector.",
    benefits: [
      "Streamline inventory management and logistics",
      "Automate customer support for faster resolution times",
      "Enhance employee productivity through optimized workflows",
    ],
    cta: "Contact Us for ServiceNow Consultation",
  },
  {
    id: 5,
    title: "Government",
    image: "/govt.png",
    heading: "Driving Efficiency in Government Services",
    description:
      "Government agencies are under constant pressure to do more with less, while improving service delivery and adhering to strict compliance standards. ServiceNow offers solutions to automate administrative tasks, improve service management, and ensure secure, scalable workflows. Our solutions help government agencies modernize their IT operations, improve citizen services, and manage risk more effectively.",
    benefits: [
      "Improve citizen service delivery",
      "Automate administrative processes to reduce costs",
      "Ensure secure, compliant workflows across departments",
    ],
    cta: "Contact Us for ServiceNow Consultation",
  },
];

const Sectors: NextPage = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Refs and state
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const [section, setSection] = useState<React.CSSProperties>({});
  const [padding, setPadding] = useState<React.CSSProperties>({});
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [div, setDiv] = useState<React.CSSProperties>({});
  const [secondDiv, setSecondDiv] = useState<React.CSSProperties>({});
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleAccordionToggle = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setSection({ padding: "1.5rem" });
        setPadding({ padding: "0" });

        setDiv({
          padding: "0",
          gap: "0.5rem",
        });
        setImgStyle({ height: "30%" });
        setSecondDiv({
          gap: "1rem",
          padding: "0",
        });
        setStyle({ width: "40%" });
      } else {
        setStyle({});
        setDiv({});
        setSecondDiv({});
        setImgStyle({});
        setPadding({});
        setSection({});
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setStyle({ fontSize: "1.2rem" });
      } else {
        setStyle({});
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1226);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div
        style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }}
      >
        <div className=" mt-[2rem] mq1240:mt-[3rem]">
          <NavbarPage />
        </div>
      </div>
      <Heros
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Sectors"
        homeServiceAdvisory="Home • Sectors"
      />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        style={section}
        className="self-stretch flex flex-row items-start justify-start pt-[0rem] 
          px-[4.375rem] pb-[4.5rem] box-border max-w-full 
          mq1325:px-[2rem] 
          mq800:pb-[3rem]
          mq450:pb-[2rem] p-[4rem] mq900:p-[1.5rem]"
      >
        <div className="max-w-[1536px] mx-auto w-full">
          <div
            className="w-full flex flex-col items-start justify-start gap-[2rem]
              mq1325:w-full
              mq800:w-full"
            data-acc-group
          >
            {SectorData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={accordionVariants}
                initial="hidden"
                animate="visible"
                style={padding}
                className="w-full h-auto flex flex-col justify-start gap-[0rem] text-[1.75rem] text-color-5 items-center mq1325:w-full mq800:w-full"
                data-acc-item
              >
                <motion.div
                  className="w-full h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border cursor-pointer"
                  data-acc-header
                  onClick={() => handleAccordionToggle(item.id)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div
                    className={`w-[21.063rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] ${
                      openAccordion === item.id
                        ? "text-color-5"
                        : "text-color-6"
                    } text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap`}
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

                <AnimatePresence mode="wait">
                  {openAccordion === item.id && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-full bg-white flex flex-col items-center justify-start overflow-hidden px-[2rem]
                      "
                    >
                      <div
                        className="w-full flex flex-row items-center justify-between gap-[2rem] mt-[1rem]
                        mq1226:flex-col mq1226:gap-[1rem]"
                      >
                        <motion.div
                          variants={imageVariants}
                          initial="hidden"
                          animate="visible"
                          className="min-w-[300px] w-[35%] flex-shrink-0 flex items-center
                          mq1226:min-w-full mq1226:w-full"
                        >
                          <Image
                            style={{
                              width: "100%",
                              height: isSmallScreen ? "20rem" : undefined,
                              objectFit: "cover",
                              borderRadius: "12px",
                              marginTop: isSmallScreen ? "1rem" : "0",
                            }}
                            className="rounded-11xl"
                            loading="lazy"
                            width={532}
                            height={400}
                            alt=""
                            src={item.image}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                          className="flex-1 min-w-0 flex flex-col items-start justify-center py-[1rem] relative -top-5
                          mq1226:w-full"
                        >
                          <div className="w-full flex flex-col gap-[1.5rem]">
                            <motion.h1
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.8 }}
                              style={style as React.CSSProperties}
                              className="w-full font-medium font-archivo text-[2rem] leading-[3.125rem]
                              mq600:text-[1.5rem] mq600:leading-[2.5rem]
                              mq500:text-[1.2rem] mq500:leading-[1.5rem]"
                            >
                              "{item.heading}"
                            </motion.h1>

                            <div className="w-full relative text-[1.125rem] leading-[1.875rem] text-color-6 font-archivo">
                              {item.description}
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                              className="flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5"
                            >
                              <div
                                className="relative leading-[2.5rem] font-semibold mq450:text-[1.188rem] mq450:leading-[2rem]"
                                style={{ fontFamily: "Archivo" }}
                              >
                                Benefits
                              </div>
                              <div className="relative text-[1.125rem] leading-[150%] text-color-6">
                                <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                                  {item.benefits.map(
                                    (benefit, benefitIndex) => (
                                      <motion.li
                                        key={benefitIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: 0.7 + benefitIndex * 0.2,
                                          duration: 0.8,
                                          ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        style={{ fontFamily: "Archivo" }}
                                      >
                                        {benefit}
                                      </motion.li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Sectors;
