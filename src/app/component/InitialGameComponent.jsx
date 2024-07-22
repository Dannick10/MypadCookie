"use client";

import React, { useState } from "react";
import Image from "next/image";
import Cookiepot from "../../../public/Cookiepot.svg";
import ConvertCoins from "../../../functions/ConvertCoins";
import StoreComponent from "./Store/Index/StoreComponent";
import Inventory from "./Inventory/Inventory";
import { IoStorefront } from "react-icons/io5";
import { BsFillBackpack2Fill } from "react-icons/bs";
import { IoIosSave } from "react-icons/io";
import { TbCookieManFilled } from "react-icons/tb";
import { FaCookie } from "react-icons/fa";
import Createuser from "./createuser/Createuser";

const InitialGameComponent = ({
  cookie,
  player,
  Setplayer,
  handleUser,
  SetOpenUser,
  openUser,
}) => {
  const [level, Setlevel] = useState(0);
  const [color, SetColor] = useState("bg-red-400");
  const [openStore, SetOpenStore] = useState(false);
  const [openInventory, SetOpenInventory] = useState(false);

  const oddCookie = () => {
    const updatePlayer = player.clickCookie(1);
    Setplayer(player.clickCookie(1));

    if (player.quantityCookie % Math.floor(10 + player._level) == 1) {
      Setlevel(Math.round(level + 10));
    }

    console.log(player);

    changeColor();

    if (level >= 100) {
      Setlevel(0);
    }
  };

  const changeColor = () => {
    if (level <= 30) {
      SetColor("bg-red-400");
    } else if (level <= 50) {
      SetColor("bg-amber-600");
    } else if (level <= 80) {
      SetColor("bg-green-400");
    } else if (level <= 100) {
      SetColor("bg-lime-400");
    }
  };

  const handleSaveUser = () => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    const player_id = player._id;

    const playerIndex = storageUsers.findIndex((p) => p._id === player_id);

    if (playerIndex !== -1) {
      storageUsers[playerIndex] = player;

      localStorage.setItem("users", JSON.stringify(storageUsers));
    }
  };

  return (
    <main
      role="game-pad"
      className="flex flex-col justify-around w-96 h-full p-2 rounded-lg bg-amber-600 border-2 border-white overflow-hidden"
      style={{ background: player._gamepad.colors.main }}
    >
      <section
        role="application"
        className="w-full flex items-center flex-col justify-center border-2 rounded-lg bg-slate-800 border-white relative overflow-hidden"
        style={{ background: player._gamepad.colors.screen }}
      >
        {openStore && (
          <StoreComponent
            player={player}
            Setplayer={Setplayer}
            SetOpenStore={SetOpenStore}
          />
        )}
        {openInventory && (
          <Inventory
            player={player}
            Setplayer={Setplayer}
            SetOpenInventory={SetOpenInventory}
          />
        )}
        {openUser && <Createuser handleUser={handleUser} />}
        <div className="start flex items-center justify-center gap-2">
          <h1 className="text-xl font-bold text-pink-400">
            <span className="text-blue-400">My</span>{" "}
            <span className="text-xl text-white">pad</span>Cookie
          </h1>
          <div className="loader"></div>
        </div>

        <div className="w-full h-2 bg-white relative rounded-md overflow-hidden">
          <div
            className={`h-full absolute left-0 w-[0%] life ${color}`}
            style={{ width: `${level}%` }}
          ></div>
        </div>

        <Image
          src={cookie.img}
          width={200}
          height={200}
          alt="Biscoito"
          priority
          onClick={oddCookie}
          className="active:translate-x-2 transition-all"
        />

        <p className="text-white text-xl font-bold absolute right-2 top-5 flex items-center justify-between gap-2">
          <Image
            src={Cookiepot}
            alt="cookie pot"
            width={20}
            height={20}
            priority
          />
          {player.quantityCookie}
        </p>
        <aside className="flex items-center justify-around text-2xl w-full">
          <div className="text-white font-light">
            <p className="">{ConvertCoins(player.money)}</p>
          </div>

          <button
            className="text-xl text-white itemsAnimation relative"
            onClick={() => SetOpenStore(true)}
          >
            <span className="absolute -top-6 left-0 text-xs border-2 p-0.5 rounded-md hidden">
              LOJA
            </span>
            <IoStorefront />
          </button>

          <button
            className="text-xl text-white itemsAnimation"
            onClick={() => SetOpenInventory(true)}
          >
            <span className="absolute -top-6 left-0 text-xs border-2 p-0.5 rounded-md hidden">
              Inventario
            </span>
            <BsFillBackpack2Fill />
          </button>

          <button
            className="text-xl text-white itemsAnimation"
            onClick={handleSaveUser}
          >
            <span className="absolute -top-6 left-0 text-xs border-2 p-0.5 rounded-md hidden">
              Salvar
            </span>
            <IoIosSave />
          </button>

          <button
            className="text-xl text-white itemsAnimation"
            onClick={() => SetOpenUser(true)}
          >
            <span className="absolute -top-6 left-0 text-xs border-2 p-0.5 rounded-md hidden">
              Jogadores
            </span>
            <TbCookieManFilled />
          </button>

          <div className="flex items-center gap-2 text-white font-light">
            <p>LV</p>

            <p>{player.level.toFixed(1)}</p>
          </div>
        </aside>
      </section>
      <footer
        role="pads"
        className="flex justify-between items-center relative"
      >
        <div
          role="analogic"
          className="w-32 h-32 bg-zinc-800 rounded-full relative"
          style={{ background: player._joystick.colors.analogic }}
        >
          <div
            className="w-[50%] h-[50%] translate-x-[50%] translate-y-[50%]  bg-zinc-900 rounded-full absolute"
            style={{ background: player._joystick.colors.innerAnalogic }}
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center w-32">
          <div className="flex items-center justify-center w-full">
            <div
              className="bg-orange-600 w-10 h-10 rounded-full items-center justify-center flex"
              style={{ background: player._joystick.colors.buttonY }}
            >
              <p className="text-white">Y</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div
              className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: player._joystick.colors.buttonX }}
            >
              <p className="text-white">X</p>
            </div>
            <div
              className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: player._joystick.colors.buttonB }}
            >
              <p className="text-white">B</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className="bg-green-700 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: player._joystick.colors.buttonA }}
            >
              <p className="text-white">A</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default InitialGameComponent;
