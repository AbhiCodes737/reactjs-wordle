import { observer } from "mobx-react-lite";

export default observer(function Qwerty({ score, number, onKeyPress }) {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const handleClick = (key) => {
    onKeyPress(key.toLowerCase());
  };
  const handleSpecialKey = (key) => {
    onKeyPress(key);
  };
  return (
    <div className="mt-8 mb-8">
      {qwerty.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center my-1">
          {row.split("").map((key, keyIndex) => {
            let bgColor;
            switch (number) {
              case 5:
                bgColor = score.exactGuesses5.includes(key)
                  ? "bg-green-600"
                  : score.inexactGuesses5.includes(key)
                  ? "bg-yellow-400"
                  : score.allGuesses.includes(key)
                  ? "bg-gray-800"
                  : "bg-gray-400";
                break;
              case 6:
                bgColor = score.exactGuesses6.includes(key)
                  ? "bg-green-600"
                  : score.inexactGuesses6.includes(key)
                  ? "bg-yellow-400"
                  : score.allGuesses.includes(key)
                  ? "bg-gray-800"
                  : "bg-gray-400";
                break;
              case 7:
                bgColor = score.exactGuesses7.includes(key)
                  ? "bg-green-600"
                  : score.inexactGuesses7.includes(key)
                  ? "bg-yellow-400"
                  : score.allGuesses.includes(key)
                  ? "bg-gray-800"
                  : "bg-gray-400";
                break;
            }

            const txtColor = score.allGuesses.includes(key)
              ? "text-white"
              : "text-black";

            return (
              <div
                key={keyIndex}
                className={`h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:w-14 lg:h-14 ${bgColor} ${txtColor} flex rounded-md font-bold items-center text-xl justify-center mx-0.5 md:mx-1 lg:mx-1 uppercase cursor-pointer`}
                onClick={() => handleClick(key)}
              >
                {key}
              </div>
            );
          })}
        </div>
      ))}
      <div className="flex justify-center my-1">
        <div
          className={`w-24 h-10 sm:w-28 sm:h-14 md:w-28 md:h-14 lg:w-28 lg:h-14 bg-gray-400 text-black flex rounded-md font-bold items-center text-xl justify-center mx-1 uppercase cursor-pointer`}
          onClick={() => handleSpecialKey("Backspace")}
        >
          Backspace
        </div>
        <div
          className={`w-20 h-10 sm:w-28 sm:h-14 md:w-28 md:h-14 lg:w-28 lg:h-14 bg-gray-400 text-black flex rounded-md font-bold items-center text-xl justify-center mx-1 uppercase cursor-pointer`}
          onClick={() => handleSpecialKey("Enter")}
        >
          Enter
        </div>
      </div>
    </div>
  );
});
