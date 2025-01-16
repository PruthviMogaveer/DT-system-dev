import type { NextPage } from "next";
import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type NavbarPageType = {
  className?: string;
};

const NavbarPage: NextPage<NavbarPageType> = ({ className = "" }) => {
  const router = useRouter();

  // Generic scroll function for all sections
  const scrollToSection = (sectionId: string, headerOffset: number = 100) => {
    const element =
      document.getElementById(sectionId) ||
      document.querySelector(`.${sectionId}-section`) ||
      document.querySelector(`[data-section="${sectionId}"]`);

    if (element) {
      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  // Handler for section navigation
  const handleSectionClick = async (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (router.pathname !== "/") {
      await router.push("/");
      setTimeout(() => scrollToSection(sectionId), 500);
    } else {
      scrollToSection(sectionId);
    }
  };

  const [modal, setModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);

  // Add refs for the dropdowns
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const resourceDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 1240) {
        setModal(true);
        setStyle({ padding: "0px", margin: "0px" });
      } else if (window.innerWidth < 700) {
      } else if (window.innerWidth < 450) {
      } else {
        setModal(false);
        setIsMenuOpen(false);
        setStyle({});
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setServiceDropdown(false);
      }
      if (
        resourceDropdownRef.current &&
        !resourceDropdownRef.current.contains(event.target as Node)
      ) {
        setResourceDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setServiceDropdown(false);
      setResourceDropdown(false);
    }
  };

  const toggleServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  const toggleResourceDropdown = () => {
    setResourceDropdown(!resourceDropdown);
  };

  const onDTSYSTEMSClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='dTSystemsBanner011']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSectorsTextClick = useCallback(() => {
    router.push("/sectors");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-4 
        pb-4 lg:pb-[6.812rem] box-border flex items-center p-0 m-0 
        ${className}`}
      style={style}
    >
      <div
        className="max-w-[1536px] mx-auto w-full px-[4.375rem] 
          mq1325:px-[2rem]
          mq800:px-[1rem] 
          mq450:px-[0.5rem] "
      >
        <header className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-left text-[1rem] text-white font-archivo relative navbar mt-[-1rem] header-navbar">
          <div className={`flex items-center relative`}>
            <a href="/">
              <Image
                className="h-[1.469rem] relative max-w-[15rem] overflow-hidden shrink-0 cursor-pointer z-[1] mq900:ml-[1px]"
                loading="lazy"
                width={203}
                height={24}
                alt=""
                src="/dt-systems.svg"
              />
            </a>
          </div>

          {modal && (
            <button
              className="text-white p-2 z-50 bg-transparent mr-[1rem] navbar-button mq900:mr-[0rem] "
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 bg-transparent w-[2.4rem] h-[2.4rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}

          {!modal && (
            <div className="w-[55.569rem] flex flex-row items-center justify-end gap-[3.893rem] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mt-[-1.2rem]">
                  <a
                    className="[text-decoration:none] relative font-semibold text-color-4 inline-block min-w-[2.875rem] z-[1]"
                    href="/"
                  >
                    Home
                  </a>
                  <button
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] z-[1] cursor-pointer bg-transparent border-0 text-white font-archivo text-[1rem]"
                    onClick={(e) => handleSectionClick(e, "chooseUs")}
                  >
                    Why Us
                  </button>
                  <div
                    className="relative flex flex-row items-start justify-start gap-[0.25rem] z-[1]"
                    ref={serviceDropdownRef}
                  >
                    <div
                      className="flex items-center gap-1 cursor-pointer justify-center"
                      onClick={toggleServiceDropdown}
                    >
                      <a className="[text-decoration:none] relative text-[inherit]">
                        Service
                      </a>
                      <Image
                        className={`w-[0.8rem] h-[1rem] relative transition-transform duration-300 ${
                          serviceDropdown ? "rotate-180" : ""
                        }`}
                        width={110}
                        height={6}
                        alt=""
                        src="/sub-menu-icons.svg"
                      />
                    </div>
                    {serviceDropdown && (
                      <div
                        className="absolute top-full right-8rem bg-white shadow-lg mt-2 p-4 rounded-lg"
                        style={{
                          borderTopLeftRadius: "0", // Top-left corner
                          borderBottomRightRadius: "0", // Bottom-right corner
                          borderTopRightRadius: "1rem", // Top-right corner
                          borderBottomLeftRadius: "1rem", // Bottom-left corner
                        }}
                      >
                        <a
                          href="/services-advisory"
                          className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                          style={{ textDecoration: "none" }}
                        >
                          Advisory
                        </a>
                        <a
                          href="/ServicesImplementation"
                          className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                          style={{ textDecoration: "none" }}
                        >
                          Implementation
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-start justify-start z-[1]">
                    <a
                      className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] cursor-pointer"
                      onClick={onSectorsTextClick}
                    >
                      Sectors
                    </a>
                  </div>
                  <button
                    style={{ cursor: "pointer" }}
                    className="[text-decoration:none] relative text-[inherit] z-[1] bg-transparent border-0 text-white font-archivo text-[1rem]"
                    onClick={(e) => handleSectionClick(e, "careers")}
                  >
                    Careers
                  </button>
                  <div
                    className="flex flex-row items-start justify-start gap-[0.375rem] z-[1] relative"
                    ref={resourceDropdownRef}
                  >
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={toggleResourceDropdown}
                    >
                      <a className="[text-decoration:none] relative text-[inherit]">
                        Resources
                      </a>
                      <Image
                        className={`w-[0.8rem] h-[1rem] relative transition-transform duration-300 ${
                          resourceDropdown ? "rotate-180" : ""
                        }`}
                        width={7}
                        height={4}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    {resourceDropdown && (
                      <div
                        className="absolute top-full right-8rem bg-white shadow-lg mt-2 p-4 rounded-lg"
                        style={{
                          borderTopLeftRadius: "0", // Top-left corner
                          borderBottomRightRadius: "0", // Bottom-right corner
                          borderTopRightRadius: "1rem", // Top-right corner
                          borderBottomLeftRadius: "1rem", // Bottom-left corner
                        }}
                      >
                        <a
                          className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                          href="/blog"
                          style={{ textDecoration: "none" }}
                        >
                          Blog
                        </a>
                        <a
                          className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                          href="/partners"
                          style={{ textDecoration: "none" }}
                        >
                          Partners
                        </a>
                        <a
                          className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                          href="/case-studies"
                          style={{ textDecoration: "none" }}
                        >
                          Case Studies
                        </a>
                      </div>
                    )}
                  </div>
                  <button
                    className="[text-decoration:none] relative text-[inherit] bg-transparent border-0 text-white font-archivo text-[1rem] cursor-pointer"
                    onClick={(e) => handleSectionClick(e, "contactUs")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              <button
                className="cursor-pointer border-white border-[1px] border-solid py-[1rem] px-[2rem] bg-[transparent] h-[3.313rem] w-[11.438rem] rounded-8xs box-border flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border"
                onClick={(e) => handleSectionClick(e, "contactUs")}
              >
                <div className="h-[3.313rem] w-[11.438rem] relative rounded-8xs border-white border-[1px] border-solid box-border hidden" />
                <a
                  className="[text-decoration:none] flex-1 relative text-[1rem] font-archivo text-white text-center inline-block min-w-[7.5rem] z-[1]"
                  href="#"
                >
                  Request a Demo
                </a>
              </button>
            </div>
          )}

          {modal && isMenuOpen && (
            <div
              className="absolute top-full -left-12 mq450:-left-6 mq900:-left-8  right-0 backdrop-blur w-[100vw] h-[100vh] z-40 "
              style={{ backgroundColor: "#0000009e" }}
            >
              <div className="flex flex-col py-6 px-4 bg-transparent items-center justify-center gap-[1.5rem] mt-[2rem]">
                <a
                  href="/"
                  className="[text-decoration:none] relative font-semibold text-color-4 cursor-pointer text-[1.2rem]"
                >
                  Home
                </a>
                <button
                  className="[text-decoration:none] relative text-[inherit] cursor-pointer bg-transparent border-0 text-white font-archivo text-[1.2rem]"
                  onClick={(e) => {
                    handleSectionClick(e, "chooseUs");
                    toggleMenu();
                  }}
                >
                  Why Us
                </button>

                {/* Service Dropdown */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex flex-row items-center justify-center cursor-pointer gap-[0.5rem]"
                    onClick={toggleServiceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[1.2rem] text-white">
                      Service
                    </a>
                    <Image
                      className={`w-[0.588rem] h-[0.356rem] relative transition-transform duration-300 ${
                        serviceDropdown ? "rotate-180" : ""
                      }`}
                      width={9}
                      height={6}
                      alt=""
                      src="/sub-menu-icons.svg"
                    />
                  </div>
                  {serviceDropdown && (
                    <div className="mt-4 flex flex-col items-center gap-[1rem]">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/services-advisory"
                        className="text-white hover:text-gray-300 text-[1rem]"
                      >
                        Advisory
                      </a>
                      <a
                        style={{ textDecoration: "none" }}
                        href="/ServicesImplementation"
                        className="text-white hover:text-gray-300 text-[1rem]"
                      >
                        Implementation
                      </a>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown - Similar structure */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex flex-row items-center justify-center cursor-pointer gap-[0.5rem]"
                    onClick={toggleResourceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[1.2rem] text-white">
                      Resources
                    </a>
                    <Image
                      className={`w-[0.456rem] h-[0.275rem] relative transition-transform duration-300 ${
                        resourceDropdown ? "rotate-180" : ""
                      }`}
                      width={7}
                      height={4}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  {resourceDropdown && (
                    <div className="mt-4 flex flex-col items-center gap-[1rem]">
                      <a className="text-white hover:text-gray-300 text-[1rem]">
                        Blog
                      </a>
                      <a className="text-white hover:text-gray-300 text-[1rem]">
                        Partners
                      </a>
                      <a className="text-white hover:text-gray-300 text-[1rem]">
                        Case Studies
                      </a>
                    </div>
                  )}
                </div>

                {/* Other menu items */}
                <a
                  className="[text-decoration:none] relative text-[1.2rem] text-white cursor-pointer"
                  onClick={onSectorsTextClick}
                >
                  Sectors
                </a>
                <button
                  className="[text-decoration:none] relative text-[1.2rem] cursor-pointer bg-transparent border-0 text-white font-archivo"
                  onClick={(e) => {
                    handleSectionClick(e, "careers");
                    toggleMenu();
                  }}
                >
                  Careers
                </button>
                <button
                  className="[text-decoration:none] relative text-[1.2rem] cursor-pointer bg-transparent border-0 text-white font-archivo"
                  onClick={(e) => {
                    handleSectionClick(e, "contactUs");
                    toggleMenu();
                  }}
                >
                  Contact Us
                </button>

                {/* Demo button */}
                <button className="cursor-pointer border-white border-[1px] border-solid py-[1rem] px-[2rem] bg-[transparent] rounded-8xs mt-[1rem] hover:bg-gainsboro-200 hover:border-gainsboro-100">
                  <a className="[text-decoration:none] text-[1rem] font-archivo text-white text-center">
                    Request a Demo
                  </a>
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
    </section>
  );
};

export default NavbarPage;
