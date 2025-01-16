import type { NextPage } from "next";
import Image from "next/image";

export type CareersType = {
  className?: string;
};

const Careers: NextPage<CareersType> = ({ className = "" }) => {
  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="careers"
      data-section="careers"
      className={`bg-[url('/dots.svg')] careers-section flex flex-col items-start justify-start w-full bg-color ${className}`}
    >
      <div className="w-full max-w-[1536px] mx-auto px-[4.375rem] mq1325:px-0">
      <div className="max-w-[90rem] w-full flex flex-col items-center justify-center relative py-[5.5rem] mq800:py-[3.563rem]">
        {/* Content Container */}
        <div className=" flex flex-row items-center justify-between w-full gap-[4rem] relative z-[2]">
          {/* Text Content */}
          <div className=" w-[33.25rem] flex flex-col items-start justify-start gap-[1.5rem] mq1050:items-center mq1050:w-full mq1325:px-[2rem]">
            <h1 className="m-0 text-[3.375rem] text-white leading-[120%] font-bold capitalize mq800:text-[2.688rem] mq450:text-[2rem]">
              Careers
            </h1>
            
            <div className="text-white text-[1.125rem] leading-[1.875rem] space-y-6 mq1050:text-center">
              <p>
                Are you an exceptional talent passionate about ServiceNow and
                looking for an exciting opportunity in the heart of Southeast
                Asia?
              </p>
              <p>
                DT Systems is a rapidly growing company with a vibrant team
                culture and a commitment to excellence. We are constantly seeking
                talented individuals to join our team and help us transform
                businesses through innovative ServiceNow solutions.
              </p>
              <p>
                If you are ready to embark on a rewarding career journey with a
                company that values your expertise and fosters your growth, we
                encourage you to get in touch with us today.
              </p>
            </div>

            <button
              className="cursor-pointer [border:none] py-[1rem] px-[2rem] bg-white rounded-8xs flex flex-row items-start justify-start hover:bg-gainsboro-100"
              onClick={(e) => handleSectionClick(e, "contactUs")}
            >
              <div className="flex-1 relative text-[1.125rem] font-archivo text-color text-center">
                Get in Touch
              </div>
            </button>
          </div>

          {/* Image Container */}
          <div className="flex-1 absolute -right-2 h-[676px] mq1050:hidden">
            <Image
              className="absolute right-0 h-full w-auto object-cover"
              width={712}
              height={683}
              alt="Team working together"
              src="/groupofcoworkersworkingtogetherandtalkingat20231127050146utc-1@2x.png"
              priority
            />
          </div>
        </div>

        
      </div>
      </div>
    </section>
  );
};

export default Careers;
