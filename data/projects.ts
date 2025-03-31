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
import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "./images/projects/messiERA.png",
    name: "Messi Career Analysis at Barcelona",
    summary:
      "This project demonstrates the use of soccer analytics for player scouting and match preparation by visualizing on-field performance. Using event data from Lionel Messi’s matches for FC Barcelona in La Liga, it showcases his evolution from a young prodigy to one of the greatest players of all time.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Dash", "Plotly"],
    link: {
      github: "https://github.com/YashaswiPandey/IST652-FinalProject",
    },
  },
  {
    id: 2,
    image: "./images/projects/messiGA.jpg",
    name: "Goals, Assists, and Records The Graphical Story of Messi",
    summary:
      "Visualized Messi’s career statistics in La Liga using R, showcasing goal involvement patterns, assists distribution, and shooting trends to provide a comprehensive graphical story of his impact on Barcelona.",
    tags: ["R", "Adobe Illustrator"],
    link: {
      web: "./images/projects/messiLL.jpg",
      github: "https://github.com/YashaswiPandey/messi-graphical",
    },
  },
  {
    id: 3,
    image: "./images/projects/WWC.png",
    name: "FIFA Womens World Cup",
    summary:
      "The project analyzes the FIFA Women's World Cup dataset using Tableau, R, and Excel to derive actionable insights on player and team performance. It includes visualizations, predictive models, and interactive dashboards to communicate findings effectively. The project ensures ethical data usage, emphasizing fairness, transparency, and responsible analysis.",
    tags: ["Tableau", "R", "Excel", "SQL "],
    link: {
      web: "https://public.tableau.com/app/profile/yashaswipandey/viz/FIFAWomensWorldCup_17403449819710/Dashboard1",
    },
  },
];

export default projectsList;
