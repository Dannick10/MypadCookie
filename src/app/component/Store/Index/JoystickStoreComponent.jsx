import React from "react";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import JoystickColor from "../../joystickColor/JoystickColor";
import { FaLock } from "react-icons/fa";

const JoystickStoreComponent = ({ items, player, Setplayer }) => {
  const handlebuyJoystick = (e) => {
    const joystick = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: {
        analogic: e.target.dataset.analogic,
        innerAnalogic: e.target.dataset.inneranalogic,
        buttonA: e.target.dataset.buttona,
        buttonB: e.target.dataset.buttonb,
        buttonX: e.target.dataset.buttonx,
        buttonY: e.target.dataset.buttony,
      },
    };

    if (player._money >= joystick.preco) {
      Setplayer(player.accMoney(joystick.preco));
      player.invetaryGerenateJoystick(joystick);
      return;
    }
  };

  const handleEquipeJoystick = (e) => {
    const joystick = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: {
        analogic: e.target.dataset.analogic,
        innerAnalogic: e.target.dataset.inneranalogic,
        buttonA: e.target.dataset.buttona,
        buttonB: e.target.dataset.buttonb,
        buttonX: e.target.dataset.buttonx,
        buttonY: e.target.dataset.buttony,
      },
    };

    player.changeJoystick(joystick);
  };

  return (
    <div
      className="bg-slate-600 p-1 rounded-lg relative"
      key={items.id}
      id={items}
    >
      {player.level >= items.level ? (
        false
      ) : (
        <FaLock className="absolute top-1 -right-2 z-20 text-2xl text-red-800 drop-shadow-2xl shadow-white" />
      )}
      {<JoystickColor key={items.id} player={player} items={items} />}
      <div className="flex justify-between items-center p-1">
   
        {player._invetary.joystick.every((e) => !e.id.includes(items.id)) ? (
          <>
            {player.level >= items.level ? (
              <button
                className="bg-green-300 text-sm p-1 rounded-md"
                onClick={handlebuyJoystick}
                data-id={items.id}
                data-analogic={items.colors.analogic}
                data-inneranalogic={items.colors.innerAnalogic}
                data-buttona={items.colors.buttonA}
                data-buttonb={items.colors.buttonB}
                data-buttonx={items.colors.buttonX}
                data-buttony={items.colors.buttonY}
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
            onClick={handleEquipeJoystick}
            data-id={items.id}
            data-analogic={items.colors.analogic}
            data-inneranalogic={items.colors.innerAnalogic}
            data-buttona={items.colors.buttonA}
            data-buttonb={items.colors.buttonB}
            data-buttonx={items.colors.buttonX}
            data-buttony={items.colors.buttonY}
            data-preco={items.preco}
            data-level={items.level}
          >
            Equipar
          </button>
        )}
        <p>{ConvertCoins(items.preco)}</p>
      </div>
    </div>
  );
};

export default JoystickStoreComponent;
