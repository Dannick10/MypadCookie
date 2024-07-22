import React from "react";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import GamepadColor from "../../gamepadColor/gamepadColor";
import { FaLock } from "react-icons/fa";

const GamepadStoreComponent = ({ items, player, Setplayer }) => {
  const handlebuyGamepad = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: {
        main: e.target.dataset.main,
        screen: e.target.dataset.screen,
      },
    };

    if (player._money >= gamepad.preco) {
      Setplayer(player.accMoney(gamepad.preco));
      player.invetaryGerenateGamepad(gamepad);
      return;
    }
  };

  const handleEquip = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: { main: e.target.dataset.main, screen: e.target.dataset.screen },
    };

    Setplayer((Prevplayer) => Prevplayer.ChangeGamepad(gamepad));
  };

  return (
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
        {player._invetary.gamepads.every((e) => !e.id.includes(items.id)) ? (
          <>
            {player.level >= items.level ? (
              <button
                className="bg-green-300 text-sm p-1 rounded-md"
                onClick={handlebuyGamepad}
                data-id={items.id}
                data-screen={items.colors.screen}
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
            className={`bg-orange-600 text-sm p-1 rounded-md ${items.id == player._gamepad.id && 'bg-blue-600'}`}
            onClick={handleEquip}
            data-id={items.id}
            data-screen={items.colors.screen}
            data-main={items.colors.main}
            data-preco={items.preco}
            data-level={items.level}
          >
            {items.id == player._gamepad.id ? 'Em uso' : 'Equipar'}
          </button>
        )}
        <p>{ConvertCoins(items.preco)}</p>
      </div>
    </div>
  );
};

export default GamepadStoreComponent;
