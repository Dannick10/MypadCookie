"use client";

import React, { useState, useReducer } from "react";
import Store from "@/models/store";
import ConvertCoins from "../../../../../functions/ConvertCoins";
import JoystickStoreComponent from "./JoystickStoreComponent";
import GamepadStoreComponent from "./GamepadStoreComponent";

const initalState = { category: "Gamepads" };

const reducer = (state, action) => {
  switch (action.type) {
    case "Joystick":
      return { category: "Joystick" };
    case "Gamepads":
      return { category: "Gamepads" };
  }
};

const StoreComponent = ({ player, Setplayer, SetOpenStore }) => {
  const [store, SetStore] = useState(new Store());

  const [state, dispatch] = useReducer(reducer, initalState);

  const ItemsColors = Object.values(store.themes_color);
  const ButtonColors = Object.values(store.themes_buttons);

  return (
    <div className="absolute min-h-full p-0.5  rounded-md text-white flex gap-2 overflow-auto w-full z-20 bg-gray-800 openstore">
      <div className="sticky top-0 -left-1 p-2 z-30 bg-gray-800">
        <button
          className=" p-2 bg-red-700 rounded-md"
          onClick={() => SetOpenStore(false)}
        >
          X
        </button>
        <p>Hi,{player.name}</p>
        <p>Sua Loja</p>
        <p>{ConvertCoins(player.money)}</p>
        <div className="flex flex-col gap-2">
          <button
            className="bg-lime-600 p-2 rounded-md"
            value={"Gamepads"}
            onClick={() => dispatch({ type: "Gamepads" })}
            style={state.category == 'Gamepads' ? {border: '2px solid white', boxShadow: '1px 1px 1px white'}: { border: '0'}}
          >
            Gamepads
          </button>
          <button
            className="bg-teal-600 p-2 rounded-md"
            value={"Joystick"}
            onClick={() => dispatch({ type: "Joystick" })}
            style={state.category == 'Joystick' ? {border: '2px solid white', boxShadow: '1px 1px 1px white'}: { border: '0'}}
          >
            Joystick
          </button>
        </div>
      </div>
      {state.category === "Joystick" ? (
        <>
          {ButtonColors.map((items, index) => (
            <>
              <JoystickStoreComponent
                key={`${items.id}-${index}`}
                items={items}
                player={player}
                Setplayer={Setplayer}
              />
            </>
          ))}
        </>
      ) : (
        <>
          {ItemsColors.map((items, index) => (
            <GamepadStoreComponent
              key={`${items.id}-${index}`}
              items={items}
              player={player}
              Setplayer={Setplayer}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default StoreComponent;
