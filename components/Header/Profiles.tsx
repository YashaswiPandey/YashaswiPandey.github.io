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
import links from "data/links";
import { FaFilePdf } from "react-icons/fa6";

type Profile = {
  title: string;
  icon: string;
  link: string;
  className: string;
};

const deviconMappings = {
  LinkedIn: "devicon-linkedin-plain",
  Twitter: "devicon-twitter-original",
  GitHub: "devicon-github-original",
};

const coloredDeviconMappings = Object.fromEntries(
  Object.entries(deviconMappings).map(([key, value]) => [key, `${value} colored`]),
);

const profiles: Profile[] = [
  {
    title: "LinkedIn",
    icon: coloredDeviconMappings.LinkedIn,
    link: links.linkedin,
    className: "",
  },
{
  title: "GitHub",
  icon: coloredDeviconMappings.GitHub,
  link: links.github,
  className: "dark:invert",
},
];

const ResumeButton = () => {
  const resumePath = "/Resume/yashaswi-pandey-resume.pdf";

  const handleView = () => {
    window.open(resumePath, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "yashaswi-pandey-resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative animate__animated animate__fadeIn" style={{ animationDelay: "0.5s" }}>
    <div className="relative rounded-sm z-10 px-4 py-1.5 flex items-center bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 top-0 left-0 transition-[top_left] hover:top-0.5 hover:left-0.5 active:top-1 active:left-1">
    <div className="flex-[3] flex items-center gap-2 pr-2">
    <FaFilePdf fontSize={14} className="text-red-500" />
    <span className="font-bold text-sm">Resume</span>
    </div>
    <div className="flex-[1] flex flex-col h-full">
    <div
    className="flex-1 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors px-1 cursor-pointer text-xs"
    onClick={handleView}
    >
    View
    </div>
    <div
    className="flex-1 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors px-1 cursor-pointer text-xs"
    onClick={handleDownload}
    >
    Download
    </div>
    </div>
    </div>
    <div className="w-full h-full rounded-sm absolute top-1 left-1 border-2 border-neutral-900 dark:border-neutral-50" />
    </div>
  );
};

const Profiles: React.FC = () => (
  <div className="h-[22px] mt-5 flex gap-4 items-center">
  <ResumeButton />
  {profiles.map(({ title, link, icon, className }, index) => (
    <Tippy key={title} content={title} placement="bottom">
    <span
    className={clsx("p-1 text-sm rounded-full", "animate__animated animate__fadeIn", className)}
    style={{ animationDelay: `${index * 0.5 + 1}s` }}
    >
    <a href={link} target="_blank" rel="noreferrer">
    <i className={`${icon} text-[1.1rem]`} />
    <span className="sr-only">{title}</span>
    </a>
    </span>
    </Tippy>
  ))}
  </div>
);

export default Profiles;
