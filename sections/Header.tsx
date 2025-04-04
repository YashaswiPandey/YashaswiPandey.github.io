/*
 * Portfolio - (c) 2025 by Yashaswi Pandey
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import LifeTraining from "components/Header/LifeTraining";
import Location from "components/Header/Location";
import EmploymentStatus from "components/Header/EmploymentStatus";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHeader(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animateHeader) {
      const animationDuration = 3500;
      const totalDuration = animationDuration;
      const resetTimer = setTimeout(() => {
        setAnimateHeader(false);
      }, totalDuration);

      return () => clearTimeout(resetTimer);
    }
  }, [animateHeader]);

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
    <div className="flex flex-row w-full">
      {/* Left side div - reduced flex value */}
      <div className="hidden md:flex flex-[0.75] items-center justify-center mt-10 md:mt-20">
        {/* Content for left side */}
        <div className="h-[576px] pl-8">
          <p className="text-gray-500 rotate-180 transform writing-mode-vertical-rl"></p>
        </div>
      </div>

      {/* Main content container - increased width */}
      <div
        id="header"
        className={`flex-[1.5] flex flex-col items-center justify-center text-center mt-10 md:mt-20 overflow-x-hidden ${
          animateHeader && !isScrolled ? "animate-height-slow" : "h-[90vh]"
        }`}
      >
        <style jsx global>{`
          @keyframes height-adjust {
            0%,
            100% {
              height: 90vh;
            }
            50% {
              height: 80vh;
            }
          }
          .animate-height-slow {
            animation: height-adjust 3.5s ease-in-out 3;
          }
        `}</style>

        <div className="max-w-3xl w-full">
          {" "}
          {/* Increased max-width */}
          <h1 className="font-ndot57 text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">Yashaswi Pandey</h1>
          <div className="relative flex flex-col items-center mt-4">
            <span className="font-sahadeva text-3xl md:text-4xl lg:text-5xl">यशस्वी पाण्डे</span>
            <span className="text-lg md:text-2xl lg:text-3xl mt-5">
              <sup className="text-base md:text-xl lg:text-2xl">[jɐ.ʃɐs.ʋiː pɑːɳ.ɖeː]</sup>
            </span>
          </div>
        </div>

        <div className="m-6 flex flex-col items-center gap-6">
          <Profiles />
        </div>

        <div className="text-left w-full max-w-3xl">
          {" "}
          {/* Added width constraints */}
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

      {/* Right side div - reduced flex value */}
      <div className="hidden md:flex flex-[0.75] items-center justify-center mt-10 md:mt-20">
        {/* Content for right side */}
        <div className="h-[576px] pr-8">
          <div className="mb-8">
            <Location />
            <EmploymentStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
