import React from "react";
import GamepadColor from "../gamepadColor/gamepadColor";

const Inventory = ({ player, SetOpenInventory }) => {
  const itemsIventary = player._invetary;

  const handleEquip = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: { main: e.target.dataset.main, screen: e.target.dataset.screen },
    };

    player.ChangeGamepad(gamepad);
  };

  return (
    <div className="absolute top-0 left-0 p-4 rounded-md text-white flex gap-2 overflow-auto w-full z-20 bg-gray-800 openstore">
      <div>
        <button
          className="px-3 p-2 bg-red-700 rounded-md"
          onClick={() => SetOpenInventory(false)}
        >
          X
        </button>
        <p>Hi,{player.name}</p>
      </div>
      {itemsIventary.map((items) => (
        <div className="bg-slate-600 p-1 rounded-lg relative">
          <GamepadColor
            main={items.colors.main}
            screen={items.colors.screen}
            items={items}
          />
          <div className="flex justify-between items-center p-1">
            <button
              className="bg-orange-600 text-sm p-1 rounded-md"
              data-id={items.id}
              data-screen={items.colors.main}
              data-main={items.colors.main}
              data-preco={items.preco}
              data-level={items.level}
              onClick={handleEquip}
            >
              Equipar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
