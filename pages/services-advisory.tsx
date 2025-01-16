import type { NextPage } from "next";
import { useCallback, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import DigitalTranspormationRoadmap from "../components/DigitalTranspormationRoadmap";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesAdvisory: NextPage = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.clientHeight;
      const scrollPoint = window.innerHeight;
      
      // Calculate scroll progress through the section
      const progress = Math.min(Math.max(-rect.top / (containerHeight - scrollPoint), 0), 1);
      setScrollProgress(progress);

      // Determine when to fix/unfix the section
      if (rect.top <= 0 && -rect.top < (containerHeight - scrollPoint)) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const text3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const text4Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const text5Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const translateY = isInView ? 0 : scrollProgress > 0.5 ? (scrollProgress - 0.5) * 100 : 0;

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[1.5rem] text-white font-archivo">
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }}>
        <div className="mt-[2rem] mq1240:mt-[3rem]"><NavbarPage /></div>
      </div>
      
      <Heros
        teamworkWithBusinessPeople="/hero.png"
        heroTitle="Service Advisory"
        homeServiceAdvisory="Home • Service • Advisory"
      />

      <div 
        ref={containerRef}
        className="w-full relative"
        style={{ 
          height: "200vh",
          marginTop: "-5rem",
        }}
      >
        <motion.div 
          className="w-full"
          style={{ 
            position: isInView ? 'fixed' : 'absolute',
            top: isInView ? 0 : 'auto',
            left: 0,
            right: 0,
            zIndex: 10,
            transform: `translateY(${translateY}vh)`
          }}
        >
          {/* Add max-width container */}
          <div className="max-w-[1536px] mx-auto w-full relative h-[600px]">
            <Image
              className="w-full h-full object-cover"
              width={1440}
              height={600}
              alt=""
              src="/screenshot-20241023-231953-1@2x.png"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-[4.375rem] gap-4
              mq1325:px-[2rem] ">
              <motion.i
                style={{ opacity: text1Opacity }}
                className="relative leading-[2rem] text-[1.25rem] mq550:text-[0.90rem] mq550:leading-[1.25rem]"
              >
                89% of large companies globally have a digital and AI transformation underway​.
              </motion.i>

              <motion.i
                style={{ opacity: text2Opacity }}
                className="relative leading-[2rem] text-[1.25rem] mq550:text-[0.90rem] mq550:leading-[1.25rem]"
              >
                However, only 31% of the expected revenue lift and 25% of expected cost savings are realized*
              </motion.i>

              <motion.div
                style={{ opacity: text3Opacity }}
                className="flex flex-col gap-2"
              >
                <h2 className="m-0 relative text-[1.75rem] leading-[2.5rem] mq550:text-[1.30rem] mq550:leading-[1.60rem] italic font-normal">
                  At DT SYSTEMS we deliver
                </h2>
                <h2 className="m-0 relative text-[1.75rem] leading-[2.5rem] italic font-semibold mq550:text-[1.30rem] mq550:leading-[1.60rem]">
                  MAXIMUM VALUE CAPTURE
                </h2>
              </motion.div>

              <motion.i
                style={{ opacity: text4Opacity }}
                className="relative leading-[2rem] text-[1.25rem] mq550:text-[0.90rem] mq550:leading-[1.25rem]"
              >
                by optimizing processes & managing change right through the solution lifecycle
              </motion.i>

              <motion.i
                style={{ opacity: text5Opacity }}
                className="relative leading-[2rem] text-[1.25rem] mq550:text-[0.90rem] mq550:leading-[1.25rem]"
              >
                These services detail how our proven team can partner you in capturing maximum value by tapping on our extensive experience in building, operating & consulting tech teams.
              </motion.i>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-[-18vh] w-full">
        <div className="max-w-[1536px] mx-auto">
          <DigitalTranspormationRoadmap />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesAdvisory;