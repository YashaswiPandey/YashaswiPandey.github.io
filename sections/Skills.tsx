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
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiAnaconda,
  SiAngular,
  SiApachespark,
  SiAutohotkey,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss3,
  SiD3Dotjs,
  SiDocker,
  SiDvc,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJulia,
  SiJupyter,
  SiKeras,
  SiKubernetes,
  SiLeaflet,
  SiLua,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPodman,
  SiPostman,
  SiPowerbi,
  SiPowershell,
  SiPython,
  SiPytorch,
  SiR,
  SiReact,
  SiScikitlearn,
  SiSelenium,
  SiSpringboot,
  SiStreamlit,
  SiTableau,
  SiTailwindcss,
  SiTensorflow,
  SiThymeleaf,
  SiTypescript,
  SiVirtualbox,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

type Skill = {
  id: number;
  icon: string;
  name: string;
  programs: { name: string; icon?: string | React.ComponentType }[];
  frameworks: { name: string; icon?: string | React.ComponentType }[];
};

const deviconMappings: Record<string, string> = {
  Python: "devicon-python-plain",
  R: "devicon-r-plain",
  SQL: "devicon-mysql-plain",
  Jupyter: "devicon-jupyter-plain",
  Anaconda: "devicon-anaconda-plain",
  Spark: "devicon-apachespark-plain",
  Julia: "devicon-julia-plain",
  MySQL: "devicon-mysql-plain",
  SQLite: "devicon-sqlite-plain",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  TypeScript: "devicon-typescript-plain",
  PHP: "devicon-php-plain",
  npm: "devicon-npm-original-wordmark",
  Java: "devicon-java-plain",
  "C++": "devicon-cplusplus-plain",
  C: "devicon-c-plain",
  Git: "devicon-git-plain",
  GitHub: "devicon-github-plain",
  Docker: "devicon-docker-plain",
  Kubernetes: "devicon-kubernetes-plain",
  Podman: "devicon-podman-plain",
  PowerShell: "devicon-powershell-plain",
  Lua: "devicon-lua-plain",
  Pandas: "devicon-pandas-plain",
  NumPy: "devicon-numpy-plain",
  Matplotlib: "devicon-matplotlib-plain",
  Selenium: "devicon-selenium-plain",
  Streamlit: "devicon-streamlit-plain",
  "D3.js": "devicon-d3js-plain",
  "Scikit-learn": "devicon-scikitlearn-plain",
  TensorFlow: "devicon-tensorflow-original",
  PyTorch: "devicon-pytorch-plain",
  Keras: "devicon-keras-plain",
  OpenCV: "devicon-opencv-plain",
  React: "devicon-react-plain",
  "Next.js": "devicon-nextjs-plain",
  Angular: "devicon-angularjs-plain",
  Bootstrap: "devicon-bootstrap-plain",
  "Tailwind CSS": "devicon-tailwindcss-plain",
  "Spring Boot": "devicon-spring-plain",
  Postman: "devicon-postman-plain",
};

const coloredDeviconMappings: Record<string, string> = Object.fromEntries(
  Object.entries(deviconMappings).map(([key, value]) => [key, `${value} colored`]),
);

const fallbackIcons: Record<string, React.ComponentType> = {
  Tableau: SiTableau,
  "Power BI": SiPowerbi,
  Excel: RiFileExcel2Fill,
  "Microsoft SQL Server": DiMsqlServer,
  "Azure Data Studio": VscAzure,
  Sapling: SiLeaflet,
  "Bash/Shell": SiGnubash,
  AutoHotkey: SiAutohotkey,
  VirtualBox: SiVirtualbox,
  Thymeleaf: SiThymeleaf,
  DVC: SiDvc,
};

const FallbackIcon = ({ isHovered }: { isHovered: boolean }) => (
  <FaCode
    className={`text-lg ${isHovered ? "text-[#F76900] dark:text-[#2B72D7]" : "text-neutral-500 dark:text-neutral-400"}`}
  />
);

const IconWrapper = ({
  icon: IconComponent,
  isHovered,
}: {
  icon: React.ComponentType<{ className?: string }>;
  isHovered: boolean;
}) => (
  <IconComponent
    className={`text-[1.1rem] ${isHovered ? "text-[#2B72D7]" : "text-neutral-700 dark:text-neutral-300"}`}
  />
);

