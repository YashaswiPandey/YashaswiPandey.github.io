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
import { useEffect, useState } from "react";

import { getCustomDayOfYear,isLeapYear } from "../utils/dateUtils";

const calculateAge = (date: Date) => {
  const birthYear = 1996;
  const currentYear = date.getFullYear();
  const birthDate = new Date(currentYear, 10, 12); // November 12th

  // Subtract 1 year if birthday hasn't occurred yet this year
  return date >= birthDate ? currentYear - birthYear : currentYear - birthYear - 1;
};

const getTotalBatches = (date: Date) => {
  const currentYear = date.getFullYear();
  const birthDate = new Date(currentYear, 10, 12);
  const nextBirthdayYear = date >= birthDate ? currentYear + 1 : currentYear;
  return isLeapYear(nextBirthdayYear) ? 366 : 365;
};

export const useLifeMetrics = () => {
  const [metrics, setMetrics] = useState(() => ({
    epoch: calculateAge(new Date()),
    batch: getCustomDayOfYear(new Date()),
    totalBatches: getTotalBatches(new Date()),
    loss: 0.55,
    accuracy: 0.83,
    valLoss: 0.32,
    valAccuracy: 0.89,
  }));

  const [progress, setProgress] = useState({
    bar: "[....................]",
    percentage: 0.0,
  });

  useEffect(() => {
    const updateMetrics = () => {
      const now = new Date();

      setMetrics((prev) => ({
        ...prev,
        epoch: calculateAge(now),
        batch: getCustomDayOfYear(now),
        totalBatches: getTotalBatches(now),
      }));

      // Daily progress calculation
      const startOfDay = new Date(now);
      startOfDay.setHours(0, 0, 0, 0);
      const dayProgress = (now.getTime() - startOfDay.getTime()) / 86400000;
      const filled = Math.min(20, Math.floor(dayProgress * 20));

      setProgress({
        bar: `[${"=".repeat(filled)}${".".repeat(20 - filled)}]`,
        percentage: Number((dayProgress * 100).toFixed(4)),
      });

      // Metric fluctuations
      setMetrics((prev) => ({
        ...prev,
        loss: Math.max(0.3, Math.min(0.7, prev.loss + (Math.random() - 0.5) * 0.02)),
        accuracy: Math.max(0.7, Math.min(0.95, prev.accuracy + (Math.random() - 0.5) * 0.02)),
        valLoss: Math.max(0.2, Math.min(0.4, prev.valLoss + (Math.random() - 0.5) * 0.01)),
        valAccuracy: Math.max(0.85, Math.min(0.95, prev.valAccuracy + (Math.random() - 0.5) * 0.01)),
      }));
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    epoch: metrics.epoch,
    batch: metrics.batch,
    progress,
    metrics,
  };
};
