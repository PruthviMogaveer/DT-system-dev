"use client"

import type { NextPage } from "next";
import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import { CSSProperties } from "react";
import { MotionStyle } from "framer-motion";

// Define types for style states
interface StyleState {
  padding?: string | number;
  gap?: string | number;
  height?: string | number;
  width?: string | number;
  display?: string;
  flexDirection?: "column" | "row";
}

const ServicesImplementation: NextPage = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false
  });

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
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
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  // State management
  const [section, setSection] = useState<StyleState>({});
  const [padding, setPadding] = useState<StyleState>({});
  const [extraDiv, setExtraDiv] = useState<StyleState>({});
  const [style, setStyle] = useState<StyleState>({});
  const [div, setDiv] = useState<StyleState>({});
  const [secondDiv, setSecondDiv] = useState<StyleState>({});
  const [imgStyle, setImgStyle] = useState<StyleState>({});
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const accordionData = [
    {
      id: 1,
      title: "IT Service Management (ITSM)",
      image: "/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png",
      content: {
        text: "IT Service Management (ITSM)",
        deliverResilientITServices: "Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning.",
        unburdenYourITServicesStaff: "Unburden your IT services staff and boost IT productivity",
        createResilientAdaptablePeople1: "Create resilient & adaptable people first experiences",
        deliverITServicesOnASingle1: "Deliver IT services on a single system of engagement by using workflows to synthesise your shared data and analytics"
      }
    },
    {
      id: 2,
      title: "IT Operations Management (ITOM)",
      image: "/iotm.png",
      content: {
        text: "IT Operations Management",
        deliverResilientITServices: "Gain visibility into your multistack IT environment, on-premises to cloud, and see the impact on your applications and business services. Predict issues and automate resolutions assisted by generative AI.",
        unburdenYourITServicesStaff: "Gain full visibility into your infrastructure, including on-premises, cloud, and serverless environments. Manage TLS certificates and firewall policies on a single platform",
        createResilientAdaptablePeople1: "Analyze telemetry and log data using generative AI to reduce noise, predict issues, and automate resolution",
        deliverITServicesOnASingle1: "Accelerate Cloud Adoption by automated service workflows and continuous governance",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 3,
      title: "Customer Service Management (CSM)",
      image: "/csmt.png",
      content: {
        text: "Customer Service Management",
        deliverResilientITServices: "Take your customer service to the next level while controlling operating costs. Resolve issues quickly and delight customers with AI-powered self-service. Set your agents up for success with real-time information to boost their productivity.",
        unburdenYourITServicesStaff: "Provide self-service across multiple communication channels (e.g., social media to AI-powered virtual agents)",
        createResilientAdaptablePeople1: "Enhanced cross-department collaboration",
        deliverITServicesOnASingle1: "Provide real-time insights for agents with GenAI infused tools to quickly resolve customer requests",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 4,
      title: "IT Asset Management (ITAM)",
      image: "/itam.png",
      content: {
        text: "IT Asset Management (ITAM)",
        deliverResilientITServices: "Manage all your hardware, software, and cloud IT assets from a single platform. Automate every stage of the IT asset lifecycle at scale while controlling costs and minimizing licensing and leasing risks.",
        unburdenYourITServicesStaff: "Automate ITAM by doing it where you plan, service, and operate IT—on one platform, one data model, and one architecture",
        createResilientAdaptablePeople1: "Realise Savings throughout the asset lifecycle by optimizing software licenses, tracking hardware assets, and managing cloud resources",
        deliverITServicesOnASingle1: "Align asset investments to business needs. Quickly identify and mitigate technology risks such as tech debt, shadow tech, vulnerabilities, license compliance, or lost assets",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 5,
      title: "HR Service Delivery",
      image: "/hsd.png",
      content: {
        text: "HR Service Delivery",
        deliverResilientITServices: "Improve productivity by making it easy for employees to get the help and guidance they need, all in one place. Reduce costs with AI-driven self-service and streamlined case resolution.",
        unburdenYourITServicesStaff: "Deliver intelligent customised (region/local) self-service experiences to reduce case volumes and help employees get results faster",
        createResilientAdaptablePeople1: "Provide embedded experiences across any digital channel, e.g. ServiceNow in Teams",
        deliverITServicesOnASingle1: "Improve employee service experience of remote workers to maintain productivity",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 6,
      title: "Security Operations",
      image: "/so.png",
      content: {
        text: "Security Operations",
        deliverResilientITServices: "Simplify and automate threat and vulnerability management and response while reducing risks to your organization.",
        unburdenYourITServicesStaff: "Reach operational agility by using MITRE ATT&CK to investigate threats and close gaps",
        createResilientAdaptablePeople1: "Prioritize remediation by applying risk-based vulnerability management across your infrastructure and collaborative workspaces for effective management and remediation",
        deliverITServicesOnASingle1: "Know your security posture by viewing key metrics and indicators with role-based dashboards and reporting",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 7,
      title: "Now Assist",
      image: "/noa.png",
      content: {
        text: "Now Assist",
        deliverResilientITServices: "Out-of-the-box Gen AI that helps employees, customers, agents, and developers work smarter.",
        unburdenYourITServicesStaff: "Case Summarisation reduces manual work for agents and operators with overviews and insights",
        createResilientAdaptablePeople1: "Enriched Virtual Agent conversations by deflecting cases, empowering people, and delivering engaging, dynamic experiences with natural human language",
        deliverITServicesOnASingle1: "Generate content automatically, including knowledge articles, emails, chats, intelligent search results, and work notes",
        cta: "Contact Us for ServiceNow Consultation"
      }
    }
  ];


  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setSection({ padding: "1.5rem" });
        setPadding({ padding: "0" });
        setExtraDiv({
          display: "flex",
          flexDirection: "column"
        });
        setDiv({
          padding: "0",
          gap: "0.5rem"
        });
        setImgStyle({ height: "30%" });
        setSecondDiv({
          gap: "1rem",
          padding: "0"
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
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1226);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleAccordionToggle = (index: number): void => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }} >
        <div className=" mt-[2rem] mq1240:mt-[3rem]"><NavbarPage /></div>
      </div>
      <Heros
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Implementation Services"
        homeServiceAdvisory="Home • Service • Implementation"
      />
      <div className="w-[54.813rem] relative leading-[1.875rem] whitespace-pre-wrap inline-block max-w-full font-archivo text-[1.125rem] text-color-6 ml-[3.5rem] mt-[0rem] mb-[4rem] mq1000:w-[80%] mq900:ml-[0.5rem] mq400:text-[1.2rem] mq400:leading-[2rem]" style={{ padding: "1rem !important" }} >
        The following are the implementation services we can deliver to help you
        realise your strategic goals. They also set the foundation to approach
        custom automated workflows, e.g. loan operations, claims management,
        etc.
      </div>
      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        style={section}
        className="self-stretch flex flex-row items-start justify-start pt-[0rem] 
          px-[4.375rem] pb-[4.5rem] box-border max-w-full 
          mq1325:px-[2rem] 
          mq800:px-[1rem] mq800:pb-[3rem]
          mq450:px-[0.5rem] mq450:pb-[2rem] p-[4rem] mq900:p-[1.5rem]"
      >

        <div
          className="w-full flex flex-col items-start justify-start gap-[2rem]
            mq1325:w-full
            mq800:w-full"
          data-acc-group
        >
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={accordionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={padding as MotionStyle}
              className="w-full h-auto flex flex-col items-end justify-start gap-[0rem] text-[1.75rem] text-color-5 items-center
                mq1325:w-full
                mq800:w-full"
              data-acc-item
            >
              <motion.div
                className="w-full h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border cursor-pointer
                  mq800:px-[1rem]
                  mq450:px-[0.5rem]"
                data-acc-header
                onClick={() => handleAccordionToggle(item.id)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className={`w-[21.063rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] ${openAccordion === item.id ? 'text-color-5' : 'text-color-6'} text-left inline-block p-0 z-[10] mq520:text-[1.188rem] mq520:leading-[2.5rem] whitespace-nowrap mq400:text-[1rem] mq400:whitespace-normal mq400:leading-[2.5rem]`}>
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
                    className="w-full flex flex-col items-center justify-start overflow-hidden
                      mq1325:w-full
                      mq800:w-full"
                  >
                    <div className="flex flex-row items-start justify-start gap-6 responsive
                      mq1226:flex-col mq1226:w-full mq1226:flex-col">
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-[33.25rem] relative
                          mq1226:w-full mq1226:max-h-[400px]
                          mq800:max-h-[600px]
                          mq450:max-h-[800px]"
                      >
                        <Image
                          style={{
                            margin: 0,
                            marginTop: isSmallScreen ? "1rem" : "2rem",
                            marginLeft: isSmallScreen ? "0" : "1rem",
                            width: isSmallScreen ? "100%" : undefined,
                            height: isSmallScreen ? "20rem" : undefined,

                          }}
                          className="rounded-11xl object-cover img mq1226:w-[100%] mq1226:h-[10rem]"
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
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default
                          mq1226:px-[1rem]
                          mq800:px-[0.5rem]"
                      >
                        <div style={div} className="flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5">
                          <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="w-[21.063rem] font-medium font-archivo text-[2rem] bg-[transparent] relative leading-[3.125rem] text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap mq550:text-[1.5rem] mq550:leading-[2.5rem] mq400:text-[1.2rem] mq400:leading-[2.5rem]"
                          >
                            {item.content.text}
                          </motion.h1>
                        </div>
                        <div style={div} className="flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                          <div className="flex flex-col items-start justify-start gap-[1rem]">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.8 }}
                              className="flex flex-col gap-[0.5rem]"
                            >
                              <div className="w-[37.75rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block mq800:w-[100%] mq400:w-[80%]" style={{ fontFamily: "Archivo" }}>
                                {item.content.deliverResilientITServices}
                              </div>
                            </motion.div>
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
                                  {[
                                    item.content.unburdenYourITServicesStaff,
                                    item.content.createResilientAdaptablePeople1,
                                    item.content.deliverITServicesOnASingle1
                                  ].map((benefit, benefitIndex) => (
                                    <motion.li
                                      key={benefitIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.7 + benefitIndex * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                    >
                                      {benefit}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ServicesImplementation;

