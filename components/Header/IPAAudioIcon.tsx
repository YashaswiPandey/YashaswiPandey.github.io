/**
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
import React, { useRef, useState } from "react";

const IPAAudioIcon: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className={`relative -top-1 -right-2 transition-transform duration-300 ${
          isPlaying ? "rotate-[-30deg]" : "hover:rotate-[-20deg]"
        }`}
        aria-label="Play IPA pronunciation"
      >
        <svg width="24" height="24" viewBox="0 0 75 75" className="text-gray-800 dark:text-gray-200">
          <path
            d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Arcs that appear sequentially and stay visible */}
          <path
            d="M48,27.6a19.5,19.5 0 0 1 0,21.4"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            className={`opacity-0 ${isPlaying ? "animate-arc-1" : ""}`}
          />
          <path
            d="M55.1,20.5a30,30 0 0 1 0,35.6"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            className={`opacity-0 ${isPlaying ? "animate-arc-2" : ""}`}
          />
          <path
            d="M61.6,14a38.8,38.8 0 0 1 0,48.6"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            className={`opacity-0 ${isPlaying ? "animate-arc-3" : ""}`}
          />
        </svg>
      </button>

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} src="/audio/ipa_transcription.mp3" />
    </div>
  );
};

export default IPAAudioIcon;
