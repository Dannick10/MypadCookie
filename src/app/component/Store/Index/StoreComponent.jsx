"use client";

import React, { useState } from "react";
import Store from "@/models/store";
import GamepadColor from "../../gamepadColor/gamepadColor";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import { FaLock } from "react-icons/fa";
import JoystickColor from "../../joystickColor/JoystickColor";

const StoreComponent = ({ player, Setplayer, SetOpenStore }) => {
  const [store, SetStore] = useState(new Store());
  const [Category, Setcategory] = useState("Gamepads");

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

  const handleEquip = (e) => {
    const gamepad = {
      id: e.target.dataset.id,
      preco: e.target.dataset.preco,
      level: e.target.dataset.level,
      colors: { main: e.target.dataset.main, screen: e.target.dataset.screen },
    };

    player.ChangeGamepad(gamepad);
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

  const handleChangeCategory = (e) => {
    console.log(e.target.innerHTML)
    if(e.target.innerHTML == 'Gamepads'){
      Setcategory(e.target.innerHTML)
    } else {
      Setcategory(e.target.innerHTML)

    }
  }

  const ItemsColors = Object.values(store.themes_color);
  const ButtonColors = Object.values(store.themes_buttons);
  return (
    <div className="absolute min-h-full p-4 rounded-md text-white flex gap-2 overflow-auto w-full z-20 bg-gray-800 openstore">
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
        <div className="flex flex-col gap-2">
          <button
            className="bg-lime-600 p-2 rounded-md"
            value={"Gamepads"}
            onClick={handleChangeCategory}
          >
            Gamepads
          </button>
          <button
            className="bg-teal-600 p-2 rounded-md"
            value={"Joystick"}
            onClick={handleChangeCategory}
          >
            Joystick
          </button>
        </div>
      </div>
      {Category == "Gamepads" ? (
        <>
          {ButtonColors.map((items, index) => (
            <>
              <div
                className="bg-slate-600 p-1 rounded-lg relative"
                key={items.id}
                id={items}
              >
                {player.level >= items.level ? (
                  false
                ) : (
                  <FaLock className="absolute -top-2 -right-2 z-20 text-2xl text-red-800 drop-shadow-2xl shadow-white" />
                )}
                {<JoystickColor key={items.id} player={player} items={items} />}
                <div className="flex justify-between items-center p-1">
                  {player._invetary.joystick.every(
                    (e) => !e.id.includes(items.id)
                  ) ? (
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
            </>
          ))}
        </>
      ) : (
        <>
          {
            ItemsColors.map((items, index) => (
              <div
                className="bg-slate-600 p-1 rounded-lg relative"
                key={items.id}
              >
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
                  {player._invetary.gamepads.every(
                    (e) => !e.id.includes(items.id)
                  ) ? (
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
                      className="bg-orange-600 text-sm p-1 rounded-md"
                      onClick={handleEquip}
                      data-id={items.id}
                      data-screen={items.colors.screen}
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
            ))
          }
        </>
      )}
    </div>
  );
};

export default StoreComponent;
