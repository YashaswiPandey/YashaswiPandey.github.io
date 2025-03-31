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
import Tippy from "@tippyjs/react";
import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import projectsList from "data/projects";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaCode, FaGithub } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiTableau } from "react-icons/si";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const deviconMappings: Record<string, string> = {
  Python: "devicon-python-plain",
  Pandas: "devicon-pandas-plain",
  Numpy: "devicon-numpy-plain",
  Matplotlib: "devicon-matplotlib-plain",
  Dash: "devicon-plotly-plain",
  Plotly: "devicon-plotly-plain",
  R: "devicon-r-plain",
  SQL: "devicon-sqldeveloper-plain",
  Jupyter: "devicon-jupyter-plain",
  "Adobe Illustrator": "devicon-illustrator-plain",
};

const coloredDeviconMappings: Record<string, string> = Object.fromEntries(
  Object.entries(deviconMappings).map(([key, value]) => [key, `${value} colored`]),
);

const fallbackIcons: Record<string, React.ComponentType> = {
  Tableau: SiTableau,
  Excel: RiFileExcel2Fill,
};

const Projects = () => {
  // Track hover state by project ID (now accepts number or null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const renderIcon = (tag: string, projectId: number) => {
    const isHovered = hoveredProject === projectId;
    const trimmedTag = tag.trim();
    const isDevicon = deviconMappings[trimmedTag];
    const icon = isDevicon ? deviconMappings[trimmedTag] : fallbackIcons[trimmedTag];

    if (isDevicon) {
      return (
        <i
          className={`${isHovered ? coloredDeviconMappings[trimmedTag] : deviconMappings[trimmedTag]} text-[1.1rem]`}
        />
      );
    }

    const IconComponent = icon || FaCode;
    return (
      <IconComponent
        className={`text-[1.1rem] ${
          isHovered ? "text-[#F76900] dark:text-[#2B72D7]" : "text-neutral-700 dark:text-neutral-300"
        }`}
      />
    );
  };

  return (
    <div id={Section.Projects}>
      {getSectionHeading(Section.Projects)}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <ImageLink
              alt={project.name}
              src={project.image}
              dimensions={{ width: 500, height: 250 }}
              href={project.link?.web || project.link?.github}
            />

            <h4 className="text-lg font-bold group-hover:text-[#F76900] dark:group-hover:text-[#2B72D7] transition-colors">
              {project.name}
            </h4>

            <p className="prose prose-sm prose-neutral dark:prose-invert">{project.summary}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1 p-1.5 rounded-md bg-neutral-200 dark:bg-neutral-800 transition-colors group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700"
                >
                  {renderIcon(tag, project.id)}
                  <span
                    className={`text-xs ${
                      hoveredProject === project.id
                        ? "text-[#F76900] dark:text-[#2B72D7]"
                        : "text-neutral-900 dark:text-neutral-200"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {project.link && (
              <div className="mt-1 flex gap-5">
                {project.link.web && (
                  <Tippy content="Visit Website" placement="bottom">
                    <a
                      href={project.link.web}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-[#F76900] dark:hover:text-[#2B72D7] transition-colors"
                    >
                      <BiLinkExternal fontSize={18} />
                    </a>
                  </Tippy>
                )}

                {project.link.github && (
                  <Tippy content="Checkout Source Code" placement="bottom">
                    <a
                      href={project.link.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-[#F76900] dark:hover:text-[#2B72D7] transition-colors"
                    >
                      <FaGithub fontSize={18} />
                    </a>
                  </Tippy>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <Button
        icon={FaGithub}
        className="mt-8 hover:!text-[#F76900] dark:hover:!text-[#2B72D7]"
        onClick={() => openURLInNewTab(links.github)}
      >
        Projects on GitHub
      </Button>
    </div>
  );
};

export default Projects;
