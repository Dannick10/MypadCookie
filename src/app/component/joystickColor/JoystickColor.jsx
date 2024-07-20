import React from "react";

const JoystickColor = ({ player, items }) => {
  const { id, level, preco, colors } = items;

  return (
    <div
      role="game-pad"
      className="flex flex-col justify-around w-40 h-40 border-2 border-white p-2 rounded-lg overflow-hidden"
      key={id}
      style={{ background: player._gamepad.colors.main }}
    >
      <section
        className="w-full h-20 bg-gray-700  border-2 border-white rounded-md"
        style={{ background: player._gamepad.colors.screen }}
      ></section>
      <footer
        role="pads"
        className="flex justify-between items-center relative"
      >
        <div
          role="analogic"
          className="w-10 h-10 bg-zinc-800 rounded-full relative"
          style={{ background: colors.analogic }}
        >
          <div className="w-[50%] h-[50%] translate-x-[50%] translate-y-[50%]  bg-zinc-900 rounded-full absolute"
            style={{ background: colors.innerAnalogic }}
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center w-12">
          <div className="flex items-center justify-center w-full">
            <div
              className="bg-orange-600 w-4 h-4 rounded-full items-center justify-center flex"
              style={{ background: colors.buttonY }}
            >
              <p className="text-white text-sm">Y</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div
              className="bg-red-700 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: colors.buttonX }}
            >
              <p className="text-white text-sm">X</p>
            </div>
            <div
              className="bg-blue-700 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: colors.buttonB }}
            >
              <p className="text-white text-sm">B</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className="bg-green-700 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: colors.buttonA }}
            >
              <p className="text-white text-sm">A</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JoystickColor;
