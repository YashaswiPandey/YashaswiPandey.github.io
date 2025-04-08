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
import Image from "next/image";
import { useCallback } from "react";
import { scroller } from "react-scroll";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => {
  const handleContactScroll = useCallback(() => {
    scroller.scrollTo(Section.Contact, {
      duration: 500,
      smooth: true,
      offset: -window.innerHeight * 0.25, // Matches navigation offset
    });
  }, []);

  return (
    <div id={Section.AboutMe}>
      {getSectionHeading(Section.AboutMe)}

      <div className="grid md:grid-cols-4 gap-12">
        <div className="relative col-span-1 hidden md:flex flex-col items-center mt-8">
          {/* Image Container */}
          <div className="relative aspect-square w-full max-w-[600px]">
            <Image
              fill
              alt="meditate"
              src="./images/about-me/animated_meditate.svg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Copyright Notice */}
          <footer className="mt-2 w-2/3 mx-auto text-center text-xs text-gray-500 dark:text-gray-400">
            Copyright © 2001 Free Software Foundation, Inc.
          </footer>

          {/* Description Text */}
          <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
            This is me, taking a moment to meditate and reflect. I believe in the importance of balance in life.
          </p>
        </div>

        <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert lg:mt-8">
          <p>Hello World!</p>

          <p>
            Welcome to my little corner of the web, which is constantly evolving with updates from different aspects
            of my life.
          </p>

          <p>
            I remember using LOGO and MS BASIC in some early programming classes. I knew at the time that my future lay
            in manipulating ones and zeroes to do my bidding. Later, I dabbled in Visual Basic
            scripting, C++, and Java (which would remain a part of my life for the next decade), along with mySQL. In
            college, deeper knowledge of databases, Java, and Web Development became my main focus.
          </p>

          <p>
            My other interests lie in photography, traveling, learning new things, and sports. The latter, funnily
            enough, played a major role in my decision to pursue Data Science, but that&apos;s a story for another time.
            Currently, I am in my final semester at Syracuse University, on track to complete my Masters in Data Science
            by the end of Spring &apos;25.
          </p>

          <p>
            I created this website because I truly believe that the best way to learn something is by building it.
            Instead of taking the easy route with no-code solutions, I decided to brush up on my Web Development skills.
            If you would like to connect with me, head on over to the{" "}
            <a
              href={`#${Section.Contact}`}
              onClick={(e) => {
                e.preventDefault();
                handleContactScroll();
              }}
              className="text-[#2B72D7] dark:text-[#F76900] hover:underline cursor-pointer transition-colors duration-300"
            >
              contact section
            </a>{" "}
            below and drop me a mail!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
