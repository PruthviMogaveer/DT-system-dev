import type { NextPage } from "next";
import Image from "next/image";
import NavbarPage from "../components/NavbarPage";
import ChooseUs from "../components/ChooseUs";
import Services from "../components/Services";
import Sector from "../components/Sector";
import Careers from "../components/Careers";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const limitedScroll = Math.min(window.scrollY, maxScroll);
      setScrollPosition(limitedScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-hidden relative bg-white flex flex-col 
    items-start justify-start pt-[1.781rem] px-[0rem] pb-[0rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-left text-[4.5rem] text-white font-archivo mq800:gap-[3.25rem] mq450:gap-[1.625rem]">
      {/* Hero wrapper */}
      <div className="w-full h-[100vh] relative">
        {/* Background image */}
        <div className="w-full h-[50rem] fixed top-0 left-0" style={{
          transform: `translateY(${scrollPosition * -0.2}px)`,
        }}>
          <Image
            className="w-full h-full absolute object-cover"
            width={1440}
            height={800}
            alt=""
            src="/dt-systems-banner01-1@2x.png"
            priority
          />
        </div>
        
        {/* Navbar - fixed position */}
        <div className="fixed top-8 left-0 right-0 z-50 bg-transparent" >
          <NavbarPage />
        </div>
        {/* Hero content - fixed position */}
        <div ref={heroRef} className="fixed top-[150px] left-0 right-0 z-40" style={{
          transform: `translateY(${scrollPosition * 0.1}px)`,
        }}>
          <div className="flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[13.093rem] box-border max-w-full mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:pb-[8.5rem] mq800:box-border mt-[6rem]">
            <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full mq900:ml-[-0.5rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full mq800:gap-[1rem] w-auto">
                <h1 className="m-0 relative text-inherit leading-[5rem] capitalize font-bold font-inherit z-[1] mq800:text-[3rem] mq800:leading-[4rem] mq500:text-[2.3rem]  index-title mq450:w-auto">
                  <p className="m-0">Transformation</p>
                  <p className="m-0">Delivered</p>
                </h1>
                <div className="w-[25.4rem] relative text-[1.125rem] leading-[1.875rem] inline-block max-w-full z-[1]">
                  Accelerate growth and an unwavering commitment to bring measurable
                  value to your enterprise.
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-white rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100"
                onClick={(e) => handleSectionClick(e, 'services')}>
                <div className="h-[3.25rem] w-[9.688rem] relative rounded-8xs bg-white hidden" />
                <a className="[text-decoration:none] flex-1 relative text-[1.125rem] font-archivo text-color text-center inline-block min-w-[5.75rem] z-[1]">
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div 
        ref={contentRef}
        className="relative z-[60] pt-14 min-h-screen w-full bg-white flex flex-col items-start justify-start px-[0rem] pb-[0rem] box-border gap-[6.5rem] leading-[normal] tracking-[normal] text-left text-[4.5rem] text-white font-archivo mq800:gap-[3.25rem] mq450:gap-[1.625rem]"
      >
        <div className="flex flex-col gap-[6.5rem] max-w-full mq800:gap-[3.25rem] mq450:gap-[1.625rem]">
          <ChooseUs />
          <Services />
          <Sector />
          <Careers />
          <section className="self-stretch flex flex-col items-start justify-start gap-[4.5rem] max-w-full mq800:gap-[2.25rem] mq450:gap-[1.125rem]">
            <ConnectWithUs />
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
