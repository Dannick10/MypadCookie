"use client";

import React, { useState, useReducer } from "react";
import Store from "@/models/store";
import GamepadColor from "../../gamepadColor/gamepadColor";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import { FaLock } from "react-icons/fa";
import JoystickColor from "../../joystickColor/JoystickColor";
import JoystickStoreComponent from "./JoystickStoreComponent";
import GamepadStoreComponent from "./GamepadStoreComponent";

const initalState = {category: 'Gamepads'}

const reducer = (state,action) => {
  switch(action.type){
  case'Joystick':
    return {category: 'Joystick'
    }
  case 'Gamepads':
    return {category: 'Gamepads'}
}
}

const StoreComponent = ({ player, Setplayer, SetOpenStore }) => {
  const [store, SetStore] = useState(new Store());
  
  const [state, dispatch] = useReducer(reducer, initalState)

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
            onClick={() => dispatch({type: 'Gamepads'})}
          >
            Gamepads
          </button>
          <button
            className="bg-teal-600 p-2 rounded-md"
            value={"Joystick"}
            onClick={() => dispatch({type: 'Joystick'})}
          >
            Joystick
          </button>
        </div>
      </div>
      {state.category === 'Joystick' ? (
        <>
          {ButtonColors.map((items, index) => (
            <>
              <JoystickStoreComponent key={`${items.id}-${index}`} items={items} player={player} Setplayer={Setplayer}/>
            </>
          ))}
        </>
      ) : (
        <>
          {
            ItemsColors.map((items, index) => (
              <GamepadStoreComponent key={`${items.id}-${index}`} items={items} player={player} Setplayer={Setplayer}/>
            ))
          }
        </>
      )}
    </div>
  );
};

export default StoreComponent;
