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
import { useAnimation } from "contexts/AnimationContext";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { AboutMe, Contact, Education, Footer, Header, Leadership, Projects, Skills } from "sections";

import CodeAnimation from "../components/CodeAnimation";

const Home: NextPage = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const { setIsAnimationActive } = useAnimation();

  // Update animation state when showMainContent changes
  useEffect(() => {
    setIsAnimationActive(!showMainContent);
  }, [showMainContent, setIsAnimationActive]);

  return (
    <div className="min-h-screen">
    {/* Terminal Animation */}
    {!showMainContent && (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <CodeAnimation onComplete={() => setShowMainContent(true)} />
      </div>
    )}

    {/* Main Content */}
    {showMainContent && (
      <div className="w-5/6 mx-auto grid gap-24 animate-fade-in">
      <Header />
      <AboutMe />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-12">
      <Education />
      <Leadership />
      </div>

      <div>
      <Skills />
      </div>
      </div>

      <Projects />

      <Contact />
      <Footer />
      </div>
    )}
    </div>
  );
};

export default Home;
