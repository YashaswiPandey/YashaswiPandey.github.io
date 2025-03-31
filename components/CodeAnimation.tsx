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

const CodeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    ` <span class="text-[#f7f1ff]">Yashaswi</span>.<span class="text-[#7bd88f]">load_checkpoint</span>()\n\n` +
      `<span class="text-[#69676c] italic"># Restart training</span>\n` +
      `<span class="text-[#f7f1ff]">Yashaswi</span>.<span class="text-[#7bd88f]">fit</span>(\n` +
      `    <span class="text-[#fc618d]">dataset</span>=<span class="text-[#fce566]">'world'</span>,\n` +
      `    <span class="text-[#fc618d]">epochs</span>=<span class="text-[#f7f1ff]">Yashaswi</span>.<span class="text-[#7bd88f]">lifeExpectancy</span>(<span class="text-[#948ae3]">YYYY</span>),  <span class="text-[#69676c] italic"># Number of years in human life</span>\n` +
      `    <span class="text-[#fc618d]">num_batches</span>=<span class="text-[#f7f1ff]">year</span>.<span class="text-[#7bd88f]">num_days</span>(),  <span class="text-[#69676c] italic"># Days in a year</span>\n` +
      `    <span class="text-[#fc618d]">batch_size</span>=<span class="text-[#948ae3]">1</span>,  <span class="text-[#69676c] italic"># Taking each day as it comes</span>\n` +
      `    <span class="text-[#fc618d]">validation_data</span>=<span class="text-[#fce566]">'parental_expectations'</span>,\n` +
      `    <span class="text-[#fc618d]">callbacks</span>=[\n` +
      `        <span class="text-[#fce566]">'friendship_maintenance'</span>,\n` +
      `        <span class="text-[#fce566]">'career_advice_ignoring'</span>,\n` +
      `        <span class="text-[#fce566]">'new_year_resolutions'</span>\n` +
      `    ],\n` +
      `    <span class="text-[#fc618d]">shuffle</span>=<span class="text-[#fce566]">'life_circumstances'</span>,\n` +
      `    <span class="text-[#fc618d]">verbose</span>=<span class="text-[#948ae3]">True</span>,  <span class="text-[#69676c] italic"># Constant internal monologue</span>\n` +
      `    <span class="text-[#fc618d]">loop</span>=<span class="text-[#948ae3]">True</span>  <span class="text-[#69676c] italic"># Infinite training until shutdown (ॐ)</span>\n` +
      `)\n\n` +
      `<span class="text-[#69676c] italic"># Note: The model tends to overfit cultural biases and requires regular reality checks.</span>\n`,
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;
    let phaseContent = phases[currentPhase];

    const startTyping = () => {
      setShowCursor(false);

      const typeCharacter = () => {
        if (currentIndex < phaseContent.length - 1) {
          setDisplayText((prev) => prev + phaseContent[currentIndex]);
          currentIndex++;
          setTimeout(typeCharacter, 0.5); // Faster typing
        } else {
          setShowCursor(true);
          timeout = setTimeout(() => {
            setDisplayText("");
            setCurrentPhase((prev) => prev + 1);
          }, 2000);
        }
      };

      typeCharacter();
    };

    // Initial delay for cursor blink
    const initialDelay = setTimeout(() => {
      startTyping();
    }, 1000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [currentPhase]);

  useEffect(() => {
    if (currentPhase >= phases.length) {
      onComplete();
    }
  }, [currentPhase, onComplete]);

  return (
    <div
      className="terminal-container w-full max-w-[90%] md:max-w-4xl mx-auto
    h-[700px] sm:h-[700px] md:h-[660px]
    overflow-hidden p-3 md:p-6 bg-black rounded-lg flex items-center justify-center"
    >
      <pre
        className="font-mono
    text-xl
    whitespace-pre-wrap break-words w-full h-full text-white overflow-hidden"
        style={{
          lineHeight: "1.5",
          whiteSpace: "pre-wrap", // Ensure consistent whitespace handling
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: displayText }} />
        <span className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
      </pre>
    </div>
  );
};

export default CodeAnimation;
