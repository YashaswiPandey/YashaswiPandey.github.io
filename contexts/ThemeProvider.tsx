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
import { createContext, useEffect, useState } from "react";

export type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultState: ThemeState = {
  isDarkMode: true,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(defaultState);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(defaultState.isDarkMode);

  const toggleTheme = () => setDarkMode((_isDarkMode) => !_isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
