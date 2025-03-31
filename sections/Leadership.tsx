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

const MAX_DISPLAY_COUNT = 2;

type LeadershipRole = {
  id: number;
  logo: string;
  organizationName: string;
  duration: { start: string; end: string };
  title: string;
  location: string;
  description: string;
  keyFocus: string[];
};

const leadershipRoles: LeadershipRole[] = [
  {
    id: 1,
    logo: "./images/leadership/CSS.png",
    organizationName: "Coding Syndicate of Sheridan",
    duration: { start: "May 19", end: "May 20" },
    title: "President",
    location: "Brampton, Canada",
    description: "",
    keyFocus: [],
  },
  {
    id: 2,
    logo: "./images/leadership/Ietlogo.png",
    organizationName: "Media Team, IET Lucknow",
    duration: { start: "Nov 14", end: "Jun 18" },
    title: "Founder/President",
    location: "Lucknow, India",
    description: "",
    keyFocus: [],
  },
];

type Props = {
  role: LeadershipRole;
  isFirst: boolean;
  isLast: boolean;
};

const LeadershipRoleItem: React.FC<Props> = ({ role, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[80px] h-10 flex items-left justify-left">
        <Image src={role.logo} alt={role.organizationName} width={80} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{role.organizationName}</span>{" "}
          <span className="text-xs">
            ({role.duration.start} - {role.duration.end})
          </span>
        </h3>
        <h4>{role.title}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{role.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{role.description}</p>
    </div>
  </div>
);

const LeadershipTimeline = () => {
  const [showAllRoles, setShowAllRoles] = useState(leadershipRoles.length > MAX_DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.Leadership}>
      {getSectionHeading(Section.Leadership)}

      <div className="flex flex-col">
        {leadershipRoles
          .filter((_, index) => (showAllRoles ? true : index < MAX_DISPLAY_COUNT))
          .map((role, index) => (
            <LeadershipRoleItem
              key={role.id}
              role={role}
              isFirst={index === 0}
              isLast={index === leadershipRoles.length - 1}
            />
          ))}
      </div>

      {!showAllRoles && (
        <Tippy content={`Show ${leadershipRoles.length - MAX_DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowAllRoles(true)}>
            <MdMoreHoriz />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default LeadershipTimeline;
