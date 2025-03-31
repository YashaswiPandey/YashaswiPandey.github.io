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
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { FaDev, FaPaperPlane, FaTools } from "react-icons/fa";
import { GiVitruvianMan } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { MdPerson, MdSchool } from "react-icons/md";
import { Section, SectionArray, SectionMap } from "types/Sections";

// Define the sections, including the commented-out ones
const sectionsList: SectionMap = {
  [Section.AboutMe]: {
    icon: MdPerson,
    title: "About Me",
  },
  [Section.Education]: {
    icon: MdSchool,
    title: "Education",
  },
  [Section.Skills]: {
    icon: FaTools,
    title: "Skills",
  },
  [Section.Leadership]: {
    icon: GiVitruvianMan,
    title: "Leadership",
  },
  [Section.Projects]: {
    icon: FaDev,
    title: "Projects",
  },
  [Section.Contact]: {
    icon: FaPaperPlane,
    title: "Contact",
  },
};

// Filter out only the uncommented sections (based on the Section enum)
const activeSections = Object.keys(sectionsList).filter((section) =>
  Object.values(Section).includes(section as Section),
);

// Create a new sections array that contains only active sections
export const sectionsArray: SectionArray = activeSections.map((id) => ({
  id: id as Section,
  icon: sectionsList[id as Section].icon,
  title: sectionsList[id as Section].title,
}));

export default sectionsList;
