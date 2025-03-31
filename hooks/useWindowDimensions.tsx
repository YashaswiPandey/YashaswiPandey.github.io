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
import { useCallback, useEffect, useState } from "react";

type WindowDimensions = { width: number; height: number };

export enum Breakpoints {
  "xs" = 0, // Extra small (optional, Tailwind starts at 'sm')
  "sm" = 640, // Small devices (phones, 640px and up)
  "md" = 768, // Medium devices (tablets, 768px and up)
  "lg" = 1024, // Large devices (desktops, 1024px and up)
  "xl" = 1280, // Extra large (large desktops, 1280px and up)
  "2xl" = 1536, // 2X large (larger desktops, 1536px and up)
}

const useWindowDimensions = (): WindowDimensions => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;

    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
};

export default useWindowDimensions;
