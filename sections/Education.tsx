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
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 4;

type Education = {
  id: number;
  logo: string;
  institution: string;
  degree: string;
  study: string;
  location: string;
  period: { start: string; end: string };
};

const education: Education[] = [
  {
    id: 1,
    logo: "./images/education/su.png",
    institution: "Syracuse University",
    degree: "Masters",
    study: "Applied Data Science",
    location: "Syracuse, New York",
    period: { start: "2023", end: "2025" },
  },
  {
    id: 2,
    logo: "./images/education/sheridan.png",
    institution: "Sheridan College",
    degree: "Diploma",
    study: "Computer Programming",
    location: "Brampton, Canada",
    period: { start: "2019", end: "2020" },
  },
  {
    id: 3,
    logo: "./images/education/Ietlogo.png",
    institution: "Institue of Engineering and Technology",
    degree: "Bachelors",
    study: "Computer Science & Engineering",
    location: "Lucknow, India",
    period: { start: "2014", end: "2018" },
  },
];

type Props = {
  data: Education;
  isFirst: boolean;
  isLast: boolean;
};

const Education: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div
      className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", {
        "rounded-t": isFirst,
        "rounded-b": isLast,
      })}
    />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      {/* Image container with debug borders and fixed dimensions */}
      <div className="relative w-[80px] h-10 flex items-left justify-left">
        {" "}
        {/* Debug border */}
        <Image
          src={data.logo}
          width={80}
          height={40}
          alt={data.institution}
          className="object-contain w-full h-full"
          onError={(e) => {
            console.error("Image failed to load:", data.logo);
            e.currentTarget.src = "/fallback-logo.png"; // Add a fallback
          }}
        />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.institution}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>
          {data.degree}, {data.study}
        </h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>
    </div>
  </div>
);

const EducationTimeline = () => {
  const [showMore, setShowMore] = useState(education.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.Education}>
      {getSectionHeading(Section.Education)}

      <div className="flex flex-col">
        {education
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <Education key={data.id} data={data} isFirst={index === 0} isLast={index === 2} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${education.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default EducationTimeline;
