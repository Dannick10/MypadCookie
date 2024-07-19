"use client";

import React, { useState } from "react";
import Store from "@/models/store";
import GamepadColor from "../../gamepadColor/gamepadColor";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import { FaLock } from "react-icons/fa";

const StoreComponent = ({ player, Setplayer, SetOpenStore }) => {
  const [store, SetStore] = useState(new Store());

  const handlebuy = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: { main: e.target.dataset.main, screen: e.target.dataset.screen },
    };

    if (player._money >= gamepad.preco) {
      Setplayer(player.accMoney(gamepad.preco));
      player.invetaryGerenate(gamepad);
      return;
    }
  };
  console.log(player)
  const handleEquip = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: { main: e.target.dataset.main, screen: e.target.dataset.screen },
    };

    player.ChangeGamepad(gamepad);
  };

  const ItemsColors = Object.values(store.themes_color);

  return (
    <div className="absolute p-4 rounded-md text-white flex gap-2 overflow-auto w-full z-20 bg-gray-800 openstore">
      <div>
        <button
          className=" p-2 bg-red-700 rounded-md"
          onClick={() => SetOpenStore(false)}
        >
          X
        </button>
        <p>Hi,{player.name}</p>
        <hr />
        <p>{ConvertCoins(player.money)}</p>
      </div>

      {ItemsColors.map((items, index) => (
        <div className="bg-slate-600 p-1 rounded-lg relative" key={items.id}>
          {player.level >= items.level ? (
            false
          ) : (
            <FaLock className="absolute -top-2 -right-2 z-20 text-2xl text-red-800 drop-shadow-2xl shadow-white" />
          )}

          <GamepadColor
            main={items.colors.main}
            screen={items.colors.screen}
            items={items}
          />
          <div className="flex justify-between items-center p-1">
            {player._invetary.every((e) => !e.id.includes(items.id)) ? (
              <>
                {player.level >= items.level ? (
                  <button
                    className="bg-green-300 text-sm p-1 rounded-md"
                    onClick={handlebuy}
                    data-id={items.id}
                    data-screen={items.colors.main}
                    data-main={items.colors.main}
                    data-preco={items.preco}
                    data-level={items.level}
                  >
                    Comprar
                  </button>
                ) : (
                  <button className="bg-red-500 text-sm p-1 rounded-md">
                    Level {items.level}
                  </button>
                )}
              </>
            ) : (
              <button
                className="bg-orange-600 text-sm p-1 rounded-md"
                onClick={handleEquip}
                data-id={items.id}
                data-screen={items.colors.main}
                data-main={items.colors.main}
                data-preco={items.preco}
                data-level={items.level}
              >
                Equipar
              </button>
            )}
            <p>{ConvertCoins(items.preco)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreComponent;
