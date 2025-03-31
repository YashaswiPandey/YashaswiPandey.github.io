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
import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 mb-4 hover:text-[#2B72D7] hover:dark:text-[#F76900] transition-colors">
    {Icon && <Icon size={14} />}

    <span className="font-ndot57 uppercase text-sm relative -bottom-px">{children}</span>
  </div>
);

export default Heading;