const skills: Skill[] = [
  {
    id: 1,
    icon: "/images/skills/DS.svg",
    name: "Data Science",
    programs: ["Python", "R", "SQL", "Jupyter", "Anaconda", "Tableau", "Power BI", "Spark", "Excel", "Julia"].map(
      (name) => ({
        name,
        icon: deviconMappings[name] ?? fallbackIcons[name],
      }),
    ),
    frameworks: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Altair",
      "Bs4",
      "Selenium",
      "Dash",
      "Streamlit",
      "Shiny",
      "D3.js",
      "ggplot2",
      "Bokeh",
    ].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
  },
  {
    id: 2,
    icon: "/images/skills/ML.svg",
    name: "Machine Learning & AI",
    programs: [],
    frameworks: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Fast.ai", "Hugging Face", "OpenCV", "NLTK"].map(
      (name) => ({ name, icon: deviconMappings[name] ?? fallbackIcons[name] }),
    ),
  },
  {
    id: 3,
    icon: "/images/skills/DBMS.svg",
    name: "Database Management",
    programs: ["MySQL", "Microsoft SQL Server", "SSMS", "SQLite", "Azure Data Studio"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: [],
  },
  {
    id: 4,
    icon: "/images/skills/webdev.svg",
    name: "Web Development",
    programs: ["JavaScript", "HTML", "CSS", "TypeScript", "PHP", "npm", "Postman"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: ["React", "Next.js", "Angular", "Bootstrap", "Tailwind CSS", "Spring Boot", "Thymeleaf"].map(
      (name) => ({ name, icon: deviconMappings[name] ?? fallbackIcons[name] }),
    ),
  },
  {
    id: 5,
    icon: "/images/skills/misc.svg",
    name: "Misc. Development",
    programs: ["Java", "C++", "C"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: [],
  },
  {
    id: 6,
    icon: "/images/skills/vc.svg",
    name: "Version Control",
    programs: ["Git", "GitHub", "DVC", "Sapling"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: [],
  },
  {
    id: 7,
    icon: "/images/skills/deploy.svg",
    name: "Virtualization",
    programs: ["Docker", "Kubernetes", "Minikube", "VirtualBox", "Podman"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: [],
  },
  {
    id: 8,
    icon: "/images/skills/scripting.svg",
    name: "Scripting",
    programs: ["Bash/Shell", "PowerShell", "AutoHotkey", "Lua"].map((name) => ({
      name,
      icon: deviconMappings[name] ?? fallbackIcons[name],
    })),
    frameworks: [],
  },
];

const Skills = () => {
  const column1 = useRef<HTMLDivElement>(null);
  const column2 = useRef<HTMLDivElement>(null);

  const [leftCol, rightCol] = useMemo(() => {
    const estimateHeight = (skill: Skill) => {
      const baseHeight = 100;
      const itemHeight = 28;
      return baseHeight + (skill.programs.length + skill.frameworks.length) * itemHeight;
    };

    const sortedSkills = [...skills].sort((a, b) => estimateHeight(b) - estimateHeight(a));
    const columns = [
      { items: [] as Skill[], height: 0 },
      { items: [] as Skill[], height: 0 },
    ];

    sortedSkills.forEach((skill) => {
      const targetColumn = columns[0].height <= columns[1].height ? 0 : 1;
      columns[targetColumn].items.push(skill);
      columns[targetColumn].height += estimateHeight(skill);
    });

    return [columns[0].items, columns[1].items];
  }, []);

  return (
    <div id={Section.Skills} className="min-h-screen w-full">
      {getSectionHeading(Section.Skills)}

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div ref={column1} className="flex-1 flex flex-col gap-4">
          {leftCol.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div ref={column2} className="flex-1 flex flex-col gap-4">
          {rightCol.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const renderIcon = (icon: string | React.ComponentType | undefined, name: string, isHovered: boolean) => {
    if (!icon) return <FallbackIcon isHovered={isHovered} />;

    if (typeof icon === "string") {
      const iconClass = isHovered ? coloredDeviconMappings[name] || icon : icon;
      return (
        <i
          className={`${iconClass} text-[1.1rem] ${
            isHovered ? "text-[#F76900]" : "text-neutral-700 dark:text-neutral-300"
          }`}
        />
      );
    }

    return <IconWrapper icon={icon} isHovered={isHovered} />;
  };

  return (
    <div
      className="flex flex-col border border-neutral-900/10 dark:border-neutral-50/10 rounded-lg p-4 transition-all
    hover:border-[#948ae3] dark:hover:border-[#fce566]"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-3 -mt-6">
        <div className="w-5 h-5 min-w-[32px] bg-neutral-50 dark:bg-neutral-900 relative px-5 ">
          <Image
            src={skill.icon}
            alt={skill.name}
            layout="fill"
            className={`transition-all duration-300 ${
              isCardHovered
                ? "[filter:invert(57%)_sepia(56%)_saturate(252%)_hue-rotate(189deg)_brightness(91%)_contrast(92%)] dark:[filter:invert(89%)_sepia(48%)_saturate(482%)_hue-rotate(349deg)_brightness(102%)_contrast(98%)]"
                : "dark:[filter:invert(100%)_brightness(0.8)]"
            }`}
          />
        </div>
        <h3
          className={`text-md font-semibold px-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors ${
            isCardHovered ? "!text-[#fce566] dark:!text-[#948ae3]" : ""
          }`}
        >
          {skill.name}
        </h3>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {skill.programs.length > 0 && (
          <SkillSection title="Programs" items={skill.programs} renderIcon={renderIcon} isHovered={isCardHovered} />
        )}

        {skill.frameworks.length > 0 && (
          <SkillSection
            title="Frameworks/Libraries"
            items={skill.frameworks}
            renderIcon={renderIcon}
            isHovered={isCardHovered}
          />
        )}
      </div>
    </div>
  );
};

const SkillSection = ({
  title,
  items,
  renderIcon,
  isHovered,
}: {
  title: string;
  items: { name: string; icon?: string | React.ComponentType }[];
  renderIcon: (icon: any, name: string, isHovered: boolean) => JSX.Element;
  isHovered: boolean;
}) => {
  const getTitleColor = () => {
    if (!isHovered) return "text-neutral-900 dark:text-neutral-200";

    if (title === "Programs") {
      return "text-[#7bd88f] dark:text-[#fc618d]";
    } else {
      return "text-[#fc618d] dark:text-[#7bd88f]";
    }
  };

  return (
    <div>
      <h4 className={`text-sm font-medium mb-2 transition-colors ${getTitleColor()}`}>{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center gap-1 p-1.5 rounded-md bg-neutral-200 dark:bg-neutral-800 min-w-[100px] transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            {renderIcon(icon, name, isHovered)}
            <span className={`text-xs truncate ${isHovered ? "" : "text-neutral-900 dark:text-neutral-200"}`}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
