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
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import { useEffect, useState } from "react"; // Add this import

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [animateHeader, setAnimateHeader] = useState(false); // State for animation
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Add a 5-second delay before starting the height animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHeader(true);
    }, 5000); // 5-second delay
    return () => clearTimeout(timer);
  }, []);

  // Reset height to 90vh after the animation completes
  useEffect(() => {
    if (animateHeader) {
      const animationDuration = 3500; // 3.5 seconds per iteration
      const totalDuration = animationDuration; // 1 iterations * [x]
      const resetTimer = setTimeout(() => {
        setAnimateHeader(false); // Stop the animation
      }, totalDuration);

      return () => clearTimeout(resetTimer);
    }
  }, [animateHeader]);

  // Detect scroll and stop animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set scroll state to true
        setAnimateHeader(false); // Stop the animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="header"
      className={`flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 mt-10 md:mt-20 overflow-x-hidden
      ${animateHeader && !isScrolled ? "animate-height-slow" : "h-[90vh]"}`} // Apply animation class conditionally
    >
      {/* Add this style tag for the animation */}
      <style jsx global>{`
        @keyframes height-adjust {
          0%,
          100% {
            height: 90vh;
          }
          50% {
            height: 80vh; // Reduce height to 80vh
          }
        }
        .animate-height-slow {
          animation: height-adjust 3.5s ease-in-out 3; // Run animation 3 times
        }
      `}</style>

      {/* Text Logo */}
      <div className="max-w-2xl w-full">
        <h1 className="font-ndot57 text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">Yashaswi Pandey</h1>
        <div className="relative flex flex-col items-center mt-4">
          <span className="font-sahadeva text-3xl md:text-4xl lg:text-5xl">यशस्वी पाण्डे</span>
          <span className="text-lg md:text-2xl lg:text-3xl mt-5">
            <sup className="text-base md:text-xl lg:text-2xl">[jɐ.ʃɐs.ʋiː pɑːɳ.ɖeː]</sup>
          </span>
        </div>
      </div>

      {/* Left-aligned LifeTraining */}
      <div className="text-left ">
        <LifeTraining />
      </div>

      {/* Additional Components */}
      <div className="mt-8 w-full flex flex-col items-center gap-6">
        <Profiles />
      </div>

      {/* Screen Reader Accessible Title */}
      <h1 className="sr-only">
        Yashaswi Pandey - Resume on the Web
        <br />
        Analyst, Storyteller, Developer, Scientist
        <br />
        Syracuse, New York &amp; Lucknow, India
      </h1>
    </div>
  );
};

export default Header;
