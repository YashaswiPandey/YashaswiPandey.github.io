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
import Heading from "components/Heading";
import sectionsList from "data/sections";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import type { Section } from "types/Sections";

export const formatDateString = (date: string) => format(parseISO(date), "do MMMM yyyy");

export const openURLInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export const getSectionHeading = (section: Section) => (
  <Heading icon={sectionsList[section].icon}>{sectionsList[section].title}</Heading>
);
