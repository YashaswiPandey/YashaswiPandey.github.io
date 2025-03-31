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
import { useEffect, useRef,useState } from "react";

import { useLifeMetrics } from "../../hooks/useLifeMetrics";

const LifeTraining: React.FC = () => {
  const { epoch, batch, progress, metrics } = useLifeMetrics();
  const [dots, setDots] = useState("");
  const frameRef = useRef(0); // Store frame count without triggering rerenders

  useEffect(() => {
    const animate = () => {
      frameRef.current += 1;
      // Update dots every 40 frames (≈ 666ms at 60fps)
      setDots(".".repeat(Math.floor((frameRef.current / 40) % 4)));
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="terminal-container text-neutral-900 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-900 w-full max-w-4xl">
      <pre className="font-ntype82mono whitespace-pre-wrap break-words text-green-500">
        <span className="text-[#7bd88f]">{`Epoch `}</span>
        <span className="text-[#f7f1ff]">{epoch}</span>
        <span className="text-[#8b888f]">/? </span>

        <span className="text-[#7bd88f]">Batch </span>
        <span className="text-[#f7f1ff]">{batch}</span>
        <span className="text-[#8b888f]">/</span>
        <span className="text-[#f7f1ff]">{metrics.totalBatches} </span>
        <span className="text-[#fce566]">{progress.bar}</span>
        <span className="text-[#8b888f]"> - </span>
        <span className="text-[#948ae3]">{progress.percentage}%</span>
        <br />

        <span className="text-[#fc618d]">-loss: </span>
        <span className="text-[#948ae3]">{metrics.loss.toFixed(4)} </span>

        <span className="text-[#fc618d]">-acc: </span>
        <span className="text-[#948ae3]">{metrics.accuracy.toFixed(4)} </span>

        <span className="text-[#fc618d]">-val_loss: </span>
        <span className="text-[#948ae3]">{metrics.valLoss.toFixed(4)} </span>

        <span className="text-[#fc618d]">-val_acc: </span>
        <span className="text-[#948ae3]">{metrics.valAccuracy.toFixed(4)}</span>
        <br />

        <span className="text-[#fc618d]">-lr: </span>
        <span className="text-[#948ae3]">0.0010 </span>

        <span className="text-[#fc618d]">-steps/sec: </span>
        <span className="text-[#948ae3]">1.16e-05</span>
        <br />

        <span className="text-[#fc618d]">-advancing_through_life: </span>
        <span className="text-[#fce566]">In Progress</span>
        <span className="text-[#7bd88f] cursor" style={{ fontSize: "1.2em" }}>
          {dots}
        </span>
      </pre>
    </div>
  );
};

export default LifeTraining;
