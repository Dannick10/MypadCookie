"use client";

import React, { useState } from "react";
import Image from "next/image";
import Cookiepot from "../../../../public/Cookiepot.svg";
import Cookie from "../../../../public/cookie.png";
import { IoStorefront } from "react-icons/io5";


const GamepadColor = ({ main, screen, items }) => {


  const [color, SetColor] = useState({
    main: main,
    screen: screen,
  });

  return (
    <div
      role="game-pad"
      className="flex flex-col justify-around w-40 h-42 border-2 border-white p-2 gap-2 rounded-lg overflow-hidden"
      style={{ background: color.main }}
    >
      <section
        role="application"
        className="w-full flex items-center flex-col justify-between  border-2 border-white rounded-lg relative h-24"
        style={{ background: color.screen }}
      >
        <div className="w-full h-1 top-0 bg-white relative rounded-md overflow-hidden">
          <div
            className={`h-full absolute bg-green-700 left-0 w-[0%] life`}
            style={{ width: `0%` }}
          ></div>
        </div>
        <Image src={Cookie} alt="imagem cookie" width={50} height={50} priority />

        <p className="text-white text-sm font-bold absolute right-2 top-5 flex items-center justify-between gap-2">
          <Image
            src={Cookiepot}
            alt="cookie pot"
            width={20}
            height={20}
            priority
          />
          1
        </p>
        <aside className="flex items-center justify-around text-sm w-full">
          <div className="font-light">
            <p className="">100</p>
          </div>

          <button className="text-xl">
            <IoStorefront />
          </button>

          <div className="flex items-center gap- font-light">
            <p>LV</p>

            <p>1</p>
          </div>
        </aside>
      </section>
      <footer
        role="pads"
        className="flex justify-between items-center relative"
      >
        <div
          role="analogic"
          className="w-10 h-10 bg-zinc-800 rounded-full relative"
          style={{ background: color.analogic }}
        >
          <div className="w-[50%] h-[50%] translate-x-[50%] translate-y-[50%]  bg-zinc-900 rounded-full absolute"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-12">
          <div className="flex items-center justify-center w-full">
            <div className="bg-orange-600 w-4 h-4 rounded-full items-center justify-center flex">
              <p className="text-white text-sm">Y</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="bg-red-700 w-4 h-4 rounded-full flex items-center justify-center">
              <p className="text-white text-sm">X</p>
            </div>
            <div className="bg-blue-700 w-4 h-4 rounded-full flex items-center justify-center">
              <p className="text-white text-sm">B</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="bg-green-700 w-4 h-4 rounded-full flex items-center justify-center">
              <p className="text-white text-sm">A</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamepadColor;
