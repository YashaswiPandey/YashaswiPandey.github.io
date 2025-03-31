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

import Tippy from "@tippyjs/react";
import { useAnimation } from "contexts/AnimationContext";
import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import { useCallback,useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";
import tippy from "tippy.js";
import { hideAll } from "tippy.js";
import { Section } from "types/Sections";

// Configure Tippy
if (typeof document !== "undefined") {
  tippy.setDefaultProps({
    appendTo: document.body,
    animation: "shift-away",
    duration: 200,
    arrow: true,
    interactive: true,
    theme: "light",
    offset: [0, 10],
  });
}

const Navigation = () => {
  // All hooks must be called unconditionally at the top
  const { isAnimationActive } = useAnimation();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [collapseTimeout, setCollapseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isNameExpanded, setIsNameExpanded] = useState(false);
  const { width } = useWindowDimensions();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Calculate derived values after hooks
  const isDesktop = width ? width > Breakpoints.lg : false;
  const themeLabel = isDarkMode ? "Switch to light theme" : "Switch to dark theme";
  const sidebarLabel = isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar";
  const goToTopTooltipPlacement = isDesktop ? "bottom" : "right";
  const themeTooltipPlacement = isDesktop ? "top" : "left";

  // Memoized callbacks
  const toggleSidebar = useCallback(() => {
    setIsSidebarExpanded((prev) => !prev);
    setIsNameExpanded((prev) => !prev);
  }, []);

  const goToSection = useCallback((section: Section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -window.innerHeight * 0.25,
    });
    setIsSidebarExpanded(false);
    setIsNameExpanded(false);
  }, []);

  const startCollapseTimer = useCallback(() => {
    if (collapseTimeout) clearTimeout(collapseTimeout);
    const timer = setTimeout(() => {
      setIsSidebarExpanded(false);
      setIsNameExpanded(false);
    }, 3000);
    setCollapseTimeout(timer);
  }, [collapseTimeout]);

  const handleMouseEnter = useCallback(() => {
    if (collapseTimeout) clearTimeout(collapseTimeout);
  }, [collapseTimeout]);

  const handleMouseLeave = useCallback(() => {
    if (isSidebarExpanded) startCollapseTimer();
  }, [isSidebarExpanded, startCollapseTimer]);

  const handleGoToTop = useCallback(() => {
    animateScroll.scrollToTop();
    if (isSidebarExpanded) {
      setIsSidebarExpanded(false);
      setIsNameExpanded(false);
    }
    setTimeout(() => hideAll(), 2000);
  }, [isSidebarExpanded]);

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
    setTimeout(() => hideAll(), 1000);
  }, [toggleTheme]);

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        if (headerRect.top <= window.innerHeight * 0.5 && headerRect.bottom >= window.innerHeight * 0.5) {
          setActiveSection(null);
          return;
        }
      }

      sectionsArray.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (collapseTimeout) clearTimeout(collapseTimeout);
    };
  }, [collapseTimeout]);

  // Early return after all hooks
  if (isAnimationActive) return null;

  // Mobile view
  if (!isDesktop) {
    return (
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between w-screen px-4 py-3 bg-white border-b border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900">
        <Tippy content="Go to Top" placement={goToTopTooltipPlacement}>
          <button
            aria-label="Scroll to top"
            onClick={handleGoToTop}
            className="rounded-full hover:opacity-80 transition-opacity duration-300 group"
          >
            <div className="font-ndot57 text-2xl text-neutral-800 dark:text-neutral-200 transition-colors duration-300 group-hover:text-[#2B72D7] dark:group-hover:text-[#F76900]">
              YP
            </div>
          </button>
        </Tippy>

        <Tippy content={themeLabel} placement={themeTooltipPlacement}>
          <button
            aria-label={themeLabel}
            onClick={handleThemeToggle}
            className="p-2 text-neutral-800 hover:text-[#2B72D7] dark:text-neutral-200 dark:hover:text-[#F76900] transition-colors duration-300"
          >
            {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </Tippy>
      </nav>
    );
  }

  // Desktop view
  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-y-0 left-0 z-50 flex flex-col h-screen bg-white border-r border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 transition-all duration-500 ease-in-out ${
        isSidebarExpanded ? "w-48" : "w-12"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center h-full py-6">
        {/* Go to Top Button */}
        <Tippy content="Go to Top" placement={goToTopTooltipPlacement}>
          <button
            aria-label="Scroll to top"
            onClick={handleGoToTop}
            className="mb-2 rounded-full hover:opacity-80 transition-opacity duration-500 w-full group"
          >
            <div className="relative overflow-hidden w-full">
              <div
                className={`font-ndot57 text-3xl text-neutral-800 dark:text-neutral-200 transition-all duration-500 ${
                  isNameExpanded ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                } group-hover:text-[#2B72D7] dark:group-hover:text-[#F76900]`}
              >
                YP
              </div>
              <div
                className={`absolute top-0 left-0 font-ndot57 text-xl text-neutral-800 dark:text-neutral-200 transition-all duration-500 ${
                  isNameExpanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                } group-hover:text-[#2B72D7] dark:group-hover:text-[#F76900]`}
                style={{
                  width: isSidebarExpanded ? "100%" : "0",
                  whiteSpace: "nowrap",
                }}
              >
                Yashaswi Pandey
              </div>
            </div>
          </button>
        </Tippy>

        <div className="flex-1 flex flex-col justify-center items-center w-full">
          {/* Sidebar Toggle Button */}
          <Tippy content={sidebarLabel} placement="right">
            <button
              aria-label={sidebarLabel}
              onClick={toggleSidebar}
              className="mb-4 p-2 text-neutral-800 hover:text-[#2B72D7] dark:text-neutral-200 dark:hover:text-[#F76900] transition-colors duration-300 relative group"
            >
              <FiMenu
                size={20}
                className={`w-5 h-5 transform transition-transform duration-500 ${
                  isSidebarExpanded ? "rotate-90" : ""
                } ${
                  isSidebarExpanded ? "hover:animate-verticalJitter" : "hover:animate-jitter"
                } group-hover:text-[#2B72D7] dark:group-hover:text-[#F76900]`}
              />
            </button>
          </Tippy>

          {/* Section Links */}
          <ul className="w-full space-y-4">
            {sectionsArray.map(({ id, icon: Icon, title }) => (
              <li key={id} className="px-2">
                <Tippy content={title} placement="right">
                  <button
                    aria-label={`Scroll to ${title} section`}
                    onClick={() => goToSection(id)}
                    className={`group flex items-center justify-start w-full p-2 transition-colors duration-300 ${
                      activeSection === id
                        ? "text-[#2B72D7] dark:text-[#F76900]"
                        : "text-neutral-800 dark:text-neutral-200"
                    } hover:text-[#2B72D7] dark:hover:text-[#F76900]`}
                  >
                    <Icon
                      size={20}
                      className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${
                        activeSection === id ? "scale-125" : "group-hover:scale-125"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`ml-4 text-sm whitespace-nowrap overflow-hidden transition-all duration-50 ease-in-out ${
                        isSidebarExpanded
                          ? "max-w-[100px] opacity-100 translate-x-0"
                          : "max-w-0 opacity-0 -translate-x-4"
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                </Tippy>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle Button */}
        <Tippy content={themeLabel} placement={themeTooltipPlacement}>
          <button
            aria-label={themeLabel}
            onClick={handleThemeToggle}
            className="p-2 text-neutral-800 hover:text-[#2B72D7] dark:text-neutral-200 dark:hover:text-[#F76900] transition-colors duration-300 transform hover:scale-110 group"
          >
            {isDarkMode ? (
              <FaMoon size={20} className="w-5 h-5 transition-transform duration-300 group-hover:text-[#F76900]" />
            ) : (
              <FaSun size={20} className="w-5 h-5 transition-transform duration-300 group-hover:text-[#2B72D7]" />
            )}
          </button>
        </Tippy>
      </div>
    </nav>
  );
};

export default Navigation;
