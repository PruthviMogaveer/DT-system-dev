import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ItServiceManagemant from "./ItServiceManagemant";
import { FILE } from "dns";
import Footer from "./Footer";

export type ServicesContentType = {
  className?: string;
};

const ServicesContent: NextPage<ServicesContentType> = ({ className = "" }) => {
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

  const [div, setDiv] = useState({})
  const [padding, setPadding] = useState({})
  const [extraDiv, setExtraDiv] = useState({})
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);
  const [accordionOpen4, setAccordionOpen4] = useState(false);
  const [accordionOpen5, setAccordionOpen5] = useState(false);
  const [accordionOpen6, setAccordionOpen6] = useState(false);
  const [accordionOpen7, setAccordionOpen7] = useState(false);


  const handleAccordionToggle = () => {
    setAccordionOpen((prev) => !prev);
  };
  const handleAccordionToggle2 = () => {
    setAccordionOpen2((prev) => !prev);
  };
  const handleAccordionToggle3 = () => {
    setAccordionOpen3((prev) => !prev);
  };
  const handleAccordionToggle4 = () => {
    setAccordionOpen4((prev) => !prev);
  };
  const handleAccordionToggle5 = () => {
    setAccordionOpen5((prev) => !prev);
  };
  const handleAccordionToggle6 = () => {
    setAccordionOpen6((prev) => !prev);
  };
  const handleAccordionToggle7 = () => {
    setAccordionOpen7((prev) => !prev);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {

        setDiv({
          height: "30%"
        })
        setPadding({
          padding: "0"
        })
        setExtraDiv({
          display: "flex",
          flexDirection: "column"
        })

      } else {

        setPadding({})
        setExtraDiv({})
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[4.062rem] max-w-full text-left text-[1.125rem] text-color-6 font-archivo mq450:gap-[1rem] mq750:gap-[2rem] ${className}`}
    >
      <div className="w-[54.813rem] relative leading-[1.875rem] whitespace-pre-wrap inline-block max-w-full">
        The following are the implementation services we can deliver to help you
        realise your strategic goals. They also set the foundation to approach
        custom automated workflows, e.g. loan operations, claims management,
        etc.
      </div>
      <div
        className="self-stretch flex-1 flex flex-row items-start justify-start text-[1.5rem] text-color"
        data-acc-group
      >
        <div className="w-[81.25rem] flex flex-col items-start justify-start gap-[2rem]">
          <div
            style={padding}
            className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
            data-acc-item
            data-acc-open
            data-acc-original
            data-acc-default-open
          >
            {/* Accordion Header */}
            <div
              style={padding}
              className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
              data-acc-header
              onClick={handleAccordionToggle}
            >
              <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
              <input
                className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                placeholder="IT Service Management (ITSM)"
                type="text"
              />
              <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                <Image
                  className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                  width={13}
                  height={8}
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
              style={{
                height: accordionOpen ? "auto" : "0px", // Dynamically control height
              }}
              data-acc-content
            >
              <div className="flex  md:flex-row items-center gap-6 responsive">
                {/* Image */}
                <Image
                  className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                  loading="lazy"
                  width={532}
                  height={400}
                  alt=""
                  src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                />

                {/* Content Section */}
                <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <ItServiceManagemant
                    text="IT Service Management (ITSM)"
                    deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                    unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                    createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                    deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="w-[81.25rem] h-[37.75rem] flex flex-col items-start justify-start gap-[2rem]">

            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle2}
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="IT Operations Management"
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen2 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt="Image description"
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="IT Operations Management "
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>


            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle3} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="Customer Service Management "
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen3 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="Customer Service Management "
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>


            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle4} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder=" IT Asset Management (ITAM) "
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen4 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text=" IT Asset Management (ITAM) "
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle5} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="HR Service Delivery "
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen5 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="HR Service Delivery"
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>


            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle6} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="Security Operations "
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen6 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="Security Operations"
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle7}
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="Now Assist "
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden ${accordionOpen7 ? "open" : ""
                  }`}
                style={{
                  height: accordionOpen7 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="Now Assist"
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>

        </div>

      </div>

    </div>

  );
};

export default ServicesContent;


{/* <div
style={extraDiv}
className="w-[100%] flex flex-row items-start justify-start gap-[2rem]  [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
data-acc-content
>
<Image
  className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover"
  loading="lazy"
  width={532}
  height={400}
  alt=""
  src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
/>
<ItServiceManagemant
  text="IT Service Management (ITSM)"
  deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning.  "
  unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity "
  createResilientAdaptablePeople1={`Create resilient & adaptable people first experiences `}
  deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesise your shared data and analytics "
/>
</div> */}