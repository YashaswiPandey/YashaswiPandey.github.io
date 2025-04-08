/*
 * Portfolio - (c) 2025 by Yashaswi Pandey
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
import LifeTraining from "components/Header/LifeTraining";
import Location from "components/Header/Location";
import EmploymentStatus from "components/Header/EmploymentStatus";
import Profiles from "components/Header/Profiles";
import IPAAudioIcon from "components/Header/IPAAudioIcon";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = width < Breakpoints.md; // Determine if the device is mobile

  // Trigger the animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHeader(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Turn off the animation after it runs for 3.5s
  useEffect(() => {
    if (animateHeader) {
      const animationDuration = 3500;
      const resetTimer = setTimeout(() => {
        setAnimateHeader(false);
      }, animationDuration);
      return () => clearTimeout(resetTimer);
    }
  }, [animateHeader]);

  // Disable animation if the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setAnimateHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
    <div
    className={`flex flex-col md:flex-row w-full max-w-7xl mx-auto ${
      animateHeader && !isScrolled
      ? isMobile
      ? "animate-height-mobile"
      : "animate-height-desktop"
      : ""
    }`}
    >
    <style jsx global>{`
      @keyframes height-adjust-desktop {
        0%, 100% {
          height: 90vh;
        }
        50% {
          height: 85vh;
        }
      }
      .animate-height-desktop {
        animation: height-adjust-desktop 3.5s ease-in-out 3;
      }
      @keyframes height-adjust-mobile {
        0%, 100% {
          height: 90vh;
        }
        50% {
          height: 80vh;
        }
      }
      .animate-height-mobile {
        animation: height-adjust-mobile 3.5s ease-in-out 3;
      }
      `}</style>

      {/* Left Column - EXACTLY as you had it */}
      <div className="hidden md:flex flex-[0.75] items-center justify-center mt-10 md:mt-20">
      <div className="h-[576px] pl-8">
      <p className="text-gray-500 rotate-180 transform writing-mode-vertical-rl"></p>
      </div>
      </div>

      {/* Center Column - EXACTLY as you had it */}
      <div className="flex-[1.5] flex flex-col items-center justify-center text-center mt-20 md:mt-20 min-h-[60vh] md:min-h-[90vh]">
      <div className="max-w-3xl w-full px-4 md:px-0">
      <h1 className="font-ndot57 text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
      Yashaswi Pandey
      </h1>
      <div className="relative flex flex-col items-center mt-4">
      <span className="font-Sahadeva text-2xl md:text-4xl lg:text-5xl">
      यशस्वी पाण्डे
      </span>
      <span className="text-base md:text-2xl lg:text-3xl mt-3 md:mt-5 relative">
      <sup className="text-sm md:text-xl lg:text-2xl relative inline-block pr-8">
      [jəˈʃəswiˈ pæːndeɪ]
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
      <IPAAudioIcon />
      </span>
      </sup>
      </span>
      </div>
      </div>

      <div className="m-4 md:m-6 flex flex-col items-center gap-4 md:gap-6">
      <Profiles />
      </div>

      <div className="text-left w-full max-w-3xl px-4 md:px-0">
      <LifeTraining />
      </div>

      <h1 className="sr-only">
      Yashaswi Pandey
      <br />
      Analyst, Storyteller, Developer, Scientist
      <br />
      Syracuse, New York &amp; Lucknow, India
      </h1>
      </div>

      {/* Right Column - EXACTLY as you had it */}
      <div className="order-3 md:order-none flex flex-col items-center justify-center md:mt-40 md:flex-[0.75]">
      <div className="w-full max-w-md md:max-w-none md:h-[576px] md:pr-8 px-4 md:px-0">
      <div className="mb-8 flex flex-col items-center md:items-center">
      <Location />
      <EmploymentStatus />
      </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Header;
