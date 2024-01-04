import React from "react";

export default function Guess5({ isGuessed, guess, word }) {
  let charMap = {};
  let wordMap = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    wordMap[char] = (wordMap[char] || 0) + 1;
    charMap[guess[i]] = 0;
    if (word[i] === guess[i]) {
      charMap[guess[i]]++;
    }
  }
  return (
    <div className="grid grid-cols-6 gap-2 mb-2">
      {new Array(6).fill(0).map((_, i) => {
        charMap[guess[i]]++;
        const bgColor = !isGuessed
          ? "bg-gray-200"
          : guess[i] === word[i]
          ? "bg-green-600"
          : word.includes(guess[i]) && wordMap[guess[i]] >= charMap[guess[i]]
          ? "bg-yellow-400"
          : "bg-gray-800";

        const borColor = !isGuessed
          ? "black"
          : guess[i] === word[i]
          ? "green-600"
          : word.includes(guess[i]) && wordMap[guess[i]] >= charMap[guess[i]]
          ? "yellow-400"
          : "gray-800";

        const anim = isGuessed ? "animate-[flip_0.5s_ease_forwards]" : "";

        const txtColor = !isGuessed ? "text-black" : "text-white";

        return (
          <div
            className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 border transition-colors border-${borColor} font-bold text-3xl ${txtColor} uppercase flex items-center justify-center ${bgColor} ${anim}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
}
