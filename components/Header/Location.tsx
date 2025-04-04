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
import React from "react";

const Location: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <img
        src="/images/header/location.svg"
        alt="Location icon"
        className="w-8 h-8 dark:invert transition-colors duration-300"
      />
      <div className="flex flex-col">
        <span className=" tracking-wide transform writing-mode-vertical-rl">
          Syracuse, New York
          <br />
          Willing to relocate
        </span>
      </div>
    </div>
  );
};

export default Location;
