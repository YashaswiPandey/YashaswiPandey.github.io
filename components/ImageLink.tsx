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
import { BiLinkExternal } from "react-icons/bi";

type Dimensions = { width: number; height: number };

type Props = {
  src: string;
  alt: string;
  href?: string;
  height?: number;
  dimensions?: Dimensions;
  imageClassName?: string;
};

const ImageLink: React.FC<Props> = ({ src, alt, href = "#", height, dimensions, imageClassName }) => (
  <div className="relative overflow-hidden shadow rounded group">
  <a href={href} target="_blank" rel="noreferrer" className="flex">
  {dimensions ? (
    <img
    src={src}
    alt={alt}
    width={dimensions.width}
    height={dimensions.height}
    className={clsx(
      "rounded shadow-lg object-cover",
      "grayscale transition-all duration-300 group-hover:grayscale-0",
      imageClassName
    )}
    />
  ) : (
    <div style={{ height }} className="w-full relative rounded shadow-lg overflow-hidden min-h-[250px]">
    <img
    src={src}
    alt={alt}
    width={height! * 2}
    height={height}
    className={clsx(
      "object-cover",
      "grayscale transition-all duration-300 group-hover:grayscale-0",
      imageClassName
    )}
    />
    </div>
  )}
  <div className="absolute inset-0 bg-neutral-900 text-white opacity-0 flex items-center justify-center transition group-hover:opacity-60">
  <BiLinkExternal fontSize={64} />
  </div>
  </a>
  </div>
);

export default ImageLink;
