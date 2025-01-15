import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import DigitalTranspormationRoadmap from "../components/DigitalTranspormationRoadmap";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ServicesAdvisory: NextPage = () => {
  const router = useRouter();

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Trigger every time the section comes into view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[1.5rem] text-white font-archivo">
      <div className="hidden flex-row items-start justify-start gap-[1.5rem] z-[0]">
        <div className="rounded-29xl border-gray-550 border-[1px] border-solid flex flex-row items-center justify-center py-[0.625rem] px-[0.687rem]">
          <Image
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            width={32}
            height={32}
            alt=""
            src="/arrowleft.svg"
          />
        </div>
        <div className="rounded-29xl bg-blue flex flex-row items-center justify-center p-[0.75rem]">
          <Image
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            width={32}
            height={32}
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }} >
        <div className=" mt-[2rem] mq1240:mt-[3rem]"><NavbarPage /></div>
      </div>
      <Heros
        teamworkWithBusinessPeople="/hero.png"
        heroTitle="Service Advisory"
        homeServiceAdvisory="Home • Service • Advisory"
      />
      <div
        ref={ref}
        className="w-[48.875rem] flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[11.5rem] box-border max-w-full mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:pb-[7.5rem] mq800:box-border"
      >
        <motion.div
          className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] max-w-full" style={{
            marginLeft: "-0.5rem"
          }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.i
            className="w-[30.5rem] relative leading-[2.5rem] inline-block max-w-full z-[2] mq550:text-[1.188rem] mq550:leading-[2rem]"
            variants={textVariants}
          >
            89% of large companies globally have a digital and AI transformation underway​.
          </motion.i>
          <motion.div
            className="w-[33.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full"
            variants={containerVariants}
          >
            <motion.i
              className="relative leading-[2.5rem] z-[2] mq550:text-[1.188rem] mq550:leading-[2rem]"
              variants={textVariants}
            >
              However, only 31% of the expected revenue lift and 25% of expected cost savings are realised*
            </motion.i>
            <div className="flex flex-col items-start justify-start max-w-full text-[2rem]">
              <motion.h2
                className="m-0 relative text-inherit leading-[3.125rem] inline-block italic font-normal font-inherit max-w-full z-[2] mq800:text-[1.625rem] mq800:leading-[2.5rem] mq550:text-[1.188rem] mq550:leading-[1.875rem]"
                variants={textVariants}
              >
                At DT SYSTEMS we deliver
              </motion.h2>
              <motion.h2
                className="m-0 relative text-inherit leading-[3.125rem] italic font-semibold font-inherit z-[3] mq800:text-[1.625rem] mq800:leading-[2.5rem] mq550:text-[1.188rem] mq550:leading-[1.875rem]"
                variants={textVariants}
              >
                MAXIMUM VALUE CAPTURE
              </motion.h2>
            </div>
          </motion.div>
          <motion.div
            className="self-stretch flex flex-col items-start justify-start"
            variants={containerVariants}
          >
            <motion.i
              className="relative leading-[2.5rem] z-[2] mq550:text-[1.188rem] mq550:leading-[2rem]"
              variants={textVariants}
            >
              by optimizing processes & managing change right through the solution lifecycle
            </motion.i>
          </motion.div>
          <motion.i
            className="relative leading-[2.5rem] z-[2] mq550:text-[1.188rem] mq550:leading-[2rem]"
            variants={textVariants}
          >
            These services detail how our proven team can partner you in capturing maximum value by tapping on our extensive experience in building, operating & consulting tech teams.
          </motion.i>
        </motion.div>
      </div>
      <Image
        className="w-full h-[40.75rem] absolute !m-[0] top-[38.75rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover z-[1] mq400:h-[50rem] "
        width={1440}
        height={652}
        alt=""
        src="/screenshot-20241023-231953-1@2x.png"
      />
      <DigitalTranspormationRoadmap />
      <Footer />
    </div>
  );
};

export default ServicesAdvisory;
