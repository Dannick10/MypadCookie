"use client";

import Player from "@/models/Player";
import Cookies from "@/models/Cookies";
import imgCookie from "../../public/cookie.png";

import { useState } from "react";
import InitialGameComponent from "@/app/component/InitialGameComponent";

export default function Home() {
  const [openUser, SetOpenUser] = useState(true)

  const [playersBanco, SetplayerBanco] = useState(
    new Player("Daniel")
  );
  const [cookie, SetCookie] = useState(new Cookies(imgCookie));

  const handleUser = (user) => {
  

    SetplayerBanco(
      new Player(
        user._id,
        user._name,
        user._level,
        user._money,
        user._quantityCookie,
        (user._invetary = {
          gamepads: [...user._invetary.gamepads],
          joystick: [...user._invetary.joystick],
        }),
        user._gamepad,
        user._joystick
      )
    )

    SetOpenUser(false)
  };


  return (
    <main className="flex flex-col items-center bg-slate-300 justify-between p-24">
      <InitialGameComponent
        cookie={cookie}
        player={playersBanco}
        Setplayer={SetplayerBanco}
        handleUser={handleUser}
        SetOpenUser={SetOpenUser}
        openUser={openUser}
      />
    </main>
  );
}
