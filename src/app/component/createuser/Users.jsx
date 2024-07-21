import React from "react";
import ConvertCoins from "../../../../functions/ConvertCoins";
import GamepadColor from "../gamepadColor/gamepadColor";

const Users = ({ user, handleUser }) => {
  return (
    <div
      className="border-2 p-2 rounded-md bg-gray-500 flex  gap-2"
      style={{ background: user._gamepad.colors.main }}
    >
      <div className="flex justify-between gap-4"> 
        <div>
         <span>Nome</span>
          <p>{user._name}</p>
         <span>Level</span>
          <p>{user._level.toFixed(1)}</p>
         <span>Money</span>
          <p>{ConvertCoins(user._money)}</p>
        </div>
        <div>
          <GamepadColor
        main={user._gamepad.colors.main}
        screen={user._gamepad.colors.screen}
        items={user}
        />
        </div>


        </div>
        <div className="flex gap-2 flex-col">
          <button
            className="bg-slate-700 p-2 rounded-md"
            onClick={() => handleUser(user)}
            style={{ background: user._joystick.colors.buttonY }}
          >
            JOGAR
          </button>
          <button
            className="bg-slate-700 p-2 rounded-md"
            onClick={() => handleUser(user)}
            style={{ background: user._joystick.colors.buttonB }}
          >
            Edit
          </button>
          <button
            className="bg-slate-700 p-2 rounded-md"
            onClick={() => handleUser(user)}
            style={{ background: user._joystick.colors.buttonA }}
          >
            Excluir
          </button>
        </div>
      </div>
  );
};

export default Users;
