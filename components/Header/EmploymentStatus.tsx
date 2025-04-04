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

const EmploymentStatus: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-3 group mt-8">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute w-full h-full bg-green-500/20 rounded-full animate-pulse" />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500 dark:text-green-400 relative z-10"
        >
          <circle cx="8" cy="8" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-green-600 dark:text-green-400 text-base tracking-wide transform writing-mode-vertical-rl font-medium">
          Actively looking
          <br />
          for full time
          <br />
          positions
        </span>
      </div>
    </div>
  );
};

export default EmploymentStatus;
