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
import clsx from "clsx";
import React from "react";

type RefProps = HTMLInputElement & HTMLTextAreaElement;

type Props = {
  label: string;
  hasError?: boolean;
  className?: string;
  placeholder: string;
  description: string;
  type?: React.HTMLInputTypeAttribute | "textarea";
};

const Input = React.forwardRef<RefProps, Props>(
  ({ label, description, placeholder, className, hasError = false, type = "text", ...props }, ref) => {
    const inputClassName = clsx(
      "text-base bg-transparent border-2 border-slate-300 dark:border-slate-700 px-5 py-3 rounded focus:outline-none focus:border-slate-700 dark:focus:border-slate-300 transition-[border]",
      {
        "animate__animated animate__shakeX border-red-300 dark:border-red-700 focus:border-red-700 dark:focus:border-red-300":
          hasError,
      },
    );

    return (
      <label className={clsx("flex flex-col gap-2", className)}>
        <span className="font-bold">{label}</span>

        {type === "textarea" ? (
          <textarea ref={ref} rows={4} placeholder={placeholder} className={inputClassName} {...props} />
        ) : (
          <input ref={ref} type={type} placeholder={placeholder} className={inputClassName} {...props} />
        )}

        <span className={clsx("text-xs", { "text-red-500": hasError })}>{description}</span>
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
