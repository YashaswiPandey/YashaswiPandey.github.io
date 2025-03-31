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
    title: "Twitter",
    icon: coloredDeviconMappings.Twitter,
    link: links.twitter,
    className: "dark:invert",
  },
  {
    title: "GitHub",
    icon: coloredDeviconMappings.GitHub,
    link: links.github,
    className: "dark:invert",
  },
];

const Profiles: React.FC = () => (
  <div className="h-[22px] mt-5 flex gap-8">
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
